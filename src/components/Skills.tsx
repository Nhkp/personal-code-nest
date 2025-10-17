import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const skillCategories = [
  {
    key: "system",
    skills: ["Linux", "Bash", "CMake", "C/C++", "OpenMP", "MPI", "AVX512", "CUDA"],
  },
  {
    key: "fullstack",
    skills: ["PostgreSQL", "SQLAlchemy", "Docker", "Flask", "FastAPI", "HTML", "CSS", "Streamlit"],
  },
  {
    key: "ml",
    skills: ["NumPy", "SciPy", "scikit-learn", "Pandas", "Polars", "PyTorch", "HuggingFace"],
  },
  {
    key: "other",
    skills: ["REST APIs", "SCRUM", "Kanban", "Scaleway", "Github", "Gitlab"],
  },
];

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          {t.skills.title}
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.key}
              className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{t.skills.categories[category.key as keyof typeof t.skills.categories]}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
