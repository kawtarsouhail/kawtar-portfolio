import { Code2, Server, Database, Sparkles, Wrench, LucideIcon } from "lucide-react";

export interface SkillGroup {
  title: string;
  icon: LucideIcon;
  items: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["Laravel", "Spring Boot", "FastAPI", "REST APIs"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQL"],
  },
  {
    title: "AI / Data",
    icon: Sparkles,
    items: ["Python", "Scikit-learn", "TensorFlow", "LangChain", "LLMs"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "Docker", "n8n"],
  },
];
