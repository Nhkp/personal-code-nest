import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Let's Work Together
            </h2>
            <p className="text-xl text-muted-foreground">
              I'm always interested in hearing about new projects and opportunities.
            </p>
          </div>
          
          <div className="glass-card rounded-2xl p-12 space-y-8 hover:shadow-glow transition-all duration-500">
            <div className="space-y-6">
              <a 
                href="mailto:palezis.c@gmail.com"
                className="flex items-center justify-center gap-3 text-xl text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                palezis.c@gmail.com
              </a>
              
              <div className="flex gap-6 justify-center pt-4">
                <a 
                  href="https://github.com/Nhkp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
                {/* <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-secondary hover:bg-primary/20 text-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Twitter className="h-6 w-6" />
                </a> */}
              </div>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Send Me an Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
