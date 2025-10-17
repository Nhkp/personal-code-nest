import { Button } from "@/components/ui/button";
import { Gitlab, Linkedin, Mail, Download } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const cvEndpoint = language === "fr" 
    ? "http://portfolio-backend-production-4059.up.railway.app/api/cv/fr"
    : "http://portfolio-backend-production-4059.up.railway.app/api/cv/en";
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10 animate-gradient-shift bg-[length:200%_200%]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <p className="text-primary text-lg font-medium tracking-wide">{t.hero.greeting}</p>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold gradient-text">
              {t.hero.title}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light">
              {t.hero.subtitle}
            </h2>
          </div>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-2">
                {t.hero.viewWork}
              </span>
            </Button>
            
            <a href={cvEndpoint} download>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-4 w-4" />
                {t.hero.downloadCV}
              </Button>
            </a>
          </div>
          
          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://gitlab.com/Nhkp"
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Gitlab className="h-6 w-6" />
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
