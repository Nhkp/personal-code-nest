import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "System & Low-level Programming",
    skills: ["Linux", "Bash", "CMake", "C/C++", "OpenMP", "MPI", "AVX512", "CUDA"],
  },
  {
    title: "Full-stack Development",
    skills: ["PostgreSQL", "SQLAlchemy", "Docker", "Flask", "FastAPI", "HTML", "CSS", "Streamlit"],
  },
  {
    title: "ML & Data Science",
    skills: ["NumPy", "SciPy", "scikit-learn", "Pandas", "Polars", "PyTorch", "HuggingFace"],
  },
  {
    title: "Other",
    skills: ["REST APIs", "SCRUM", "Kanban", "Scaleway", "Github", "Gitlab"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Skills & Technologies
        </h2>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={category.title}
              className="glass-card rounded-2xl p-8 hover:shadow-glow transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">{category.title}</h3>
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
