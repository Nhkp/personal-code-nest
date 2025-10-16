import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gitlab } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description: "A personal portfolio website built with a multi-container Docker architecture, featuring a PostgreSQL database, a FastAPI backend, and a modern responsive frontend.",
    tags: ["Docker", "PostgreSQL", "Supabase", "FastAPI", "Railway", "Node.js", "Vite", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    image: "bg-gradient-to-br from-blue-500/20 to-purple-500/20",
    gitlab: "https://gitlab.com/Nhkp/side-project",
    demo: "#",
  },
  {
    title: "LLM Energy Consumption Study",
    description: "Influence of Hyperparameters and Hardware Configurations on Energy Consumption in Fine-Tuning an NLP Model.",
    tags: ["Python", "HuggingFace", "HPC", "SLURM"],
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    // gitlab: "https://gitlab.com/your-portfolio-repo",
    demo: "http://portfolio-backend-production-4059.up.railway.app/api/paper/hyperparameters_analysis.pdf",
  },
  {
    title: "LLM Energy Consumption Study",
    description: "Influence of Hyperparameters and Hardware Configurations on Energy Consumption in Fine-Tuning an NLP Model.",
    tags: ["Python", "HuggingFace", "HPC", "SLURM"],
    image: "bg-gradient-to-br from-purple-500/20 to-pink-500/20",
    // gitlab: "https://gitlab.com/your-portfolio-repo",
    demo: "http://portfolio-backend-production-4059.up.railway.app/api/paper/openradioss_article_v2.pdf",
  },
  {
    title: "Mario Maker",
    description: 'A simple 2D "Mario Maker"–style project focused on memory management, optimization techniques (collision detection), event-driven programming (timers and alarms), and parallelism, with less emphasis on traditional software engineering aspects.',
    tags: ["C", "SDL2", "CMake", "Makefile"],
    image: "bg-gradient-to-br from-green-500/20 to-cyan-500/20",
    gitlab: "https://gitlab.com/Nhkp/mario-project",
    demo: "https://gitlab.com/Nhkp/mario-project/-/raw/master/demo.mp4",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <Card 
              key={project.title}
              className="glass-card border-border/50 hover:shadow-glow transition-all duration-500 group animate-fade-in overflow-hidden"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={`h-48 ${project.image} transition-all duration-500 group-hover:scale-105`} />
              
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <a 
                    href={project.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    className="inline-block"
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                      >
                      <Gitlab className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    tabIndex={-1}
                    className="inline-block"
                  >
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 hover:bg-primary/10"
                      >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
