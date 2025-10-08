import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI Chat Application",
    description: "Real-time chat application with AI-powered responses, user authentication, and message encryption.",
    tags: ["Next.js", "WebSocket", "OpenAI", "MongoDB"],
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with kanban boards, time tracking, and team analytics.",
    tags: ["Vue.js", "FastAPI", "Redis", "Docker"],
    image: "bg-gradient-to-br from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with custom visualizations, data exports, and automated reporting.",
    tags: ["React", "D3.js", "Python", "AWS"],
    image: "bg-gradient-to-br from-green-500/20 to-cyan-500/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="glass-card border-border/50 hover:shadow-glow transition-all duration-500 group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`h-48 ${project.image} transition-all duration-500 group-hover:scale-105`} />
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-primary/50 hover:bg-primary/10"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
