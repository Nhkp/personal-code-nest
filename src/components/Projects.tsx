import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/locales/translations";
import { projectsData } from "@/data/projects";

export const Projects = () => {
	const { language } = useLanguage();
	const t = translations[language];
	const navigate = useNavigate();
	const [showMoreProjects, setShowMoreProjects] = useState(false);
	const visibleProjects = showMoreProjects
		? projectsData
		: projectsData.filter((project) => project.key !== "mario");
	
	return (
		<section id="projects" className="py-24">
			<div className="container mx-auto px-4">
				<h2 className="text-4xl md:text-5xl font-bold text-center mb-16 leading-tight pb-2 gradient-text">
					{t.projects.title}
				</h2>

				<div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
					{visibleProjects.map((project, idx) => {
						const projectInfo = t.projects.projects[project.key as keyof typeof t.projects.projects];
						return (
							<Card
								key={project.key}
								role="link"
								tabIndex={0}
								onClick={() => navigate(`/projects/${project.slug}`)}
								onKeyDown={(event) => {
									if (event.key === "Enter" || event.key === " ") {
										event.preventDefault();
										navigate(`/projects/${project.slug}`);
									}
								}}
								className="glass-card border-border/70 hover:shadow-glow transition-all duration-500 group animate-fade-in overflow-hidden cursor-pointer"
								style={{ animationDelay: `${idx * 100}ms` }}
							>
							<div className="h-48 relative bg-muted/60 border-b border-border/60">
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
												className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md"
											>
												{tag}
											</span>
										))}
									</div>

									<div className="flex gap-3 pt-2">
										{project.github && (
											<a
												href={project.github}
												target="_blank"
												rel="noopener noreferrer"
												onClick={(event) => event.stopPropagation()}
												tabIndex={-1}
												className="inline-block"
											>
												<Button
													variant="outline"
													size="sm"
													className="border-primary/35 bg-background/30 hover:bg-primary/10"
												>
													<Github className="mr-2 h-4 w-4" />
													Code
												</Button>
											</a>
										)}
										{project.demo && (
											<a
												href={project.demo}
												target="_blank"
												rel="noopener noreferrer"
												onClick={(event) => event.stopPropagation()}
												tabIndex={-1}
												className="inline-block"
											>
												<Button
													variant="outline"
													size="sm"
													className="border-primary/35 bg-background/30 hover:bg-primary/10"
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

				<div className="flex justify-center mt-10">
					<Button
						variant="outline"
						className="border-primary/35 bg-background/30 hover:bg-primary/10"
						onClick={() => setShowMoreProjects((current) => !current)}
					>
						{showMoreProjects ? t.projects.seeLess : t.projects.seeMore}
					</Button>
				</div>
			</div>
		</section>
	);
};
