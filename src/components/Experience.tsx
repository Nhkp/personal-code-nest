const experiences = [
  {
    title: "R&D Engineer",
    company: "Denergium",
    period: "Nov. 2024 - Present",
    location: "Bordeaux, Nouvelle-Aquitaine, France (Hybrid)",
    description: `
At DENERGIUM, I design and build tools that measure and optimize the energy consumption of HPC workloads. My work combines backend and web development with applied research on energy-efficient computing. I develop analysis pipelines and benchmarking frameworks to better understand and reduce the energy impact of AI and simulation applications.
    `,
  },
  {
    title: "Software Engineer",
    company: "Scalian DS",
    period: "Sept. 2022 - Nov. 2024",
    location: "Bordeaux, Nouvelle-Aquitaine, France (Hybrid)",
    description: `
Consultant for ThermoFisher Scientific, optimizing electron cryo-microscopy workflows, collaborating with academic partners to implement advanced algorithms, and designing software prototypes to enhance system performance.
    `,
  },
  {
    title: "Software Engineer (Internship)",
    company: "CEA (French Alternative Energies and Atomic Energy Commission)",
    period: "Mar. 2022 - Sept. 2022",
    location: "France",
    description: `
High-performance computing on heterogeneous architectures for numerical simulation.
    `,
  },
  {
    title: "Sales Advisor (Student part-time contract)",
    company: "H&M",
    period: "Nov. 2016 - Mar. 2022",
    location: "Bordeaux, Nouvelle-Aquitaine, France",
    description: `
Assistant manager (Level 3 confirmed, permanent), responsible for training and supervising staff, managing merchandising, stock, and cash, and handling customer relations and dispute resolution.
    `,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Professional Experience
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div 
              key={exp.company}
              className="relative pl-8 border-l-2 border-primary/30 hover:border-primary transition-colors duration-300 animate-fade-in"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-glow" />
              
              <div className="glass-card rounded-xl p-6 hover:shadow-glow transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <span className="text-sm text-muted-foreground font-medium">{exp.period}</span>
                </div>
                
                <p className="text-lg font-medium text-foreground/80 mb-3">{exp.company}</p>
                <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
