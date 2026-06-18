import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  // const cvEndpoint = language === "fr" 
  //   ? "https://portfolio-backend-teal-theta.vercel.app/api/cv/fr"
  //   : "https://portfolio-backend-teal-theta.vercel.app/api/cv/en";
  const cvEndpoint ="https://portfolio-backend-teal-theta.vercel.app/api/cv";
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 surface-grid" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="inline-flex items-center rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-primary text-sm font-semibold tracking-wide">
              {t.hero.greeting}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text">
              {t.hero.title}
            </h1>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              {t.hero.subtitle}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-glow transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewWork}
              </span>
            </Button>
            
            <a href={cvEndpoint} download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/35 bg-background/40 hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </Button>
            </a>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/Nhkp"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com/in/cpalezis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:palezis.c@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
