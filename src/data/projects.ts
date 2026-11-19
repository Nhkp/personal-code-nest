const projects = [
  {
    key: "inferenceLab",
    slug: "inferencelab",
    tags: ["Python", "vLLM", "LLM Serving", "Benchmarking", "FastAPI"],
    github: "https://github.com/Nhkp/InferenceLab",
  },
  {
    key: "chessOpeningsAgent",
    slug: "chess-openings-agent",
    tags: ["Python", "Angular", "FastAPI", "Stockfish", "Lichess", "Milvus"],
    github: "https://github.com/Nhkp/chess-openings-agent",
  },
  {
    key: "medicalTriageAgent",
    slug: "medical-triage-agent",
    tags: ["Python", "QLoRA", "SFT", "DPO", "vLLM", "FastAPI"],
    github: "https://github.com/Nhkp/medical-triage-agent",
  },
  {
    key: "rlAgent",
    slug: "rl-agent-training",
    tags: ["Python", "Reinforcement Learning", "PPO", "Gymnasium", "Stable-Baselines3", "FastAPI", "Streamlit"],
    imageUrl: "/lunar_lander.png",
    github: "https://github.com/Nhkp/rl-agent-training",
  },
  {
    key: "openclassroomsProjet7",
    slug: "cultural-assistant",
    tags: ["RAG", "LangChain", "Mistral", "FAISS", "FastAPI", "OpenAgenda"],
    imageUrl: "/cultural_rag_agent.png",
    github: "https://github.com/Nhkp/rag-cultural-agent",
  },
  {
    key: "cvForMri",
    slug: "cv-for-mri",
    tags: ["Python", "Computer Vision", "PyTorch", "ResNet", "Semi-Supervised Learning", "Clustering"],
    imageUrl: "/cv_for_mri.png",
    github: "https://github.com/Nhkp/cv-for-mri",
  },
  {
    key: "llm",
    slug: "llm-energy-study",
    tags: ["Python", "HuggingFace", "HPC", "SLURM", "EnergyScopium"],
    imageUrl: "/llm_study.png",
    demo: "https://portfolio-backend-teal-theta.vercel.app/api/paper/hyperparameters_analysis.pdf",
  },
  {
    key: "fea",
    slug: "fea-energy-study",
    tags: ["Python", "OpenRadioss", "HPC", "SLURM", "EnergyScopium"],
    imageUrl: "/fea_study.png",
    demo: "https://portfolio-backend-teal-theta.vercel.app/api/paper/openradioss_article_v2.pdf",
  },
  {
    key: "portfolio",
    slug: "portfolio",
    tags: ["Docker", "PostgreSQL", "Supabase", "FastAPI", "Node.js", "Vite", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    imageUrl: "/preview_zoomed.png",
    github: "https://github.com/Nhkp/portfolio",
    demo: "#",
  },
  {
    key: "mario",
    slug: "mario-maker",
    tags: ["C", "SDL2", "CMake", "Makefile"],
    imageUrl: "/mario.png",
    github: "https://github.com/Nhkp/Projet-Mario",
    demo: "https://raw.githubusercontent.com/Nhkp/mario-project/master/demo.mp4",
  },
] as const;

export type ProjectKey = (typeof projects)[number]["key"];

export const projectsData: readonly {
  key: ProjectKey;
  slug: string;
  tags: readonly string[];
  imageUrl?: string;
  github?: string;
  demo?: string;
}[] = projects;
