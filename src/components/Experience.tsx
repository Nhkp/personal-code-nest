const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2022 - Present",
    description: "Leading development of microservices architecture and mentoring junior developers. Improved system performance by 40% through optimization.",
  },
  {
    title: "Full Stack Developer",
    company: "Digital Solutions Co.",
    period: "2020 - 2022",
    description: "Developed and maintained multiple client-facing applications using React and Node.js. Collaborated with design team to implement responsive UI/UX.",
  },
  {
    title: "Software Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description: "Built RESTful APIs and integrated third-party services. Contributed to agile development process and code reviews.",
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
