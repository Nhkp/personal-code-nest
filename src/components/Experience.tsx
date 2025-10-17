import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const experiences = [
  { key: "denergium" },
  { key: "scalian" },
  { key: "cea" },
  { key: "hm" },
];

export const Experience = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t.experience.title}
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, idx) => {
            const expData = t.experience.experiences[exp.key as keyof typeof t.experience.experiences];
            return (
              <div 
                key={exp.key}
                className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 animate-fade-in"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
                
                <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h3 className="text-xl font-bold text-primary">{expData.title}</h3>
                    <span className="text-sm text-muted-foreground font-medium">{expData.period}</span>
                  </div>
                  
                  <p className="text-lg font-medium text-foreground/80 mb-3">{expData.company}</p>
                  <p className="text-foreground/70 leading-relaxed">{expData.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
