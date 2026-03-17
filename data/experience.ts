import { ExperienceItem, EducationItem, FocusArea } from "@/types";

const experienceEN: ExperienceItem[] = [
  {
    company: "AtavicoLabs",
    role: "Freelance Developer",
    period: "May 2024 — Present",
    location: "Remote",
    type: "freelance",
    description:
      "Independent studio focused on digital product development, web applications, and workflow automation. Handles full delivery cycles — from scoping and interface design to implementation and deployment — for small teams and early-stage products.",
    highlights: [
      "Built operational tools and internal dashboards tailored to specific team workflows",
      "Developed workflow automation systems integrating third-party APIs and custom business logic",
      "Designed and implemented product-oriented web interfaces with a focus on clarity and usability",
      "Managed end-to-end delivery on multiple concurrent engagements, maintaining consistent quality and scope control",
    ],
  },
  {
    company: "IOOOTA Srl",
    role: "Frontend Developer",
    period: "Oct 2024 — Mar 2026",
    location: "Remote, Italy",
    type: "work",
    description:
      "Frontend development across multiple products in an IoT and building automation company. Contributed to web management platforms, a cross-platform mobile app (iOS/Android), real-time control interfaces, and a corporate website revamp — working with Angular, React, Ionic, and Next.js across a range of enterprise clients.",
    highlights: [
      "Built the frontend for a thermal plant management webapp with real-time WebSocket data, a graphical control interface, and weekly scheduling of heating and cooling operations",
      "Developed feature modules for the Gabetti Real Estate mobile app (Ionic, iOS/Android), including onboarding flows, a corporate welfare integration via external REST API, and a maintenance request section",
      "Implemented bulk action functionality and resolved critical demo-blocking bugs for an enterprise RSA (assisted living) management webapp",
      "Contributed to the Klima IoT climate control system — integrating room-level device bindings and building seasonal switching (summer/winter) with both single and bulk operation support",
      "Led the full revamp of iooota.com using Next.js, TypeScript, and Tailwind CSS, restructuring content for B2B communication with SEO and metadata improvements",
      "Designed UI mockups for the thermal plant control interface, presented internally and used as the implementation reference across the team",
    ],
  },
  {
    company: "Leonardo S.p.A.",
    role: "Frontend Intern",
    period: "Aug 2023 — Sep 2023",
    location: "Rome, Italy",
    type: "work",
    description:
      "Two-month internship contributing to a web-based internal event management platform. Worked on the Angular frontend, collaborated with a Java backend team, and applied security-conscious development practices.",
    highlights: [
      "Built and refined UI components for an internal event management platform using Angular",
      "Collaborated with a Java backend team to align API contracts and data structures",
      "Implemented responsive layouts ensuring cross-device compatibility",
      "Applied security awareness practices in line with OWASP guidelines",
    ],
  },
];

const experienceIT: ExperienceItem[] = [
  {
    company: "AtavicoLabs",
    role: "Freelance Developer",
    period: "Mag 2024 — Presente",
    location: "Da remoto",
    type: "freelance",
    description:
      "Studio indipendente focalizzato su sviluppo di prodotti digitali, applicazioni web e automazione dei workflow. Gestisce cicli di consegna completi — dalla definizione dello scope e del design dell'interfaccia all'implementazione e al deployment — per team di piccole dimensioni e prodotti in fase iniziale.",
    highlights: [
      "Realizzato strumenti operativi e dashboard interne su misura per i workflow specifici dei team",
      "Sviluppato sistemi di automazione dei workflow con integrazione di API di terze parti e logica di business personalizzata",
      "Progettato e implementato interfacce web orientate al prodotto con attenzione a chiarezza e usabilità",
      "Gestito la consegna end-to-end su più progetti contemporanei, mantenendo qualità e controllo dello scope costanti",
    ],
  },
  {
    company: "IOOOTA Srl",
    role: "Frontend Developer",
    period: "Ott 2024 — Mar 2026",
    location: "Da remoto, Italia",
    type: "work",
    description:
      "Sviluppo frontend su più prodotti in un'azienda IoT e building automation. Contributo a piattaforme di gestione web, un'app mobile cross-platform (iOS/Android), interfacce di controllo real-time e il rifacimento del sito corporate — con Angular, React, Ionic e Next.js per clienti enterprise.",
    highlights: [
      "Costruito il frontend per una webapp di gestione degli impianti termici con dati WebSocket in tempo reale, un'interfaccia di controllo grafica e pianificazione settimanale delle operazioni di riscaldamento e raffreddamento",
      "Sviluppato moduli funzionali per l'app mobile Gabetti Real Estate (Ionic, iOS/Android), tra cui flussi di onboarding, un'integrazione welfare aziendale via REST API esterna e una sezione per le richieste di manutenzione",
      "Implementato funzionalità di azioni bulk e risolto bug critici che bloccavano le demo per una webapp enterprise di gestione RSA (case di cura assistita)",
      "Contributo al sistema di climatizzazione IoT Klima — integrando binding di dispositivi a livello di stanza e switching stagionale edificio (estate/inverno) con supporto per operazioni singole e massicce",
      "Guidato il rifacimento completo di iooota.com con Next.js, TypeScript e Tailwind CSS, ristrutturando i contenuti per la comunicazione B2B con miglioramenti a SEO e metadata",
      "Progettato mockup UI per l'interfaccia di controllo della centrale termica, presentati internamente e usati come riferimento di implementazione dal team",
    ],
  },
  {
    company: "Leonardo S.p.A.",
    role: "Frontend Intern",
    period: "Ago 2023 — Set 2023",
    location: "Roma, Italia",
    type: "work",
    description:
      "Stage di due mesi nel contributo a una piattaforma interna web-based per la gestione degli eventi aziendali. Lavoro sul frontend Angular, collaborazione con un team backend Java e applicazione di pratiche di sviluppo orientate alla sicurezza.",
    highlights: [
      "Costruito e perfezionato componenti UI per una piattaforma interna di gestione eventi con Angular",
      "Collaborato con un team backend Java per allineare i contratti API e le strutture dati",
      "Implementato layout responsive assicurando compatibilità cross-device",
      "Applicato pratiche di sicurezza in linea con le linee guida OWASP",
    ],
  },
];

const educationEN: EducationItem[] = [
  {
    institution: "42 Roma Luiss",
    degree: "Intensive Coding Program",
    period: "2022 — 2024",
    location: "Rome, Italy",
    notes:
      "Completed a project-based, peer-reviewed software engineering program covering C, C++, Python, web development, algorithms, data structures, and systems programming. The curriculum is entirely self-paced and driven by real engineering challenges.",
  },
  {
    institution: "Accademia Poliarte",
    degree: "Bachelor's Degree in Product Design",
    period: "2019 — 2021",
    location: "Ancona, Italy",
    notes:
      "Three-year degree covering UX/UI design, digital product development, 3D modeling, and prototyping. This foundation directly informs how I approach interface structure and product thinking in engineering work.",
  },
];

const educationIT: EducationItem[] = [
  {
    institution: "42 Roma Luiss",
    degree: "Programma Intensivo di Sviluppo Software",
    period: "2022 — 2024",
    location: "Roma, Italia",
    notes:
      "Completato un programma di ingegneria del software basato su progetti e peer review che copre C, C++, Python, sviluppo web, algoritmi, strutture dati e programmazione di sistemi. Il curriculum è interamente autogestito e guidato da sfide ingegneristiche reali.",
  },
  {
    institution: "Accademia Poliarte",
    degree: "Laurea Triennale in Product Design",
    period: "2019 — 2021",
    location: "Ancona, Italia",
    notes:
      "Laurea triennale che copre UX/UI design, sviluppo di prodotti digitali, modellazione 3D e prototipazione. Questa base informa direttamente l'approccio alla struttura delle interfacce e al pensiero di prodotto nel lavoro di ingegneria.",
  },
];

export function getExperience(locale: string): ExperienceItem[] {
  return locale === "it" ? experienceIT : experienceEN;
}

export function getEducation(locale: string): EducationItem[] {
  return locale === "it" ? educationIT : educationEN;
}

// Default EN exports kept for backward compatibility
export const experience = experienceEN;
export const education = educationEN;

export const focusAreas: FocusArea[] = [
  {
    title: "Product-minded development",
    description:
      "I start from the actual product problem, not the implementation path. That means making structural decisions early, avoiding complexity that doesn't serve the user, and keeping the component model aligned with the interaction model — not just the data model.",
  },
  {
    title: "Frontend engineering",
    description:
      "Frontend is system design, not UI assembly. Component boundaries, state ownership, rendering strategy, API integration, and accessibility are architectural decisions — they shape how the product behaves, not just how it looks.",
  },
  {
    title: "Operational tooling",
    description:
      "Internal tools are where most products quietly succeed or fail. Dashboards, admin flows, and management systems deserve the same structural care as customer-facing surfaces — because the people using them are doing consequential work.",
  },
  {
    title: "Design–engineering integration",
    description:
      "Having designed before building changes what I notice during implementation. Interaction implications, hierarchy issues, and spacing decisions read differently when you've worked on the other side of the handoff. The gap between intended experience and shipped product closes earlier.",
  },
];
