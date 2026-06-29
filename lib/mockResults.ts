import { GeneratedAnalysis } from "./types";

export const mockResults: GeneratedAnalysis = {
  ats: {
    matchScore: 78,
    matchingSkills: ["Python", "FastAPI", "LLMs", "RAG", "SQL"],
    missingSkills: ["Kubernetes", "Terraform", "Azure DevOps"],
    suggestions: [
      "Add more measurable project impact.",
      "Include exact tools from the job description.",
      "Highlight cloud deployment experience.",
    ],
  },

  emails: [
    {
      title: "Professional Recruiter Email",
      content:
        "Hi, I came across this opportunity and believe my background aligns well with the role. My experience includes Python, AI/ML engineering, LLM applications, RAG pipelines, and backend API development. I would be happy to discuss how my skills match the requirement.",
    },
    {
      title: "ATS Optimized Email",
      content:
        "Hi, I am interested in this role. My background includes Python, FastAPI, machine learning, GenAI, LLMs, RAG, vector databases, SQL, cloud deployment, and production AI application development.",
    },
  ],

  notes: [
    {
      title: "Recruiter Connection Note",
      content:
        "Hi, I came across your AI role and my background in Python, GenAI, LLMs, RAG, and backend AI platforms looks aligned. I’d be happy to connect and learn more.",
    },
  ],

  questions: [
    {
      category: "Common Questions",
      items: [
        "Tell me about yourself.",
        "Why are you interested in this role?",
        "Walk me through your recent project.",
      ],
    },
  ],
};