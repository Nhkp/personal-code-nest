import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Play, Pause, Trash2, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

interface CanMessage {
  id: string;
  data: string;
  timestamp: number;
  type: "tx" | "rx";
}

const CanDemo = () => {
  const [isSimulating, setIsSimulating] = useState(false);
  const [messages, setMessages] = useState<CanMessage[]>([]);
  const [canId, setCanId] = useState("0x123");
  const [canData, setCanData] = useState("00 00 00 00 00 00 00 00");
  const [busLoad, setBusLoad] = useState(0);
  const { toast } = useToast();

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isSimulating) {
      interval = setInterval(async () => {
        try {
          const response = await fetch(`${BACKEND_URL}/api/can/messages`);
          if (response.ok) {
            const data = await response.json();
            setMessages(prev => [...data, ...prev].slice(0, 100));
            setBusLoad(data.busLoad || Math.random() * 100);
          }
        } catch (error) {
          console.error("Failed to fetch CAN messages:", error);
        }
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isSimulating]);

  const handleStartStop = async () => {
    try {
      const endpoint = isSimulating ? "stop" : "start";
      const response = await fetch(`${BACKEND_URL}/api/can/${endpoint}`, {
        method: "POST",
      });

      if (response.ok) {
        setIsSimulating(!isSimulating);
        toast({
          title: isSimulating ? "Simulator Stopped" : "Simulator Started",
          description: `CAN bus simulator ${isSimulating ? "stopped" : "started"} successfully`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to connect to backend",
        variant: "destructive",
      });
    }
  };

  const handleSendMessage = async () => {
    try {
      const response = await fetch(`${BACKEND_URL}/api/can/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: canId,
          data: canData.split(" ").map(b => parseInt(b, 16)),
        }),
      });

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: `CAN ID: ${canId}`,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message",
        variant: "destructive",
      });
    }
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold leading-tight pb-2 gradient-text mb-2">CAN BUS Simulator</h1>
          <p className="text-muted-foreground">
            Real-time Controller Area Network bus simulation and monitoring
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Control Panel */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Simulator Control</CardTitle>
              <CardDescription>Start/stop the CAN bus simulator</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                onClick={handleStartStop}
                className="w-full"
                variant={isSimulating ? "destructive" : "default"}
              >
                {isSimulating ? (
                  <>
                    <Pause className="mr-2 h-4 w-4" />
                    Stop Simulation
                  </>
                ) : (
                  <>
                    <Play className="mr-2 h-4 w-4" />
                    Start Simulation
                  </>
                )}
              </Button>

              <div className="pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Bus Load</span>
                  <span className="font-mono">{busLoad.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-300"
                    style={{ width: `${busLoad}%` }}
                  />
                </div>
              </div>

              <div className="pt-2 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Messages</span>
                  <span className="font-mono">{messages.length}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Status</span>
                  <Badge variant={isSimulating ? "default" : "secondary"}>
                    {isSimulating ? "Running" : "Stopped"}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Send Message Panel */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Send CAN Message</CardTitle>
              <CardDescription>Transmit a custom CAN frame</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="can-id">CAN ID (Hex)</Label>
                <Input
                  id="can-id"
                  value={canId}
                  onChange={(e) => setCanId(e.target.value)}
                  placeholder="0x123"
                  className="font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="can-data">Data (8 bytes, Hex)</Label>
                <Input
                  id="can-data"
                  value={canData}
                  onChange={(e) => setCanData(e.target.value)}
                  placeholder="00 00 00 00 00 00 00 00"
                  className="font-mono"
                />
              </div>

              <Button onClick={handleSendMessage} className="w-full">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Statistics */}
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Statistics</CardTitle>
              <CardDescription>Bus activity metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">TX Messages</p>
                  <p className="text-2xl font-bold">
                    {messages.filter(m => m.type === "tx").length}
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">RX Messages</p>
                  <p className="text-2xl font-bold">
                    {messages.filter(m => m.type === "rx").length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Message Monitor */}
        <Card className="glass-card mt-6">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Message Monitor</CardTitle>
                <CardDescription>Real-time CAN bus traffic</CardDescription>
              </div>
              <Button onClick={clearMessages} variant="outline" size="sm">
                <Trash2 className="mr-2 h-4 w-4" />
                Clear
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="tx">TX</TabsTrigger>
                <TabsTrigger value="rx">RX</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-2 font-mono text-sm">
                    {messages.length === 0 ? (
                      <p className="text-muted-foreground text-center py-8">
                        No messages yet. Start the simulator to see CAN traffic.
                      </p>
                    ) : (
                      messages.map((msg, idx) => (
                        <div
                          key={idx}
                          className="flex gap-4 p-2 rounded hover:bg-accent/50 transition-colors"
                        >
                          <Badge variant={msg.type === "tx" ? "default" : "secondary"}>
                            {msg.type.toUpperCase()}
                          </Badge>
                          <span className="text-muted-foreground">
                            {new Date(msg.timestamp).toLocaleTimeString()}
                          </span>
                          <span className="text-primary">{msg.id}</span>
                          <span className="flex-1">{msg.data}</span>
                        </div>
                      ))
                    )}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="tx" className="mt-4">
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-2 font-mono text-sm">
                    {messages.filter(m => m.type === "tx").map((msg, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-2 rounded hover:bg-accent/50 transition-colors"
                      >
                        <Badge variant="default">TX</Badge>
                        <span className="text-muted-foreground">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                        <span className="text-primary">{msg.id}</span>
                        <span className="flex-1">{msg.data}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
              
              <TabsContent value="rx" className="mt-4">
                <ScrollArea className="h-[400px] w-full rounded-md border p-4">
                  <div className="space-y-2 font-mono text-sm">
                    {messages.filter(m => m.type === "rx").map((msg, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 p-2 rounded hover:bg-accent/50 transition-colors"
                      >
                        <Badge variant="secondary">RX</Badge>
                        <span className="text-muted-foreground">
                          {new Date(msg.timestamp).toLocaleTimeString()}
                        </span>
                        <span className="text-primary">{msg.id}</span>
                        <span className="flex-1">{msg.data}</span>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CanDemo;
