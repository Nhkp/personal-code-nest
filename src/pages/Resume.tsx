import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const skills = [
  "High-Performance Computing",
  "GPU Programming",
  "Machine Learning",
  "LLM Applications",
  "RAG",
  "FastAPI",
  "Python",
  "React",
  "Scientific Computing",
  "MLOps",
];

const experiences = [
  {
    title: "R&D Engineer",
    company: "Denergium",
    period: "Nov. 2024 - Nov. 2025",
    description:
      "Designed Python tools, APIs, dashboards, ML pipelines, benchmark frameworks, and evaluation workflows for HPC, LLM, energy, and simulation workloads.",
  },
  {
    title: "Software Engineer",
    company: "Scalian DS",
    period: "Sept. 2022 - Nov. 2024",
    description:
      "Worked on GPU-accelerated cryo-electron tomography workflows for Thermo Fisher Scientific, including 3D template matching and tensor-based methods.",
  },
  {
    title: "Software Engineer Intern",
    company: "CEA",
    period: "Mar. 2022 - Sept. 2022",
    description:
      "Worked on high-performance computing for numerical simulation on heterogeneous architectures.",
  },
];

const Resume = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 surface-grid" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <div className="mb-10">
            <Button asChild variant="outline" className="border-primary/35 bg-background/40 hover:bg-primary/10">
              <Link to="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Home
              </Link>
            </Button>
          </div>

          <article className="glass-card rounded-lg p-8 md:p-12">
            <header className="mb-10 space-y-4">
              <p className="text-sm font-semibold uppercase tracking-wide text-primary">Resume</p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl gradient-text">Clément Palézis</h1>
              <p className="text-xl text-muted-foreground">HPC & AI Software Engineer based in Bordeaux, France</p>
              <p className="max-w-3xl leading-relaxed text-foreground/75">
                Software engineer focused on high-performance computing, GPU programming, machine learning pipelines,
                backend services, scientific computing, and practical LLM applications.
              </p>
            </header>

            <div className="grid gap-8 md:grid-cols-[1fr_2fr]">
              <aside className="space-y-8">
                <section>
                  <h2 className="mb-3 text-xl font-bold text-primary">Contact</h2>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <a className="flex items-center gap-2 hover:text-primary" href="mailto:palezis.c@gmail.com">
                      <Mail className="h-4 w-4" />
                      palezis.c@gmail.com
                    </a>
                    <a className="flex items-center gap-2 hover:text-primary" href="https://github.com/Nhkp">
                      <Github className="h-4 w-4" />
                      github.com/Nhkp
                    </a>
                    <a className="flex items-center gap-2 hover:text-primary" href="https://linkedin.com/in/cpalezis">
                      <Linkedin className="h-4 w-4" />
                      linkedin.com/in/cpalezis
                    </a>
                  </div>
                </section>

                <section>
                  <h2 className="mb-3 text-xl font-bold text-primary">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill) => (
                      <span key={skill} className="rounded-md bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </section>
              </aside>

              <div className="space-y-8">
                <section>
                  <h2 className="mb-4 text-2xl font-bold text-primary">Professional Experience</h2>
                  <div className="space-y-5">
                    {experiences.map((experience) => (
                      <div key={`${experience.company}-${experience.period}`} className="border-l border-primary/35 pl-5">
                        <h3 className="text-lg font-bold">{experience.title}</h3>
                        <p className="text-sm font-medium text-primary">
                          {experience.company} · {experience.period}
                        </p>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{experience.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section>
                  <h2 className="mb-4 text-2xl font-bold text-primary">Selected Work</h2>
                  <p className="leading-relaxed text-muted-foreground">
                    Projects include a cultural RAG assistant using LangChain, Mistral, FAISS and FastAPI, energy
                    studies for LLM fine-tuning and FEA workloads, a modern portfolio stack with React and FastAPI, and
                    systems programming projects in C and SDL2.
                  </p>
                </section>

                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <a href="https://portfolio-backend-teal-theta.vercel.app/api/cv">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF CV
                  </a>
                </Button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default Resume;
