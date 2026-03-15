import { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "host-operations-platform",
    title: "Host Operations Platform",
    subtitle: "Micro-tool family for short-term rental operations — check-in, channel manager, AI, and workers",
    description:
      "A family of integrated tools for short-term rental hosts: HostID for digital check-in and regulatory reporting (Questura, ISTAT) with OCR, a channel manager with Booking.com/Airbnb/Vrbo integrations and AI add-ons, external service coordination, and a workers marketplace in development.",
    year: "2024",
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    coverColor: "bg-stone-200",
    tags: ["Flutter", "Express.js", "PostgreSQL", "Python", "FastAPI", "n8n", "Docker Compose"],
    body: {
      overview:
        "Host Operations Platform is a family of micro-tools built around short-term rental operations. HostID handles digital guest check-in, document scanning via OCR, and automated reporting to Questura and ISTAT — available as both web and mobile (Flutter) app. A channel manager integrates with Booking.com, Airbnb, and Vrbo for availability and reservation sync, extended with AI add-ons for automated guest responses and dynamic pricing via n8n workflows and Python microservices. External service providers — cleaning, linen, maintenance — are connected through dedicated APIs. A workers module is in development to function as an Uber-like marketplace connecting hosts with vetted professionals and partner companies.",
      context:
        "Short-term rental management in Italy involves regulatory obligations (Questura police reporting, ISTAT statistical submissions) on top of the usual operational complexity of coordinating between booking platforms, guests, and external service providers — each handled in separate tools. The platform was built to consolidate these workflows into a structured system, removing manual handoffs and reducing the surface for operational errors.",
      challenges: [
        {
          title: "Regulatory compliance and document handling",
          description:
            "HostID had to handle OCR extraction from identity documents, validate the extracted data, and submit structured reports to both Questura and ISTAT in their required formats — reliably and with clear error handling when submissions fail or documents are unreadable.",
        },
        {
          title: "Channel manager synchronisation",
          description:
            "Maintaining consistent availability, reservations, and pricing across Booking.com, Airbnb, and Vrbo required building normalised integration adapters for each platform's API — handling rate limits, sync conflicts, and diverging data models without losing state fidelity.",
        },
        {
          title: "AI add-on architecture",
          description:
            "Guest response automation and dynamic pricing were implemented as modular add-ons using n8n for workflow orchestration and Python microservices for model integration. The architecture had to keep AI outputs auditable and controllable — hosts needed visibility and override capability before any automation affected live reservations.",
        },
        {
          title: "Workers marketplace design",
          description:
            "Designing an Uber-like coordination layer for cleaning, linen, and maintenance services required modelling availability, job dispatching, and partner onboarding — while keeping the system extensible for the mix of individual professionals and existing service companies joining as partners.",
        },
      ],
      approach:
        "HostID built as a Flutter mobile app and web interface, backed by an Express.js API, PostgreSQL database, and API Gateway. OCR processing handled by a dedicated Python FastAPI microservice running in Docker. Channel manager built as a separate module with platform-specific adapters for Booking.com, Airbnb, and Vrbo. AI add-ons orchestrated via n8n with Python microservices for model calls. External service APIs developed as standalone integration points. Workers module under active design and development.",
      outcome:
        "HostID, channel manager, and external service API integrations functional and in use. AI add-ons operational via n8n workflows. Workers marketplace module in development. Mockup with interactive demo planned for portfolio presentation.",
    },
  },
  {
    slug: "finance-coach",
    title: "Finance Coach",
    subtitle: "Full-stack financial data and analytics platform",
    description:
      "A platform for importing financial statements, normalizing transaction events, and generating portfolio analytics dashboards for monitoring and visibility.",
    year: "2024",
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-slate-200",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker Compose"],
    body: {
      overview:
        "Finance Coach is a full-stack platform for importing financial statements from multiple sources, normalising them into a consistent event model, and presenting portfolio analytics through dashboard interfaces. It addresses the problem of fragmented financial data across institutions and formats — giving users a unified view of their portfolio activity.",
      context:
        "Financial statements from different institutions use inconsistent schemas, naming conventions, date formats, and categorisation logic. Building a reliable platform required designing around these inconsistencies at the data layer — before any meaningful analytics or visualisation could be presented. The goal was a maintainable pipeline from raw import to normalised events to dashboard visibility.",
      challenges: [
        {
          title: "Data normalisation across formats",
          description:
            "Statements from different sources required format-specific parsers and a shared normalisation layer that could handle varying field names, date encodings, and transaction categories without losing source fidelity.",
        },
        {
          title: "Analytics interface design",
          description:
            "Translating normalised data into useful dashboard views meant deciding which aggregations and groupings were actually meaningful for monitoring — not just displaying records, but surfacing portfolio-level patterns in a usable form.",
        },
        {
          title: "Full-stack integration",
          description:
            "Connecting the Next.js frontend with a Python FastAPI backend handling ingestion, transformation, and PostgreSQL persistence required a clean API contract and careful handling of asynchronous data flows across the import pipeline.",
        },
      ],
      approach:
        "Frontend built with Next.js and React dashboard components. Backend in Python using FastAPI for the API layer, SQLAlchemy as the ORM, and PostgreSQL for persistence. Docker Compose used for local development environment consistency. Data ingestion and normalisation handled in dedicated service modules, separated from API routing to keep each layer testable and replaceable.",
      outcome:
        "Core platform delivered with statement import, normalisation pipeline, and analytics dashboard functional. The architecture cleanly separates ingestion, storage, and presentation concerns — making it maintainable and straightforward to extend with additional data sources or analytics views.",
    },
  },
  {
    slug: "websites-showcase",
    title: "Corporate & Showcase Websites",
    subtitle: "Frontend development across multiple web properties",
    description:
      "Frontend development and delivery across multiple company and showcase websites — including AtavicoLabs, IOOOTA, CODFOOD, Semylla, and related digital properties.",
    year: "2024",
    role: "Frontend Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-neutral-300",
    tags: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
    body: {
      overview:
        "A collection of frontend web projects delivered across different company, product, and showcase contexts. Sites include AtavicoLabs, IOOOTA, CODFOOD, Semylla, and additional web properties — each with distinct design identities, content structures, and delivery requirements.",
      context:
        "Website delivery for multiple clients and studio contexts required consistent technical execution across varying brand requirements. The work spanned initial scaffolding through production deployment, covering responsive layout implementation, UI component development, and content integration — while keeping codebases maintainable across concurrent engagements.",
      challenges: [
        {
          title: "Consistency across multiple contexts",
          description:
            "Each project had distinct design and content requirements while sharing the same underlying technology. Maintaining clean, maintainable code across concurrent engagements required clear component and layout architecture that scaled across projects without creating unnecessary coupling.",
        },
        {
          title: "Responsive layout implementation",
          description:
            "Translating design intent accurately into responsive implementations required careful attention to spacing systems, typographic hierarchy, breakpoint behaviour, and cross-device consistency — particularly for content-heavy layouts.",
        },
        {
          title: "Production delivery workflow",
          description:
            "Managing frontend delivery across multiple active projects in parallel required organised project structure, reliable build processes, and attention to deployment consistency across different hosting environments.",
        },
      ],
      approach:
        "All sites built with React and Next.js in TypeScript for type safety and long-term maintainability. Each project structured around a shared layout model with site-specific components and content. Focused on clean semantic HTML, responsive CSS, and production-ready output.",
      outcome:
        "Multiple sites delivered and live across company, product, and showcase contexts. The shared technology base kept development efficient while the component structure allowed each site to maintain a distinct visual identity.",
    },
  },
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    subtitle: "Full-stack realtime multiplayer platform with security and blockchain integration",
    description:
      "Multiplayer Pong platform with realtime gameplay, tournament management, enterprise-grade security layers, and blockchain-based result registration on Ethereum Sepolia.",
    year: "2024",
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-indigo-100",
    tags: ["Angular", "TypeScript", "Django", "WebSocket", "PostgreSQL", "Redis", "Docker Compose", "Ethereum", "Sepolia"],
    body: {
      overview:
        "ft_transcendence is a full-stack multiplayer web platform built around a real-time Pong game with tournament management, role-based access, and blockchain-based result registration. The platform combines an Angular frontend, a Django backend with WebSocket-driven game logic, and a security-oriented infrastructure layer — delivering a production-grade architecture across every layer of the stack.",
      context:
        "The project was a 42 curriculum final assignment with deliberately broad scope: build a complete, deployable multiplayer platform meeting functional, security, and infrastructure requirements simultaneously. The combination of real-time gameplay, tournament logic, enterprise security patterns, and on-chain data registration made it a technically dense integration challenge with no room for shortcuts across layers.",
      challenges: [
        {
          title: "Real-time gameplay and tournament flow",
          description:
            "Implementing multiplayer Pong with accurate, low-latency state synchronisation required a WebSocket-based game loop with asynchronous server-side logic and client-side interpolation. Tournament bracket progression had to remain consistent across concurrent matches and disconnection scenarios.",
        },
        {
          title: "Security-oriented infrastructure",
          description:
            "Meeting enterprise-grade security requirements meant integrating HashiCorp Vault for secrets management, ModSecurity as a web application firewall, TLS-enabled services throughout, and ELK Stack for observability — each requiring careful configuration to work together without degrading application performance.",
        },
        {
          title: "Blockchain result registration",
          description:
            "Persisting tournament outcomes on the Sepolia Ethereum testnet introduced transaction lifecycle handling — confirmation waiting, on-chain read/write latency, and smart contract data structure constraints — that required careful decoupling from the main application flow to avoid blocking user-facing operations.",
        },
      ],
      approach:
        "Frontend built in Angular with TypeScript. Backend in Django using Django REST Framework for APIs and Django Channels for WebSocket-based game sessions. PostgreSQL for relational persistence, Redis for channel layer and session state. Docker Compose for full-stack local and deployment orchestration. Security layer composed of HashiCorp Vault, ModSecurity, and TLS-enforced service boundaries. ELK Stack for centralised log aggregation and observability.",
      outcome:
        "Complete platform delivered and functional across all requirement layers — real-time multiplayer, tournament management, security infrastructure, and blockchain integration. The project produced full-stack experience across frontend, backend, DevOps, and security domains within a single cohesive system.",
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
