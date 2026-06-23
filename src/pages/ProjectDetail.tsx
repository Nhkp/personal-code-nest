import { Button } from "@/components/ui/button";
import { projectsData, type ProjectKey } from "@/data/projects";
import { translations } from "@/locales/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const projectDetails: Record<ProjectKey, { outcome: string; role: string }> = {
  openclassroomsProjet7: {
    role: "RAG application design, backend API, semantic search, and LLM integration.",
    outcome:
      "A proof of concept that recommends cultural events from OpenAgenda data with contextual answers and a FastAPI service.",
  },
  rlAgent: {
    role: "Reinforcement learning experimentation, PPO training, API serving, dashboarding, and automated testing.",
    outcome:
      "A trained LunarLander-v3 agent with evaluated PPO configurations, saved model artifacts, a FastAPI inference endpoint, and a Streamlit results dashboard.",
  },
  cvForMri: {
    role: "Computer vision pipeline design, MRI dataset validation, feature extraction, clustering analysis, and semi-supervised CNN training.",
    outcome:
      "A research prototype comparing supervised and weak-label-assisted ResNet training for binary brain MRI classification under a constrained annotation budget.",
  },
  portfolio: {
    role: "Full-stack architecture, frontend implementation, backend API, storage, and deployment setup.",
    outcome:
      "A modern personal portfolio with React, FastAPI, Supabase storage, Vercel deployment, and dynamic CV delivery.",
  },
  llm: {
    role: "Experiment analysis, benchmark workflow, energy metric interpretation, and reporting.",
    outcome:
      "A study of how hyperparameters and hardware configurations influence energy consumption during NLP fine-tuning.",
  },
  fea: {
    role: "Simulation workload analysis, benchmark design, energy metric interpretation, and reporting.",
    outcome:
      "A study of how computational parameters and hardware configurations influence energy consumption in OpenRadioss simulations.",
  },
  mario: {
    role: "C programming, SDL2 integration, memory management, and event-driven gameplay systems.",
    outcome:
      "A 2D Mario Maker-style project focused on systems programming, optimization, and interactive level mechanics.",
  },
};

const ProjectDetail = () => {
  const { slug } = useParams();
  const { language } = useLanguage();
  const project = projectsData.find((item) => item.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  const projectInfo = translations[language].projects.projects[project.key];
  const details = projectDetails[project.key];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 surface-grid" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <div className="mb-10">
            <Button asChild variant="outline" className="border-primary/35 bg-background/40 hover:bg-primary/10">
              <Link to="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Projects
              </Link>
            </Button>
          </div>

          <article className="glass-card overflow-hidden rounded-lg">
            <div className="relative h-64 border-b border-border/60 bg-muted/60 md:h-80">
              <img src={project.imageUrl} alt={projectInfo.title} className="absolute inset-0 h-full w-full object-cover" />
            </div>

            <div className="space-y-8 p-8 md:p-12">
              <header className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-wide text-primary">Project</p>
                <h1 className="text-4xl font-bold leading-tight md:text-5xl gradient-text">{projectInfo.title}</h1>
                <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">{projectInfo.description}</p>
              </header>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <section>
                  <h2 className="mb-3 text-2xl font-bold text-primary">Role</h2>
                  <p className="leading-relaxed text-muted-foreground">{details.role}</p>
                </section>
                <section>
                  <h2 className="mb-3 text-2xl font-bold text-primary">Outcome</h2>
                  <p className="leading-relaxed text-muted-foreground">{details.outcome}</p>
                </section>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.github && (
                  <Button asChild variant="outline" className="border-primary/35 bg-background/30 hover:bg-primary/10">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo && project.demo !== "#" && (
                  <Button asChild variant="outline" className="border-primary/35 bg-background/30 hover:bg-primary/10">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Resource
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default ProjectDetail;
