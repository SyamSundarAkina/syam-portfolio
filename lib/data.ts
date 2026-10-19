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
    "I build LLM applications, multi-agent systems, and retrieval and ranking pipelines on Azure, along with the testing and guardrails they need to run reliably in production.",
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ---------- About ---------- */

export type AreaId = "agents" | "rag" | "security" | "evals" | "ml";

export const about = {
  title: "I build AI agents, LLM apps, and ML systems for production.",
  paragraphs: [
    "I’m an AI Engineer and Data Scientist in Dallas with 4+ years of experience across machine learning, generative AI, and software engineering. I currently work at Publicis Groupe on the AI engineering side, building enterprise AI agents on Microsoft Azure and an AI-powered campaign recommendation tool.",
    "Most of my work is in Python and SQL. I build LLM applications and multi-agent workflows with Microsoft Foundry, LangGraph, AutoGen, and CrewAI, and RAG pipelines with hybrid search, FAISS, and cross-encoder reranking. I fine-tune models with Hugging Face and PEFT/LoRA, train classical models with scikit-learn, PyTorch, and XGBoost, and contribute to open source, including Meta’s TorchRec.",
    "I care about AI that holds up after the demo: tested against real data, protected with guardrails and human review, and deployed with Docker, CI/CD, and monitoring on Azure.",
  ],
  current: {
    role: "Data Scientist (AI Engineering)",
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
    title: "Data Scientist (AI Engineering)",
    company: "Publicis Groupe",
    location: "Irving, TX",
    period: "Feb 2026 – Present",
    overview:
      "I build enterprise AI agents and automation on Microsoft Azure. My main project is a multi-agent system that reads incoming emails and attachments, classifies each request with LLMs, and moves it to the right next step, with rules, validation, and human review built in. I also built an AI-powered campaign recommendation tool that flags campaigns needing attention and suggests budget and strategy changes.",
    highlights: [
      "Built a multi-agent system on Azure for reconciliation that reads emails and attachments, classifies each request (RFIs, document requests, and others), recommends the next action, and drafts responses, orchestrated with Azure Durable Functions.",
      "Built an AI-powered campaign recommendation tool that analyzes performance data (clicks, CTR, spend), flags campaigns needing action, and suggests budget reallocation and strategy changes to media teams.",
      "Built agent workflows in Microsoft Foundry Agent Service with tool calling, structured outputs, and fallback logic, so low-confidence cases go to a person for review instead of being guessed at.",
      "Designed a YAML-based rules layer so the team can change how threads, senders, urgency, and attachments are handled without code changes.",
      "Built ground-truth datasets and regression tests that catch mistakes before they ship, reaching 92.6% classification accuracy, 99.6% path accuracy, and 100% manual-review compliance.",
      "Secured the agents with prompt-injection defenses, schema checks, JWT, Azure API Management, Key Vault, and Managed Identity, and shipped them with Docker and GitHub Actions CI/CD, tested end to end across six platform integrations.",
      "Owned both systems end to end, from gathering requirements with clients and business users through design, evaluation, and deployment, explaining how the agents make decisions and turning feedback into fixes.",
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
      "Improved RAG retrieval and ranking quality through better chunking, embeddings, and retrieval, checked with grounding tests and model-to-model comparisons.",
      "Reduced recurring failure cases by ~20% through error analysis and targeted data, retrieval, and tuning fixes.",
    ],
    stack: ["PEFT / LoRA", "Hugging Face", "RAG", "Embeddings", "Python"],
  },
  {
    title: "AI Developer Intern",
    company: "ImpacterAI (pre-seed startup)",
    location: "San Francisco, CA · Remote",
    period: "Jul 2025 – Oct 2025",
    overview:
      "Built agentic AI prototypes on the Google Gemini Agent SDK, from backend API integration to deployed Azure demos, with validation and fallback behavior so the agents fail safely. Worked directly with early users to shape each version.",
    highlights: [
      "Built agent prototypes with grounding checks and response validation, so the agents failed safely instead of making things up.",
      "Talked directly with early users and clients to understand their problems, explain what we were building, and bring their feedback into the next version.",
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
      "Built and ran production personalization and audience segmentation workflows, including deduplication and suppression.",
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
      "A two-stage retrieval and ranking pipeline for product search: blends BM25 keyword and FAISS semantic retrieval, filters by budget, color, and audience, reranks with a cross-encoder, and generates grounded answers with a local LLM. Ranking quality measured with hit@K and MRR.",
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

/* ---------- Open source ---------- */

export type Contribution = {
  project: string;
  repo: string; // "owner/name" on GitHub
  context: string;
  title: string; // the PR title
  summary: string;
  changes: string[];
  status: "In review" | "Merged";
  pr: { number: number; url: string };
  issue?: { number: number; url: string };
  diff: string;
  stack: string[];
};

export const openSource: Contribution[] = [
  {
    project: "PyTorch TorchRec",
    repo: "meta-pytorch/torchrec",
    context: "Meta’s library for large-scale recommendation systems",
    title: "Only warn about ignored cache_params when they are set",
    summary:
      "TorchRec logged “caching params will be ignored” for every data-parallel or dense-kernel table during embedding sharding, even when no cache settings were given, which was noisy and confusing for users.",
    changes: [
      "The warning now appears only when cache_params are actually set, and explains why they have no effect on fully replicated tables.",
      "Added regression tests for both cases, with existing behavior otherwise unchanged.",
    ],
    status: "In review",
    pr: { number: 4904, url: "https://github.com/meta-pytorch/torchrec/pull/4904" },
    issue: { number: 3505, url: "https://github.com/meta-pytorch/torchrec/issues/3505" },
    diff: "+63 −11 · 2 files",
    stack: ["Python", "PyTorch", "Distributed embeddings", "unittest"],
  },
];

/* ---------- Skills ---------- */

export type SkillGroup = { id: "agents" | "rag" | "security" | "evals" | "ml" | "cloud"; title: string; skills: string[] };

// Named the way 2026 AI-engineering roles describe them; every item is backed by the resumes or GitHub projects.
export const skillGroups: SkillGroup[] = [
  {
    id: "agents",
    title: "Agentic AI & Orchestration",
    skills: ["Agentic AI", "Multi-agent orchestration", "Microsoft Foundry Agent Service", "LangGraph", "AutoGen", "CrewAI", "Gemini Agent SDK", "Tool / function calling", "Structured outputs", "Context engineering", "Human-in-the-loop workflows"],
  },
  {
    id: "rag",
    title: "LLMs, RAG & Fine-Tuning",
    skills: ["LLM applications", "Production RAG", "Hybrid search (BM25 + vector)", "Embeddings", "FAISS", "Cross-encoder reranking", "Two-stage retrieval & ranking", "Chunking & document ingestion", "Hugging Face", "PEFT / LoRA fine-tuning", "OCR"],
  },
  {
    id: "security",
    title: "AI Security & Guardrails",
    skills: ["Guardrails", "Prompt-injection defenses", "Output verification", "Schema enforcement", "Human review gates", "Azure Key Vault", "Managed Identity", "JWT / OAuth 2.0", "Azure API Management"],
  },
  {
    id: "evals",
    title: "Evals, LLMOps & Observability",
    skills: ["LLM evaluation", "Retrieval evaluation (hit@K, MRR)", "Ground-truth datasets", "Regression testing", "Pytest", "Grounding checks", "Benchmarking", "Prompt & model versioning", "Observability (Application Insights)", "CI/CD for AI"],
  },
  {
    id: "ml",
    title: "Machine Learning & Data Science",
    skills: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "Feature engineering", "Predictive modeling", "Classification", "Recommendation & ranking", "Personalization", "A/B testing", "EDA", "Computer vision"],
  },
  {
    id: "cloud",
    title: "Cloud, APIs & Data",
    skills: ["Azure Functions", "Durable Functions", "Event-driven workflows", "FastAPI", "Async Python (asyncio)", "REST APIs", "Webhooks", "Docker", "GitHub Actions", "SQL", "Pandas", "ETL"],
  },
];
