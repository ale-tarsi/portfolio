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
  image?: string;
}

export interface ProjectStep {
  title: string;
  description: string;
}

export interface ProjectModuleItem {
  name: string;
  description: string;
  status?: string;
  statusType?: "active" | "pending";
}

export interface ProjectStatusGroup {
  label: string;
  type: "active" | "pending" | "planned";
  items: string[];
}

export interface ProjectAsset {
  type: "image" | "gallery" | "diagram" | "demo";
  url?: string;      // image src, diagram src, or demo href
  alt?: string;      // image / diagram alt text
  caption?: string;  // figcaption or description shown below
  label?: string;    // demo: card title / link button text
  images?: Array<{ url: string; alt?: string }>;  // gallery items
}

export interface ProjectSection {
  id?: string;
  heading: string;
  variant?: "default" | "featured" | "modules" | "status-summary";
  intro?: string;     // lead paragraph, rendered first
  content?: string;   // main paragraph text
  list?: string[];    // unordered bullet items
  steps?: ProjectStep[];  // ordered flow steps with title + description
  items?: ProjectModuleItem[];  // structured cards, used with variant="modules"
  statusGroups?: ProjectStatusGroup[];  // status rows, used with variant="status-summary"
  assets?: ProjectAsset[];  // optional visual assets rendered after content
  mainVisual?: { url?: string; alt?: string; caption?: string };   // single hero image, featured section only
  galleryImages?: Array<{ url?: string; alt?: string }>;           // 2–4 secondary screenshots, featured section only
  caption?: string;   // optional caption rendered below the gallery
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
    overviewAssets?: ProjectAsset[];
    context: string;
    contextAssets?: ProjectAsset[];
    challenges: ProjectChallenge[];
    approach: string;
    approachCards?: Array<{ label: string; value: string }>;
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
