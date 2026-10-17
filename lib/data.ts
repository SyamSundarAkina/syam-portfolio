// All site content lives here. Edit this file to update the portfolio.

export const profile = {
  name: "Syam Sundar Akina",
  role: "AI Engineer & Data Scientist",
  focus: "Agentic AI · LLM applications · Machine learning",
  email: "syamsundarakina@gmail.com",
  location: "Dallas, TX",
  linkedin: "https://www.linkedin.com/in/a-syam/",
  github: "https://github.com/SyamSundarAkina",
  intro:
    "I build LLM applications, multi-agent systems, and RAG pipelines on Azure, along with the testing and guardrails they need to run reliably in production.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ---------- About ---------- */

export type AreaId = "agents" | "rag" | "security" | "evals" | "ml";

export const about = {
  title: "I build AI agents, LLM apps, and ML systems for production.",
  paragraphs: [
    "I’m an AI Engineer and Data Scientist in Dallas with 4+ years of experience across machine learning, generative AI, and software engineering. I currently work at Publicis Groupe, building enterprise AI agents and automation on Microsoft Azure.",
    "Most of my work is in Python and SQL. I build LLM applications and multi-agent workflows with Microsoft Foundry, LangGraph, AutoGen, and CrewAI, and RAG pipelines with embeddings and FAISS vector search. I fine-tune models with Hugging Face and PEFT/LoRA, and train classical models with scikit-learn, PyTorch, and XGBoost.",
    "I care about AI that holds up after the demo: tested against real data, protected with guardrails and human review, and deployed with Docker, CI/CD, and monitoring on Azure.",
  ],
  current: {
    role: "Data Scientist",
    company: "Publicis Groupe",
    place: "Irving, TX",
    note: "Enterprise AI agents on Microsoft Foundry & Azure",
  },
  areas: [
    { id: "agents", label: "Agentic AI & multi-agent systems" },
    { id: "rag", label: "LLM applications, RAG & fine-tuning" },
    { id: "security", label: "AI security & guardrails" },
    { id: "evals", label: "AI evaluation & testing" },
    { id: "ml", label: "Machine learning & data science" },
  ] as { id: AreaId; label: string }[],
  education: [
    { title: "M.S., Information Systems and Technologies", org: "University of North Texas", period: "2023 – 2025" },
    { title: "B.Tech., Mechanical Engineering", org: "Bapatla Engineering College", period: "2017 – 2021" },
  ],
  certifications: [
    {
      title: "Azure AI Engineer Associate",
      org: "Microsoft Certified",
      url: "https://learn.microsoft.com/en-us/users/syamsundaraakina-1371/credentials/55b4029cb64f0096",
    },
    { title: "Adobe Campaign Classic Developer", org: "Adobe Certified Expert", url: undefined },
  ],
};

/* ---------- Experience ---------- */

export type Role = {
  title: string;
  company: string;
  location: string;
  period: string;
  overview: string; // 2–4 lines shown by default
  highlights: string[]; // shown under "Show details"
  stack: string[];
};

export const experience: Role[] = [
  {
    title: "Data Scientist",
    company: "Publicis Groupe",
    location: "Irving, TX",
    period: "Feb 2026 – Present",
    overview:
      "I build enterprise AI agents and automation on Microsoft Azure. My main project is an agentic workflow that reads incoming emails and attachments, classifies each request with LLMs, and moves it to the right next step, with rules, validation, and human review built in. I also own its evaluation and testing, and apply ML and predictive modeling to business data.",
    highlights: [
      "Architected an agentic AI workflow for enterprise reconciliation: email and attachment ingestion, thread resolution, AI classification, and backend APIs, orchestrated with Azure Durable Functions.",
      "Built multi-agent workflows in Microsoft Foundry Agent Service with tool calling, structured outputs, reusable prompt patterns, fallback logic, and human-review checkpoints.",
      "Designed a hybrid rules + LLM architecture with YAML configuration for classification, urgency detection, attachment validation, and message extraction.",
      "Added security guardrails: prompt-injection defenses, schema validation, and output checks, with secure integrations through JWT, Azure API Management, Key Vault, and Managed Identity.",
      "Built evaluation and regression-testing frameworks on ground-truth data, reaching 92.6% classification accuracy, 99.6% path accuracy, and 100% manual-review compliance.",
      "Deployed with Docker, GitHub Actions, and CI/CD, with Application Insights monitoring.",
      "Applied EDA, feature engineering, regression, decision trees, and predictive scoring to structured and unstructured data.",
    ],
    stack: ["Microsoft Foundry", "Azure Functions", "LLMs", "Python", "Key Vault", "GitHub Actions"],
  },
  {
    title: "Machine Learning Engineer",
    company: "Source Sphere LLC",
    location: "Edison, NJ",
    period: "Oct 2025 – Feb 2026",
    overview:
      "Fine-tuned large language models and improved the quality of retrieval-augmented generation (RAG) systems. Built repeatable training and evaluation pipelines in Python, and used error analysis to cut recurring failures by about 20%.",
    highlights: [
      "Fine-tuned LLMs with PEFT/LoRA on curated training data using versioned Python pipelines.",
      "Improved RAG through better chunking, embeddings, and retrieval tuning, checked with grounding tests and comparisons across model versions.",
      "Reduced recurring failure cases by ~20% through error analysis and targeted data, retrieval, and tuning fixes.",
    ],
    stack: ["PEFT / LoRA", "Hugging Face", "RAG", "Embeddings", "Python"],
  },
  {
    title: "AI Developer",
    company: "ImpacterAI",
    location: "San Francisco, CA · Remote",
    period: "Jul 2025 – Oct 2025",
    overview:
      "Built agentic AI prototypes on the Google Gemini Agent SDK, from backend API integration to deployed Azure demos, with validation and fallback behavior so the agents fail safely.",
    highlights: [
      "Built end-to-end agent prototypes with structured execution, grounding checks, and response validation.",
      "Integrated backend APIs and deployed Azure-hosted demos with HTTPS/TLS, logging, and error handling.",
    ],
    stack: ["Gemini Agent SDK", "Azure", "REST APIs"],
  },
  {
    title: "Software Engineer (Student Assistant)",
    company: "University of North Texas",
    location: "Denton, TX",
    period: "May 2024 – May 2025",
    overview:
      "Built multi-agent systems where planner, retriever, executor, and reviewer agents work together across tools and APIs. Added RAG with semantic search, FastAPI backends, and human approval steps for high-impact actions.",
    highlights: [
      "Built multi-agent workflows with LangGraph, AutoGen, and CrewAI.",
      "Implemented RAG with embeddings and semantic search, plus n8n automation and FastAPI backends with source-grounded answers.",
      "Added human approvals, validation, refusal behavior, fallback logic, and logging for high-impact actions.",
    ],
    stack: ["LangGraph", "AutoGen", "CrewAI", "FastAPI", "RAG"],
  },
  {
    title: "Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    period: "Dec 2021 – Jun 2023",
    overview:
      "Built and maintained production data workflows on Adobe Campaign Classic, with SQL for data extraction and reporting and SOAP/REST integrations. Added reusable templates and data-quality checks, and fixed production issues across teams.",
    highlights: [
      "Built workflows for segmentation, deduplication, suppression, and personalization.",
      "Integrated data through SFTP and SOAP/REST services; wrote SQL for extraction, reporting, and analysis.",
      "Standardized templates, business rules, approval steps, and data-quality checks.",
    ],
    stack: ["SQL", "SOAP / REST", "SFTP", "Adobe Campaign Classic"],
  },
  {
    title: "Trainee Analyst",
    company: "Instrukart Holdings",
    location: "India",
    period: "Jul 2021 – Oct 2021",
    overview: "Analyzed engagement and performance data and prepared reports to support day-to-day decisions.",
    highlights: [],
    stack: ["Analytics", "Reporting"],
  },
];

/* ---------- Projects (personal, on GitHub; client work lives under Experience) ---------- */

export type Project = {
  name: string;
  kind: string;
  description: string;
  stack: string[];
  flow: string[];
  repo?: string; // repository URL; falls back to your GitHub profile
  demo?: string; // add a live demo URL to show a "Live demo" link
};

export const projects: Project[] = [
  {
    name: "Hybrid RAG Product Search",
    kind: "Retrieval-augmented generation",
    description:
      "Product search that fuses BM25 keyword and FAISS semantic retrieval with Reciprocal Rank Fusion, applies budget, color, and audience constraints, reranks with a cross-encoder, and generates grounded recommendations with a local LLM. Includes a retrieval benchmark (hit@K, MRR).",
    stack: ["Python", "FAISS", "BM25", "Cross-encoder", "Ollama"],
    flow: ["Query", "BM25 + FAISS", "Rerank", "Grounded answer"],
    repo: "https://github.com/SyamSundarAkina/Hybrid-RAG-E-commerce-system-",
  },
  {
    name: "ResolveAI",
    kind: "Multi-agent IT automation",
    description:
      "A coordinator routes IT tickets to diagnostic, automation, and writer agents that analyze the issue, generate remediation scripts, and draft a summary email, with retry logic, Pytest coverage, and a human approval gate before any action runs.",
    stack: ["LangGraph", "FastAPI", "FAISS", "Pytest"],
    flow: ["Coordinator", "Agents", "Writer", "Approval"],
    repo: "https://github.com/SyamSundarAkina/ResolveAI",
  },
  {
    name: "ActiNote",
    kind: "AI meeting assistant",
    description:
      "Parses Microsoft Teams transcripts, extracts summaries and action items, maps them to participants, and prepares personalized follow-ups with optional calendar scheduling.",
    stack: ["Microsoft Graph API", "OAuth 2.0", "asyncio", "LLMs"],
    flow: ["Transcript", "LLM parse", "Actions", "Follow-ups"],
  },
  {
    name: "LoRA Fine-Tuning",
    kind: "LLM fine-tuning",
    description:
      "Fine-tunes GPT-2 with LoRA for emotion classification: cleans data into instruction-style JSONL, trains efficiently with Hugging Face PEFT, and evaluates with BLEU, ROUGE, and METEOR.",
    stack: ["PEFT / LoRA", "Hugging Face", "GPT-2", "PyTorch"],
    flow: ["Raw text", "JSONL", "LoRA train", "Evaluate"],
    repo: "https://github.com/SyamSundarAkina/Fine_Tuning_our_own_dataset",
  },
];

/* ---------- Skills ---------- */

export type SkillGroup = { id: "agents" | "rag" | "security" | "evals" | "ml" | "cloud"; title: string; skills: string[] };

export const skillGroups: SkillGroup[] = [
  {
    id: "agents",
    title: "AI Engineering & Agents",
    skills: ["LLMs", "Microsoft Foundry Agent Service", "Gemini Agent SDK", "LangGraph", "AutoGen", "CrewAI", "Prompt engineering", "Tool / function calling", "Structured outputs", "Multi-agent orchestration"],
  },
  {
    id: "rag",
    title: "LLMs, RAG & Fine-Tuning",
    skills: ["RAG", "Embeddings", "FAISS", "Vector search", "Semantic search", "Chunking", "Hugging Face", "PEFT / LoRA", "Document ingestion & OCR"],
  },
  {
    id: "security",
    title: "AI Security & Governance",
    skills: ["Prompt-injection defenses", "Guardrails", "Schema validation", "Output verification", "Human-in-the-loop", "Azure Key Vault", "Managed Identity", "JWT / OAuth 2.0", "Azure API Management"],
  },
  {
    id: "evals",
    title: "AI Evaluation & LLMOps",
    skills: ["LLM evaluation", "Ground-truth datasets", "Regression testing", "Benchmarking", "Grounding checks", "Confusion-matrix analysis", "Prompt & model versioning", "Monitoring"],
  },
  {
    id: "ml",
    title: "Machine Learning & Data Science",
    skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Feature engineering", "Predictive modeling", "Classification", "A/B testing", "EDA", "Computer vision"],
  },
  {
    id: "cloud",
    title: "Cloud, APIs & Data",
    skills: ["Azure Functions", "Durable Functions", "Application Insights", "FastAPI", "REST APIs", "Webhooks", "Docker", "GitHub Actions", "CI/CD", "SQL", "Pandas", "ETL"],
  },
];
