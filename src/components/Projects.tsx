import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Gitlab } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";

const projectsData = [
  {
    key: "portfolio",
    tags: ["Docker", "PostgreSQL", "Supabase", "FastAPI", "Railway", "Node.js", "Vite", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    imageUrl: "/preview_zoomed.png",
    gitlab: "https://gitlab.com/Nhkp/side-project",
    demo: "#",
  },
  {
    key: "llm",
    tags: ["Python", "HuggingFace", "HPC", "SLURM", "EnergyScopium"],
    imageUrl: "/llm_study.png",
    demo: "https://portfolio-backend-teal-theta.vercel.app/api/paper/hyperparameters_analysis.pdf",
  },
  {
    key: "fea",
    tags: ["Python", "OpenRadioss", "HPC", "SLURM", "EnergyScopium"],
    imageUrl: "/fea_study.png",
    demo: "https://portfolio-backend-teal-theta.vercel.app/api/paper/openradioss_article_v2.pdf",
  },
  {
    key: "mario",
    tags: ["C", "SDL2", "CMake", "Makefile"],
    imageUrl: "/mario.png",
    gitlab: "https://gitlab.com/Nhkp/mario-project",
    demo: "https://gitlab.com/Nhkp/mario-project/-/raw/master/demo.mp4",
  },
];

export const Projects = () => {
	const { language } = useLanguage();
	const t = translations[language];
	
	return (
		<section id="projects" className="py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text">
					{t.projects.title}
				</h2>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{projectsData.map((project, idx) => {
						const projectInfo = t.projects.projects[project.key as keyof typeof t.projects.projects];
						return (
							<Card
								key={project.key}
								className="glass-card border-border/50 hover:shadow-glow transition-all duration-500 group animate-fade-in overflow-hidden"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
							<div className="h-48 relative bg-muted/50">
								{project.imageUrl && (
									<img
										src={project.imageUrl}
										alt={projectInfo.title}
										className="absolute inset-0 w-full h-full object-cover"
									/>
								)}
							</div>

								<CardHeader>
									<CardTitle className="text-2xl group-hover:text-primary transition-colors">
										{projectInfo.title}
									</CardTitle>
									<CardDescription className="text-base">
										{projectInfo.description}
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
										{project.gitlab && (
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
										)}
										{project.demo && (
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
													{t.projects.viewProject}
												</Button>
											</a>
										)}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
};
