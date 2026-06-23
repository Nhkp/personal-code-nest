export const translations = {
  fr: {
    nav: {
      about: "À propos",
      skills: "Compétences",
      projects: "Projets",
      experience: "Expérience",
      contact: "Contact",
    },
    hero: {
      greeting: "Bonjour, je suis Clément Palézis",
      title: "HPC & AI Software Engineer",
      subtitle: "GPU Programming · Machine Learning · LLM Applications",
      description: "Je conçois des logiciels pour le calcul haute performance, des pipelines ML, des services backend et des prototypes IA fiables à l'intersection du calcul haute performance, du GPU programming et de l'IA appliquée.",
      viewWork: "Voir mes projets",
      downloadCV: "Télécharger CV",
    },
    about: {
      title: "À propos de moi",
      paragraph1: "Je suis ingénieur logiciel spécialisé dans le calcul haute performance, les pipelines machine learning et les applications IA concrètes. Mon parcours relie le calcul haute performance, la programmation GPU, le backend Python et les usages récents des LLM.",
      paragraph2: "J'aime transformer des problèmes techniques complexes en outils utiles: APIs FastAPI, prototypes RAG, workflows d'évaluation, dashboards de monitoring, pipelines de benchmark et optimisations de calcul. Mon expérience va de la tomographie accélérée GPU aux charges de travail LLM et simulation.",
      paragraph3: "Je cherche à construire des solutions fiables, mesurables et maintenables, avec une attention particulière à la performance, à l'expérience utilisateur et à la valeur métier. Je travaille aussi bien avec des équipes produit qu'avec des environnements R&D exigeants.",
    },
    skills: {
      title: "Compétences",
      categories: {
        gpu: {
          title: "GPU & Performance Computing",
          description: "Optimisation de workloads numériques, programmation parallèle et accélération GPU pour réduire les temps de traitement.",
        },
        ml: {
          title: "Machine Learning & Data Pipelines",
          description: "Pipelines d'analyse, benchmarking, préparation de données et modèles ML appliqués à des cas d'usage concrets.",
        },
        llm: {
          title: "LLM Applications & RAG",
          description: "Assistants documentaires, recherche sémantique, agents LLM et prototypes GenAI orientés produit.",
        },
        backend: {
          title: "Backend, APIs & Product Prototyping",
          description: "Services Python, APIs FastAPI, interfaces Streamlit et socles techniques pour produits IA.",
        },
        mlops: {
          title: "MLOps, Evaluation & Monitoring",
          description: "Suivi d'expériences, évaluation de modèles, drift analysis, monitoring et amélioration continue.",
        },
        scientific: {
          title: "Logiciels scientifiques & simulation",
          description: "Méthodes numériques, workflows de simulation, visualisation de données et outils métier pour équipes R&D et ingénierie.",
        },
      },
    },
    services: {
      title: "Ce que je peux construire",
      subtitle: "Des prototypes IA utiles aux socles backend et calcul haute performance, je peux aider une équipe à passer d'une idée technique à un outil exploitable.",
      items: {
        rag: {
          title: "Assistants RAG",
          description: "Assistants sur documentation interne, bases métier ou données publiques avec recherche sémantique et réponses contextualisées.",
        },
        internalTools: {
          title: "Outils internes augmentés par LLM",
          description: "Automatisation de support, traitement documentaire, extraction d'information et workflows métier assistés par IA.",
        },
        evaluation: {
          title: "Dashboards d'évaluation ML/LLM",
          description: "Mesure de qualité, latence, coût, drift, retrieval quality et comportement de modèles dans le temps.",
        },
        optimization: {
          title: "Prototypes GPU/HPC",
          description: "Accélération de traitements, benchmarking et analyse de performance sur workloads simulation, IA ou data.",
        },
        backend: {
          title: "Backends FastAPI pour produits IA",
          description: "APIs robustes, intégrations modèles, stockage, monitoring et déploiement de prototypes en environnement réel.",
        },
        scientific: {
          title: "Outils de calcul scientifique",
          description: "Outils métier pour la simulation, l'analyse, la visualisation et les workflows R&D où performance et fiabilité comptent.",
        },
      },
    },
    projects: {
      title: "Projets",
      description: "Description du projet",
      viewProject: "Voir le projet",
      seeMore: "Voir plus",
      seeLess: "Voir moins",
      projects: {
        openclassroomsProjet7: {
          title: "Assistant conversationnel culturel",
          description: "POC d'assistant intelligent pour recommander des événements culturels à partir de données OpenAgenda. Le système utilise une architecture RAG avec LangChain, Mistral, FAISS et une API FastAPI.",
        },
        rlAgent: {
          title: "Agent RL LunarLander",
          description: "Projet de reinforcement learning autour de LunarLander-v3 : entraînement d'un agent PPO avec Gymnasium et Stable-Baselines3, suivi d'expériences, API FastAPI et dashboard Streamlit.",
        },
        portfolio: {
          title: "Site Portfolio",
          description: "Un portfolio personnel avec frontend React, backend FastAPI, stockage Supabase et déploiement moderne pour servir du contenu dynamique.",
        },
        mario: {
          title: "Mario Maker",
          description: "Un projet simple de type \"Mario Maker\" en 2D plus axé sur la gestion de la mémoire, les techniques d'optimisation, la programmation événementielle et le parallélisme, que sur les aspects traditionnels de l'ingénierie logicielle.",
        },
        fea: {
          title: "Étude énergétique d'un logiciel FEA",
          description: "Influence des paramètres de calcul et des configurations matérielles sur la consommation d'énergie dans les simulations OpenRadioss.",
        },
        llm: {
          title: "Étude énergétique d'un fine-tuning LLM",
          description: "Analyse de l'influence des hyperparamètres et des configurations matérielles sur la consommation d'énergie lors du fine-tuning d'un modèle NLP.",
        },
      },
    },
    experience: {
      title: "Expérience Professionnelle",
      experiences: {
        denergium: {
          title: "Ingénieur R&D",
          company: "Denergium",
          period: "Nov. 2024 - Nov. 2025",
          location: "Bordeaux, Nouvelle-Aquitaine, France (Hybride)",
          description: "Conception d'outils Python, APIs et dashboards pour analyser les performances et métriques énergétiques de workloads HPC, LLM et simulation. Développement de pipelines ML, frameworks de benchmark et workflows d'évaluation pour identifier les inefficacités et soutenir l'optimisation continue.",
        },
        scalian: {
          title: "Ingénieur Logiciel",
          company: "Scalian DS",
          period: "Sept. 2022 - Nov. 2024",
          location: "Bordeaux, Nouvelle-Aquitaine, France (Hybride)",
          description: "R&D sur des workflows de cryo-tomographie électronique pour Thermo Fisher Scientific. Développement d'approches GPU de template matching 3D ayant réduit certains traitements de plusieurs jours à quelques minutes, avec des méthodes tensor-based et IA.",
        },
        cea: {
          title: "Ingénieur Logiciel (Stage)",
          company: "CEA (Commissariat à l'énergie atomique et aux énergies alternatives)",
          period: "Mar. 2022 - Sept. 2022",
          location: "France",
          description: "Calcul haute performance sur architectures hétérogènes pour la simulation numérique.",
        },
        hm: {
          title: "Conseiller de vente (Contrat étudiant à temps partiel)",
          company: "H&M",
          period: "Nov. 2016 - Mar. 2022",
          location: "Bordeaux, Nouvelle-Aquitaine, France",
          description: "Assistant Manager (Niveau 3 confirmé, permanent), responsable de la formation et de la supervision du personnel, de la gestion du merchandising, du stock et de la caisse. Gestion de la relation client et résolution des litiges.",
        },
      },
    },
    contact: {
      title: "Travaillons Ensemble",
      subtitle: "Je suis ouvert aux opportunités autour du HPC, du GPU programming, du machine learning, des applications LLM et des backends IA.",
      sendEmail: "M'envoyer un Email",
    },
    footer: {
      rights: "Tous droits réservés.",
    },
  },
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Clément Palézis",
      title: "HPC & AI Software Engineer",
      subtitle: "GPU Programming · Machine Learning · LLM Applications",
      description: "I build software for high-performance computing, ML pipelines, backend services, and reliable AI prototypes at the intersection of high-performance computing, GPU programming, and applied AI.",
      viewWork: "View My Work",
      downloadCV: "Download CV",
    },
    about: {
      title: "About Me",
      paragraph1: "I'm a software engineer focused on high-performance computing, machine learning pipelines, and practical AI applications. My background connects HPC, GPU programming, Python backends, and modern LLM workflows.",
      paragraph2: "I enjoy turning complex technical problems into useful tools: FastAPI services, RAG prototypes, evaluation workflows, monitoring dashboards, benchmarking pipelines, and compute optimizations. My experience spans GPU-accelerated tomography, LLM workloads, and simulation analysis.",
      paragraph3: "I aim to build reliable, measurable, and maintainable solutions with attention to performance, user experience, and business value. I work well with both product teams and demanding R&D environments.",
    },
    skills: {
      title: "Skills",
      categories: {
        gpu: {
          title: "GPU & Performance Computing",
          description: "Numerical workload optimization, parallel programming, and GPU acceleration to reduce processing time.",
        },
        ml: {
          title: "Machine Learning & Data Pipelines",
          description: "Analysis pipelines, benchmarking, data preparation, and ML models applied to concrete use cases.",
        },
        llm: {
          title: "LLM Applications & RAG",
          description: "Document assistants, semantic search, LLM agents, and product-oriented GenAI prototypes.",
        },
        backend: {
          title: "Backend, APIs & Product Prototyping",
          description: "Python services, FastAPI APIs, Streamlit interfaces, and technical foundations for AI products.",
        },
        mlops: {
          title: "MLOps, Evaluation & Monitoring",
          description: "Experiment tracking, model evaluation, drift analysis, monitoring, and continuous improvement.",
        },
        scientific: {
          title: "Scientific & Simulation Software",
          description: "Numerical methods, simulation workflows, data visualization, and domain-specific tools for research and engineering teams.",
        },
      },
    },
    services: {
      title: "What I Can Build",
      subtitle: "From useful AI prototypes to backend and high-performance computing foundations, I can help teams turn technical ideas into usable tools.",
      items: {
        rag: {
          title: "RAG assistants",
          description: "Assistants over internal documentation, business knowledge, or public datasets with semantic search and contextual answers.",
        },
        internalTools: {
          title: "LLM-powered internal tools",
          description: "Support automation, document processing, information extraction, and AI-assisted business workflows.",
        },
        evaluation: {
          title: "ML/LLM evaluation dashboards",
          description: "Quality, latency, cost, drift, retrieval quality, and model behavior monitoring over time.",
        },
        optimization: {
          title: "GPU/HPC optimization prototypes",
          description: "Processing acceleration, benchmarking, and performance analysis for simulation, AI, or data workloads.",
        },
        backend: {
          title: "FastAPI backends for AI products",
          description: "Robust APIs, model integrations, storage, monitoring, and prototype deployment in real-world environments.",
        },
        scientific: {
          title: "Scientific computing tools",
          description: "Domain-specific tools for simulation, analysis, visualization, and research workflows where performance and reliability matter.",
        },
      },
    },
    projects: {
      title: "Featured Projects",
      viewProject: "View projects",
      seeMore: "See more",
      seeLess: "See less",
      projects: {
        openclassroomsProjet7: {
          title: "Cultural Conversational Assistant",
          description: "POC of an intelligent assistant designed to recommend cultural events using OpenAgenda data. The system relies on a RAG architecture with LangChain, Mistral, FAISS, and a FastAPI API.",
        },
        rlAgent: {
          title: "LunarLander RL Agent",
          description: "A reinforcement learning project around LunarLander-v3: training a PPO agent with Gymnasium and Stable-Baselines3, experiment tracking, a FastAPI API, and a Streamlit dashboard.",
        },
        portfolio: {
          title: "Portfolio Website",
          description: "A personal portfolio with a React frontend, FastAPI backend, Supabase storage, and modern deployment for dynamic content.",
        },
        llm: {
          title: "LLM fine-tuning Energy Consumption Study",
          description: "Influence of Hyperparameters and Hardware Configurations on Energy Consumption in Fine-Tuning an NLP Model.",
        },
        fea: {
          title: "FEA Energy Consumption Study",
          description: "Influence of Computational Parameters and Hardware Configurations on Energy Consumption in OpenRadioss Simulations.",
        },
        mario: {
          title: "Mario Maker",
          description: 'A simple 2D "Mario Maker"-style project focused on memory management, optimization techniques, event-driven programming, and parallelism, with less emphasis on traditional software engineering aspects.'
        },
      },
    },
    experience: {
      title: "Professional Experience",
      experiences: {
        denergium: {
          title: "R&D Engineer",
          company: "Denergium",
          period: "Nov. 2024 - Nov. 2025",
          location: "Bordeaux, Nouvelle-Aquitaine, France (Hybrid)",
          description: "Designing Python tools, APIs, and dashboards to analyze performance and energy metrics for HPC, LLM, and simulation workloads. Developing ML pipelines, benchmarking frameworks, and evaluation workflows to identify inefficiencies and support continuous optimization.",
        },
        scalian: {
          title: "Software Engineer",
          company: "Scalian DS",
          period: "Sept. 2022 - Nov. 2024",
          location: "Bordeaux, Nouvelle-Aquitaine, France (Hybrid)",
          description: "R&D on cryo-electron tomography workflows for Thermo Fisher Scientific. Developed GPU-based 3D template matching approaches that reduced some processing tasks from days to minutes, with tensor-based and AI-based methods.",
        },
        cea: {
          title: "Software Engineer (Internship)",
          company: "CEA (French Alternative Energies and Atomic Energy Commission)",
          period: "Mar. 2022 - Sept. 2022",
          location: "France",
          description: "High-performance computing on heterogeneous architectures for numerical simulation.",
        },
        hm: {
          title: "Sales Advisor (Student part-time contract)",
          company: "H&M",
          period: "Nov. 2016 - Mar. 2022",
          location: "Bordeaux, Nouvelle-Aquitaine, France",
          description: "Assistant manager (Level 3 confirmed, permanent), responsible for training and supervising staff, managing merchandising, stock, and cash, and handling customer relations and dispute resolution.",
        },
      },
    },
    contact: {
      title: "Let's Work Together",
      subtitle: "I'm open to opportunities around HPC, GPU programming, machine learning, LLM applications, and AI backend systems.",
      sendEmail: "Send Me an Email",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },
};
