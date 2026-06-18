import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const emailAddress = "palezis.c@gmail.com";
  const emailHref = `mailto:${emailAddress}?subject=Contact%20from%20portfolio`;
  
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight pb-2 gradient-text">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t.contact.subtitle}
            </p>
          </div>
          
          <div className="glass-card rounded-lg p-12 space-y-8 hover:shadow-glow transition-all duration-500">
            <div className="space-y-6">
              <a 
                href={emailHref}
                className="flex items-center justify-center gap-3 text-xl text-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
                {emailAddress}
              </a>
              
              <div className="flex gap-6 justify-center pt-4">
                <a 
                  href="https://github.com/Nhkp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-secondary hover:bg-primary/15 text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 rounded-md bg-secondary hover:bg-primary/15 text-foreground hover:text-primary transition-all duration-300 hover:scale-105"
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
              asChild
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
            >
              <a href={emailHref}>
                <Mail className="mr-2 h-5 w-5" />
                {t.contact.sendEmail}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
