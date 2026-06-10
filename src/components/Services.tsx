import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const serviceKeys = ["rag", "internalTools", "evaluation", "optimization", "backend", "scientific"] as const;

export const Services = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight pb-2 gradient-text">
            {t.services.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceKeys.map((key) => (
            <div key={key} className="glass-card rounded-lg p-6">
              <h3 className="text-lg font-bold text-primary">{t.services.items[key].title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.services.items[key].description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
