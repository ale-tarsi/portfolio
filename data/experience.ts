import { ExperienceItem, EducationItem, FocusArea } from "@/types";

export const experience: ExperienceItem[] = [
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
      "Contributed to the development of web and mobile applications within a product team. Worked primarily with Angular and Ionic, integrating REST APIs and translating design assets into functional, maintainable interfaces.",
    highlights: [
      "Built and maintained feature modules across web and mobile surfaces using Angular and Ionic",
      "Integrated RESTful APIs in collaboration with backend engineers",
      "Translated design assets into responsive, accessible UI components",
      "Participated in UI/UX review cycles to keep implementation aligned with design intent",
    ],
  },
  {
    company: "Leonardo S.p.A.",
    role: "Frontend Intern",
    period: "Aug 2023 — Sep 2023",
    location: "Rome, Italy",
    type: "work",
    description:
      "Three-month internship contributing to a web-based internal event management platform. Worked on the Angular frontend, collaborated with a Java backend team, and applied security-conscious development practices.",
    highlights: [
      "Built and refined UI components for an internal event management platform using Angular",
      "Collaborated with a Java backend team to align API contracts and data structures",
      "Implemented responsive layouts ensuring cross-device compatibility",
      "Applied security awareness practices in line with OWASP guidelines",
    ],
  },
];

export const education: EducationItem[] = [
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
