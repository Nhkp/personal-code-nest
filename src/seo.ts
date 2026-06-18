import { projectsData } from "@/data/projects";
import { translations } from "@/locales/translations";

const siteUrl = "https://clement-palezis.dev";
const previewImage = `${siteUrl}/preview.png`;

const person = {
  "@type": "Person",
  name: "Clément Palézis",
  alternateName: "Clement Palezis",
  url: siteUrl,
  jobTitle: "HPC & AI Software Engineer",
  email: "mailto:palezis.c@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bordeaux",
    addressCountry: "FR",
  },
  sameAs: ["https://github.com/Nhkp", "https://linkedin.com/in/cpalezis"],
  knowsAbout: [
    "High-Performance Computing",
    "GPU Programming",
    "Machine Learning",
    "LLM Applications",
    "Retrieval-Augmented Generation",
    "FastAPI",
    "Python",
    "React",
    "Scientific Computing",
  ],
};

export type SeoPage = {
  path: string;
  title: string;
  description: string;
  jsonLd: Record<string, unknown>;
};

const projectDescriptions: Record<string, string> = {
  openclassroomsProjet7:
    "Project page for Clément Palézis' cultural conversational assistant, a RAG proof of concept using LangChain, Mistral, FAISS, OpenAgenda data, and FastAPI.",
  portfolio:
    "Project page for Clément Palézis' personal portfolio, built with React, FastAPI, Supabase storage, Vercel, and modern full-stack tooling.",
  llm: "Project page for Clément Palézis' LLM fine-tuning energy study, analyzing hyperparameters, hardware configurations, and energy consumption.",
  fea: "Project page for Clément Palézis' FEA energy consumption study, analyzing OpenRadioss simulations, computational parameters, and hardware configurations.",
  mario:
    "Project page for Clément Palézis' Mario Maker-style C and SDL2 project, focused on memory management, event-driven programming, and optimization.",
};

const homePage: SeoPage = {
  path: "/",
  title: "Clément Palézis | HPC & AI Software Engineer",
  description:
    "Portfolio of Clément Palézis, also written Clement Palezis, an HPC & AI Software Engineer based in Bordeaux, France. Expertise in GPU programming, machine learning, LLM applications, FastAPI, Python, React, and scientific computing.",
  jsonLd: {
    "@context": "https://schema.org",
    "@graph": [
      person,
      {
        "@type": "WebSite",
        name: "Clément Palézis Portfolio",
        url: siteUrl,
        description:
          "Portfolio of Clément Palézis covering HPC, GPU programming, machine learning, LLM applications, backend systems, and scientific computing.",
        author: person,
      },
    ],
  },
};

const resumePage: SeoPage = {
  path: "/resume",
  title: "Resume | Clément Palézis",
  description:
    "Resume page for Clément Palézis, HPC & AI Software Engineer in Bordeaux, France, with experience in GPU programming, machine learning, LLM applications, FastAPI, Python, and scientific computing.",
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: "Resume | Clément Palézis",
    url: `${siteUrl}/resume`,
    mainEntity: person,
  },
};

const projectPages: SeoPage[] = projectsData.map((project) => {
  const projectInfo = translations.en.projects.projects[project.key];
  const canonical = `${siteUrl}/projects/${project.slug}`;
  const isCodeProject = project.github && !["llm", "fea"].includes(project.key);

  return {
    path: `/projects/${project.slug}`,
    title: `${projectInfo.title} | Clément Palézis`,
    description: projectDescriptions[project.key],
    jsonLd: {
      "@context": "https://schema.org",
      "@type": isCodeProject ? "SoftwareSourceCode" : "CreativeWork",
      name: projectInfo.title,
      url: canonical,
      description: projectDescriptions[project.key],
      author: person,
      programmingLanguage: project.tags.filter((tag) => ["Python", "C", "TypeScript", "React"].includes(tag)),
      codeRepository: project.github,
      image: project.imageUrl ? `${siteUrl}${project.imageUrl}` : previewImage,
      keywords: project.tags.join(", "),
    },
  };
});

export const seoPages = [homePage, resumePage, ...projectPages] as const;

export const getSeoPage = (path: string): SeoPage => seoPages.find((page) => page.path === path) ?? homePage;

export const getCanonicalUrl = (path: string) => (path === "/" ? siteUrl : `${siteUrl}${path}`);

export const getPreviewImage = () => previewImage;
