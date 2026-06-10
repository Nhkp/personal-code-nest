import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

export const About = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight pb-2 gradient-text">
            {t.about.title}
          </h2>
          
          <div className="glass-card rounded-lg p-8 md:p-12 space-y-6 hover:shadow-glow transition-all duration-500">
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t.about.paragraph1}
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t.about.paragraph2}
            </p>
            
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t.about.paragraph3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
