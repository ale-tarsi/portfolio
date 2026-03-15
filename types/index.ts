export type ProjectStatus = "completed" | "in-progress" | "archived";

export type ProjectTag =
  | "React"
  | "Next.js"
  | "TypeScript"
  | "JavaScript"
  | "Node.js"
  | "Python"
  | "FastAPI"
  | "SQLAlchemy"
  | "PostgreSQL"
  | "MongoDB"
  | "Ethereum"
  | "Sepolia"
  | "REST API"
  | "UI/UX Design"
  | "Tailwind CSS"
  | "Docker Compose"
  | "HTML"
  | "CSS"
  | "Angular"
  | "Django"
  | "Redis"
  | "Flutter"
  | "Express.js"
  | "n8n"
  | "WebSocket"
  | "Automation"
  | "Workflow";

export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  description: string; // short, used in cards
  year: string;
  role: string;
  status: ProjectStatus;
  tags: ProjectTag[];
  featured: boolean;
  coverColor: string; // Tailwind bg class for placeholder cover
  body: {
    overview: string;
    context: string;
    challenges: ProjectChallenge[];
    approach: string;
    outcome: string;
    sections?: ProjectSection[];
  };
  links?: {
    github?: string;
    live?: string;
    demo?: string;
  };
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  type: "work" | "contract" | "freelance";
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  notes?: string;
}

export interface FocusArea {
  title: string;
  description: string;
}
