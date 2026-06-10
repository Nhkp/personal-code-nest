import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const skillCategories = [
  {
    key: "gpu",
    skills: ["CUDA", "GPU Programming", "C/C++", "OpenMP", "MPI", "SIMD", "HPC Workloads"],
  },
  {
    key: "ml",
    skills: ["PyTorch", "Scikit-learn", "Pandas", "Polars", "NumPy", "ML Pipelines"],
  },
  {
    key: "llm",
    skills: ["RAG", "LLM Agents", "LangChain", "LangGraph", "Hugging Face", "OpenAI", "Mistral"],
  },
  {
    key: "backend",
    skills: ["Python", "FastAPI", "REST APIs", "Streamlit", "Docker", "PostgreSQL", "SQLAlchemy"],
  },
  {
    key: "mlops",
    skills: ["MLflow", "Evidently", "Grafana", "BentoML", "Airflow", "Evaluation", "Monitoring"],
  },
  {
    key: "scientific",
    skills: ["Numerical Simulation", "OpenRadioss", "Visualization", "Research Software", "Python", "C++"],
  },
];

export const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight pb-2 gradient-text">
          {t.skills.title}
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.key}
              className="glass-card rounded-lg p-8 hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3 text-primary">{t.skills.categories[category.key as keyof typeof t.skills.categories].title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">
                {t.skills.categories[category.key as keyof typeof t.skills.categories].description}
              </p>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="px-4 py-2 text-sm font-medium bg-secondary/70 hover:bg-primary/15 hover:text-primary transition-all duration-300 cursor-default"
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
