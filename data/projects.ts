import { Project } from "@/types";

const staticBasePath = process.env.GITHUB_ACTIONS === "true" ? "/portfolio" : "";
const withStaticBasePath = (path: string) =>
  `${staticBasePath}${path.startsWith("/") ? path : `/${path}`}`;

const projectsEN: Project[] = [
  {
    slug: "host-operations-platform",
    title: "Host Operations Platform",
    subtitle:
      "Micro-tool family for short-term rental operations — check-in, channel manager, AI, and workers",
    description:
      "A family of integrated tools for short-term rental hosts: HostID for digital check-in and regulatory reporting (Questura, ISTAT) with OCR, a channel manager with Booking.com/Airbnb/Vrbo integrations and AI add-ons, external service coordination, and a workers marketplace in development.",
    year: "2025/26",
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
      sections: [
        {
          id: "modules",
          heading: "Platform Modules",
          variant: "modules",
          items: [
            {
              name: "HostID",
              description: "Digital guest check-in, OCR document scanning, and automated regulatory reporting to Questura and ISTAT. Available as Flutter mobile app and web interface.",
              status: "Active",
              statusType: "active",
            },
            {
              name: "Channel Manager",
              description: "Availability, reservation, and pricing synchronisation across Booking.com, Airbnb, and Vrbo via normalised platform adapters.",
              status: "Active",
              statusType: "active",
            },
            {
              name: "AI Add-ons",
              description: "Automated guest responses and dynamic pricing via n8n workflow orchestration and Python microservices. Host-controlled, with visibility and override before any automation affects live reservations.",
              status: "Active",
              statusType: "active",
            },
            {
              name: "Workers Marketplace",
              description: "Coordination layer for cleaning, linen, and maintenance services connecting hosts with vetted professionals and partner companies.",
              status: "In development",
              statusType: "pending",
            },
          ],
        },
        {
          id: "hostid",
          heading: "Featured Module — HostID",
          variant: "featured",
          intro:
            "HostID is the operational core of the platform, handling the complete digital guest check-in flow — from document scanning and OCR extraction through regulatory submission to Questura and ISTAT. Available as a Flutter mobile app for on-site check-in and as a web interface for property management.",
          list: [
            "OCR extraction from guest identity documents with field-level data validation",
            "Structured submission to Questura (police reporting) and ISTAT (statistical reporting) in their required formats",
            "Error handling for failed submissions or unreadable documents with host-visible feedback",
            "OCR pipeline isolated on a dedicated Python FastAPI microservice in Docker — independent from the main Express.js API",
          ],
          steps: [
            { title: "Scan", description: "Guest document captured on-site via Flutter mobile app or uploaded through the web interface." },
            { title: "Extract", description: "Dedicated OCR microservice processes the document and extracts identity fields." },
            { title: "Validate", description: "Extracted data checked for completeness and format compliance." },
            { title: "Submit", description: "Structured report dispatched to Questura and ISTAT with status feedback and error recovery." },
          ],
          mainVisual: {
            url: withStaticBasePath("/dettaglio_checkin.png"),
            alt: "HostID screen showing check-in detail",
            caption: "Check-in detail",
          },
          // Add a 4th item here later for document/OCR/validation when ready.
          galleryImages: [
            {
              url: withStaticBasePath("/home.png"),
              alt: "HostID home with active check-in and guest card",
            },
            {
              url: withStaticBasePath("/nuovo_checkin.png"),
              alt: "HostID new check-in screen",
            },
            {
              url: withStaticBasePath("/registrati.png"),
              alt: "HostID registration screen",
            },
          ],
          assets: [
            {
              type: "demo",
              label: "Interactive Demo",
              caption: "Full check-in walkthrough — in preparation",
            },
          ],
        },
        {
          id: "channel-manager",
          heading: "Channel Manager",
          content:
            "The channel manager maintains consistent availability, reservations, and pricing across Booking.com, Airbnb, and Vrbo through a set of normalised platform-specific adapters. Each adapter handles the diverging data models, API rate limits, and sync conflict patterns of its respective platform, translating everything into a shared internal representation. This normalised state layer is what allows cross-platform availability and pricing updates to remain consistent without requiring separate logic for each integration.",
        },
        {
          id: "ai-addons",
          heading: "AI Add-ons",
          content:
            "Guest response automation and dynamic pricing are implemented as modular add-ons, orchestrated through n8n workflows with Python microservices handling model integration. The architecture is designed to keep AI outputs auditable and under host control: no automation affects live reservations without host visibility and explicit override capability. This constraint shapes the entire add-on layer — workflows are built around checkpoints rather than fully autonomous execution.",
        },
        {
          id: "service-network",
          heading: "Service Network & Workers",
          list: [
            "External service APIs — integrations for cleaning, linen, and maintenance service providers are operational and in use.",
            "Workers Marketplace — the coordination marketplace connecting hosts with individual professionals and partner companies is currently in development.",
            "The marketplace design models service availability, job dispatching, and partner onboarding — with extensibility for the mix of individual professionals and existing service companies joining as partners.",
          ],
        },
        {
          id: "architecture",
          heading: "Platform Architecture",
          list: [
            "HostID: Flutter mobile + web frontend, Express.js API, PostgreSQL, API Gateway.",
            "OCR processing: dedicated Python FastAPI microservice, containerised in Docker.",
            "Channel Manager: separate module with platform-specific adapters for Booking.com, Airbnb, and Vrbo.",
            "AI Add-ons: n8n for workflow orchestration, Python microservices for model calls.",
            "Service integrations: standalone API integration points per external service provider.",
            "Infrastructure: Docker Compose for local and deployment orchestration.",
          ],
          assets: [
            {
              type: "diagram",
              caption: "Platform architecture overview — diagram coming soon",
            },
          ],
        },
      ],
    },
  },
  {
    slug: "finance-coach",
    title: "Finance Coach",
    subtitle: "Full-stack financial data and analytics platform",
    description:
      "A platform for importing financial statements, normalizing transaction events, and generating portfolio analytics dashboards for monitoring and visibility.",
    year: "2025",
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
    year: "2025/26",
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
    subtitle:
      "Full-stack realtime multiplayer platform with security and blockchain integration",
    description:
      "ft_transcendence is a full-stack multiplayer web platform built around a real-time Pong game with tournament management, role-based access, and blockchain-based result registration. The platform combines an Angular frontend, a Django backend with WebSocket-driven game logic, and a security-oriented infrastructure layer — delivering a production-grade architecture across every layer of the stack.",
    year: "2024",
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-indigo-100",
    tags: [
      "Angular",
      "TypeScript",
      "Django",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "Ethereum",
      "Sepolia",
    ],
    body: {
      overview:
        "ft_transcendence is a full-stack multiplayer web platform built around a real-time Pong game with tournament management, role-based access, and blockchain-based result registration. The platform combines an Angular frontend, a Django backend with WebSocket-driven game logic, and a security-oriented infrastructure layer — delivering a production-grade architecture across every layer of the stack.",
      overviewAssets: [
        {
          type: "image",
          url: withStaticBasePath("/images/Asset_1_Hero.jpg"),
          alt: "ft_transcendence running on monitor — Pong match display",
        },
      ],
      context:
        "The project was a 42 curriculum final assignment with deliberately broad scope: build a complete, deployable multiplayer platform meeting functional, security, and infrastructure requirements simultaneously. The combination of real-time gameplay, tournament logic, enterprise security patterns, and on-chain data registration made it a technically dense integration challenge with no room for shortcuts across layers.",
      contextAssets: [
        {
          type: "diagram",
          url: withStaticBasePath("/images/Asset_2_diagram.png"),
          alt: "Django-Redis-PostgreSQL architecture diagram",
          caption:
            "Backend architecture flow — Django Channels handles WebSocket game sessions, delegating real-time state to Redis as the channel layer; PostgreSQL persists relational data (users, tournaments, match results) while Redis manages ephemeral session state and pub/sub message routing between server processes.",
        },
      ],
      challenges: [
        {
          title: "Real-time gameplay and tournament flow",
          description:
            "Implementing multiplayer Pong with accurate, low-latency state synchronisation required a WebSocket-based game loop with asynchronous server-side logic and client-side interpolation. Tournament bracket progression had to remain consistent across concurrent matches and disconnection scenarios.",
          image: withStaticBasePath("/images/Asset_5_Realtime.png"),
        },
        {
          title: "Security-oriented infrastructure",
          description:
            "Meeting enterprise-grade security requirements meant integrating HashiCorp Vault for secrets management, ModSecurity as a web application firewall, TLS-enabled services throughout, and ELK Stack for observability — each requiring careful configuration to work together without degrading application performance.",
          image: withStaticBasePath("/images/Asset_4_Security.png"),
        },
        {
          title: "Blockchain result registration",
          description:
            "Persisting tournament outcomes on the Sepolia Ethereum testnet introduced transaction lifecycle handling — confirmation waiting, on-chain read/write latency, and smart contract data structure constraints — that required careful decoupling from the main application flow to avoid blocking user-facing operations.",
          image: withStaticBasePath("/images/Asset_3_Blockchain.png"),
        },
      ],
      approach:
        "Frontend built in Angular with TypeScript. Backend in Django using Django REST Framework for APIs and Django Channels for WebSocket-based game sessions. PostgreSQL for relational persistence, Redis for channel layer and session state. Docker Compose for full-stack local and deployment orchestration. Security layer composed of HashiCorp Vault, ModSecurity, and TLS-enforced service boundaries. ELK Stack for centralised log aggregation and observability.",
      approachCards: [
        { label: "Frontend",    value: "Angular, TypeScript" },
        { label: "Backend",     value: "Django, Channels" },
        { label: "Data",        value: "PostgreSQL, Redis" },
        { label: "Infra",       value: "Docker Compose" },
        { label: "Security",    value: "Vault, ModSecurity" },
        { label: "Blockchain",  value: "Ethereum, Sepolia" },
      ],
      outcome:
        "Complete platform delivered and functional across all requirement layers — real-time multiplayer, tournament management, security infrastructure, and blockchain integration. The project produced full-stack experience across frontend, backend, DevOps, and security domains within a single cohesive system.",
      sections: [
        {
          id: "ui-experience",
          heading: "User Interface & Experience",
          variant: "featured",
          intro:
            "A coherent design system built in Angular, focused on usability and cyberpunk aesthetics.",
          galleryImages: [
            { url: withStaticBasePath("/images/Asset_6.jpg"), alt: "ft_transcendence gameplay — Pong match with ape player" },
            { url: withStaticBasePath("/images/Asset_7.jpg"), alt: "ft_transcendence profile — Cat player stats and tournament history" },
            { url: withStaticBasePath("/images/Asset_8.jpg"), alt: "ft_transcendence settings — Profile and language configuration" },
            { url: withStaticBasePath("/images/Asset_9.jpg"), alt: "ft_transcendence tournament — Finals and semi-finals bracket" },
          ],
          caption: "Cinematic renders of the main interfaces projected onto quartz terminals.",
        },
      ],
    },
  },
];

const projectsIT: Project[] = [
  {
    slug: "host-operations-platform",
    title: "Host Operations Platform",
    subtitle:
      "Famiglia di micro-strumenti per la gestione degli affitti brevi — check-in, channel manager, AI e workers",
    description:
      "Una famiglia di strumenti integrati per host di affitti brevi: HostID per il check-in digitale e la reportistica normativa (Questura, ISTAT) con OCR, un channel manager con integrazioni Booking.com/Airbnb/Vrbo e add-on AI, coordinamento di servizi esterni e un marketplace per i lavoratori in sviluppo.",
    year: "2024",
    role: "Full Stack Developer",
    status: "in-progress",
    featured: true,
    coverColor: "bg-stone-200",
    tags: ["Flutter", "Express.js", "PostgreSQL", "Python", "FastAPI", "n8n", "Docker Compose"],
    body: {
      overview:
        "Host Operations Platform è una famiglia di micro-strumenti costruita attorno alla gestione operativa degli affitti brevi. HostID gestisce il check-in digitale degli ospiti, la scansione dei documenti tramite OCR e la reportistica automatizzata a Questura e ISTAT — disponibile come app web e mobile (Flutter). Un channel manager si integra con Booking.com, Airbnb e Vrbo per la sincronizzazione di disponibilità e prenotazioni, esteso con add-on AI per risposte automatizzate agli ospiti e pricing dinamico tramite workflow n8n e microservizi Python. I fornitori di servizi esterni — pulizie, biancheria, manutenzione — sono connessi tramite API dedicate. Un modulo workers è in sviluppo per funzionare come marketplace simile a Uber che mette in contatto host con professionisti qualificati e aziende partner.",
      context:
        "La gestione degli affitti brevi in Italia comporta obblighi normativi (segnalazione alle forze di polizia tramite Questura, invio di dati statistici ISTAT) oltre alla complessità operativa del coordinamento tra piattaforme di booking, ospiti e fornitori di servizi esterni — ciascuno gestito con strumenti separati. La piattaforma è stata costruita per consolidare questi workflow in un sistema strutturato, eliminando i passaggi manuali e riducendo le superfici di errore operativo.",
      challenges: [
        {
          title: "Conformità normativa e gestione dei documenti",
          description:
            "HostID doveva gestire l'estrazione OCR dai documenti d'identità, validare i dati estratti e inviare report strutturati sia alla Questura che all'ISTAT nei formati richiesti — in modo affidabile e con gestione chiara degli errori quando gli invii falliscono o i documenti non sono leggibili.",
        },
        {
          title: "Sincronizzazione del channel manager",
          description:
            "Mantenere disponibilità, prenotazioni e prezzi coerenti su Booking.com, Airbnb e Vrbo ha richiesto la costruzione di adapter di integrazione normalizzati per l'API di ciascuna piattaforma — gestendo rate limit, conflitti di sincronizzazione e modelli di dati divergenti senza perdere la fedeltà dello stato.",
        },
        {
          title: "Architettura degli add-on AI",
          description:
            "L'automazione delle risposte agli ospiti e il pricing dinamico sono stati implementati come add-on modulari con n8n per l'orchestrazione dei workflow e microservizi Python per l'integrazione dei modelli. L'architettura doveva mantenere gli output AI verificabili e controllabili — gli host avevano bisogno di visibilità e capacità di override prima che qualsiasi automazione influisse sulle prenotazioni live.",
        },
        {
          title: "Design del marketplace per i lavoratori",
          description:
            "Progettare un layer di coordinamento simile a Uber per servizi di pulizie, biancheria e manutenzione ha richiesto la modellazione di disponibilità, dispatching dei lavori e onboarding dei partner — mantenendo il sistema estensibile per il mix di professionisti individuali e aziende di servizi esistenti che si uniscono come partner.",
        },
      ],
      approach:
        "HostID costruito come app mobile Flutter e interfaccia web, supportato da un'API Express.js, database PostgreSQL e API Gateway. Elaborazione OCR gestita da un microservizio Python FastAPI dedicato in esecuzione in Docker. Channel manager costruito come modulo separato con adapter specifici per piattaforma per Booking.com, Airbnb e Vrbo. Add-on AI orchestrati tramite n8n con microservizi Python per le chiamate ai modelli. API dei servizi esterni sviluppate come punti di integrazione standalone. Modulo workers in progettazione e sviluppo attivo.",
      outcome:
        "HostID, channel manager e integrazioni API dei servizi esterni funzionali e in uso. Add-on AI operativi tramite workflow n8n. Modulo marketplace per i lavoratori in sviluppo. Mockup con demo interattiva pianificato per la presentazione nel portfolio.",
      sections: [
        {
          id: "modules",
          heading: "Moduli della Piattaforma",
          variant: "modules",
          items: [
            {
              name: "HostID",
              description: "Check-in digitale degli ospiti, scansione OCR dei documenti e reportistica normativa automatizzata verso Questura e ISTAT. Disponibile come app mobile Flutter e interfaccia web.",
              status: "Operativo",
              statusType: "active",
            },
            {
              name: "Channel Manager",
              description: "Sincronizzazione di disponibilità, prenotazioni e prezzi su Booking.com, Airbnb e Vrbo tramite adapter di piattaforma normalizzati.",
              status: "Operativo",
              statusType: "active",
            },
            {
              name: "AI Add-on",
              description: "Risposte automatizzate agli ospiti e pricing dinamico tramite orchestrazione workflow n8n e microservizi Python. Sotto controllo dell'host, con visibilità e possibilità di override prima che qualsiasi automazione influisca sulle prenotazioni live.",
              status: "Operativo",
              statusType: "active",
            },
            {
              name: "Workers Marketplace",
              description: "Layer di coordinamento per servizi di pulizie, biancheria e manutenzione che mette in contatto host con professionisti qualificati e aziende partner.",
              status: "In sviluppo",
              statusType: "pending",
            },
          ],
        },
        {
          id: "hostid",
          heading: "Modulo in Evidenza — HostID",
          variant: "featured",
          intro:
            "HostID è il nucleo operativo della piattaforma, e gestisce l'intero flusso di check-in digitale degli ospiti — dalla scansione OCR dei documenti all'invio normativo verso Questura e ISTAT. Disponibile come app mobile Flutter per il check-in in loco e come interfaccia web per la gestione della proprietà.",
          list: [
            "Estrazione OCR dai documenti d'identità degli ospiti con validazione a livello di campo",
            "Invio strutturato a Questura (segnalazione alle forze di polizia) e ISTAT (reportistica statistica) nei formati richiesti",
            "Gestione degli errori per invii falliti o documenti non leggibili con feedback visibile all'host",
            "Pipeline OCR isolata su un microservizio Python FastAPI dedicato in Docker — indipendente dall'API principale Express.js",
          ],
          steps: [
            { title: "Scansione", description: "Documento dell'ospite acquisito in loco tramite app Flutter o caricato via interfaccia web." },
            { title: "Estrazione", description: "Il microservizio OCR dedicato elabora il documento ed estrae i campi d'identità." },
            { title: "Validazione", description: "Dati estratti verificati per completezza e conformità al formato." },
            { title: "Invio", description: "Report strutturato inviato a Questura e ISTAT con feedback di stato e gestione degli errori." },
          ],
          mainVisual: {
            url: withStaticBasePath("/dettaglio_checkin.png"),
            alt: "Schermata HostID con dettaglio check-in",
            caption: "Dettaglio check-in",
          },
          // Qui puoi aggiungere in seguito un 4o elemento per documento/OCR/validazione.
          galleryImages: [
            {
              url: withStaticBasePath("/home.png"),
              alt: "Home HostID con check-in attivo e card ospite",
            },
            {
              url: withStaticBasePath("/nuovo_checkin.png"),
              alt: "Schermata Nuovo Check-in di HostID",
            },
            {
              url: withStaticBasePath("/registrati.png"),
              alt: "Schermata Registrati di HostID",
            },
          ],
          assets: [
            {
              type: "demo",
              label: "Demo Interattiva",
              caption: "Walkthrough completo del check-in — in preparazione",
            },
          ],
        },
        {
          id: "channel-manager",
          heading: "Channel Manager",
          content:
            "Il channel manager mantiene disponibilità, prenotazioni e prezzi coerenti su Booking.com, Airbnb e Vrbo attraverso un set di adapter normalizzati specifici per piattaforma. Ogni adapter gestisce i modelli di dati divergenti, i rate limit delle API e i pattern di conflitto di sincronizzazione della rispettiva piattaforma, traducendo tutto in una rappresentazione interna condivisa. Questo layer di stato normalizzato permette agli aggiornamenti di disponibilità e prezzi cross-platform di rimanere coerenti senza richiedere logica separata per ciascuna integrazione.",
        },
        {
          id: "ai-addons",
          heading: "AI Add-on",
          content:
            "L'automazione delle risposte agli ospiti e il pricing dinamico sono implementati come add-on modulari, orchestrati tramite workflow n8n con microservizi Python che gestiscono l'integrazione dei modelli. L'architettura è progettata per mantenere gli output AI verificabili e sotto controllo dell'host: nessuna automazione influisce sulle prenotazioni live senza visibilità dell'host e capacità di override esplicita. Questo vincolo forma l'intero layer degli add-on — i workflow sono costruiti attorno a checkpoint piuttosto che su esecuzione completamente autonoma.",
        },
        {
          id: "service-network",
          heading: "Rete di Servizi e Workers",
          list: [
            "API servizi esterni — le integrazioni per fornitori di pulizie, biancheria e manutenzione sono operative e in uso.",
            "Workers Marketplace — il marketplace di coordinamento che mette in contatto host con professionisti individuali e aziende partner è attualmente in sviluppo.",
            "Il design del marketplace modella disponibilità dei servizi, dispatching dei lavori e onboarding dei partner — con estensibilità per il mix di professionisti individuali e aziende di servizi esistenti che si uniscono come partner.",
          ],
        },
        {
          id: "architecture",
          heading: "Architettura della Piattaforma",
          list: [
            "HostID: frontend Flutter mobile + web, API Express.js, PostgreSQL, API Gateway.",
            "Elaborazione OCR: microservizio Python FastAPI dedicato, containerizzato in Docker.",
            "Channel Manager: modulo separato con adapter specifici per piattaforma per Booking.com, Airbnb e Vrbo.",
            "AI Add-on: n8n per l'orchestrazione dei workflow, microservizi Python per le chiamate ai modelli.",
            "Integrazioni di servizi: punti di integrazione API standalone per ciascun fornitore di servizi esterno.",
            "Infrastruttura: Docker Compose per l'orchestrazione locale e di deployment.",
          ],
        },
      ],
    },
  },
  {
    slug: "finance-coach",
    title: "Finance Coach",
    subtitle: "Piattaforma full-stack per dati finanziari e analitiche",
    description:
      "Una piattaforma per importare rendiconti finanziari, normalizzare gli eventi delle transazioni e generare dashboard di analisi del portafoglio per monitoraggio e visibilità.",
    year: "2024",
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-slate-200",
    tags: ["React", "Next.js", "Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "Docker Compose"],
    body: {
      overview:
        "Finance Coach è una piattaforma full-stack per importare rendiconti finanziari da più fonti, normalizzarli in un modello di eventi coerente e presentare analisi del portafoglio attraverso interfacce dashboard. Affronta il problema dei dati finanziari frammentati tra istituzioni e formati diversi — offrendo agli utenti una visione unificata dell'attività del loro portafoglio.",
      context:
        "I rendiconti finanziari di diverse istituzioni usano schemi inconsistenti, convenzioni di naming, formati di data e logica di categorizzazione diversi. Costruire una piattaforma affidabile ha richiesto di progettare attorno a queste inconsistenze a livello di dati — prima che potessero essere presentate analisi o visualizzazioni significative. L'obiettivo era una pipeline manutenibile dall'importazione grezza a eventi normalizzati fino alla visibilità dashboard.",
      challenges: [
        {
          title: "Normalizzazione dei dati tra formati diversi",
          description:
            "I rendiconti da fonti diverse richiedevano parser specifici per formato e un layer di normalizzazione condiviso che potesse gestire nomi di campo variabili, codifiche di date e categorie di transazione senza perdere la fedeltà alla sorgente.",
        },
        {
          title: "Design dell'interfaccia di analisi",
          description:
            "Tradurre i dati normalizzati in viste dashboard utili significava decidere quali aggregazioni e raggruppamenti fossero davvero significativi per il monitoraggio — non solo visualizzare i record, ma far emergere pattern a livello di portafoglio in forma utilizzabile.",
        },
        {
          title: "Integrazione full-stack",
          description:
            "Connettere il frontend Next.js con un backend Python FastAPI che gestisce ingestion, trasformazione e persistenza PostgreSQL ha richiesto un contratto API pulito e una gestione attenta dei flussi di dati asincroni nella pipeline di importazione.",
        },
      ],
      approach:
        "Frontend costruito con Next.js e componenti dashboard React. Backend in Python con FastAPI per il layer API, SQLAlchemy come ORM e PostgreSQL per la persistenza. Docker Compose utilizzato per la coerenza dell'ambiente di sviluppo locale. Ingestion e normalizzazione dei dati gestite in moduli di servizio dedicati, separati dal routing API per mantenere ogni layer testabile e sostituibile.",
      outcome:
        "Piattaforma core consegnata con importazione dei rendiconti, pipeline di normalizzazione e dashboard di analisi funzionali. L'architettura separa nettamente le responsabilità di ingestion, storage e presentazione — rendendola manutenibile e semplice da estendere con ulteriori sorgenti dati o viste analitiche.",
    },
  },
  {
    slug: "websites-showcase",
    title: "Corporate & Showcase Websites",
    subtitle: "Sviluppo frontend su più proprietà web",
    description:
      "Sviluppo frontend e consegna su più siti corporate e showcase — tra cui AtavicoLabs, IOOOTA, CODFOOD, Semylla e proprietà digitali correlate.",
    year: "2024",
    role: "Frontend Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-neutral-300",
    tags: ["React", "Next.js", "TypeScript", "HTML", "CSS"],
    body: {
      overview:
        "Una raccolta di progetti web frontend consegnati in diversi contesti aziendali, di prodotto e showcase. I siti includono AtavicoLabs, IOOOTA, CODFOOD, Semylla e ulteriori proprietà web — ciascuno con identità di design, strutture di contenuto e requisiti di consegna distinti.",
      context:
        "La consegna di siti web per più clienti e contesti studio ha richiesto esecuzione tecnica coerente attraverso requisiti di brand variabili. Il lavoro ha coperto dall'impostazione iniziale al deployment in produzione, includendo implementazione di layout responsive, sviluppo di componenti UI e integrazione dei contenuti — mantenendo i codebase manutenibili attraverso progetti paralleli.",
      challenges: [
        {
          title: "Coerenza in più contesti",
          description:
            "Ogni progetto aveva requisiti distinti di design e contenuto pur condividendo la stessa tecnologia sottostante. Mantenere codice pulito e manutenibile attraverso progetti paralleli richiedeva una chiara architettura di componenti e layout che si scalasse tra progetti senza creare coupling non necessario.",
        },
        {
          title: "Implementazione di layout responsive",
          description:
            "Tradurre accuratamente l'intento di design in implementazioni responsive richiedeva attenzione ai sistemi di spacing, alla gerarchia tipografica, al comportamento dei breakpoint e alla coerenza cross-device — in particolare per layout ricchi di contenuti.",
        },
        {
          title: "Workflow di consegna in produzione",
          description:
            "Gestire la consegna frontend su più progetti attivi in parallelo richiedeva struttura di progetto organizzata, processi di build affidabili e attenzione alla coerenza del deployment in diversi ambienti di hosting.",
        },
      ],
      approach:
        "Tutti i siti costruiti con React e Next.js in TypeScript per type safety e manutenibilità a lungo termine. Ogni progetto strutturato attorno a un modello di layout condiviso con componenti e contenuti specifici per sito. Focus su HTML semantico pulito, CSS responsive e output pronto per la produzione.",
      outcome:
        "Più siti consegnati e live in contesti aziendali, di prodotto e showcase. La base tecnologica condivisa ha mantenuto lo sviluppo efficiente mentre la struttura dei componenti ha consentito a ciascun sito di mantenere un'identità visiva distinta.",
    },
  },
  {
    slug: "ft-transcendence",
    title: "ft_transcendence",
    subtitle:
      "Piattaforma multiplayer realtime full-stack con sicurezza e integrazione blockchain",
    description:
      "ft_transcendence è una piattaforma web multiplayer full-stack costruita attorno a un gioco Pong in tempo reale con gestione dei tornei, accesso basato su ruoli e registrazione dei risultati su blockchain. La piattaforma combina un frontend Angular, un backend Django con logica di gioco via WebSocket e un layer infrastrutturale orientato alla sicurezza — garantendo un'architettura di livello produzione in ogni layer dello stack.",
    year: "2024",
    role: "Full Stack Developer",
    status: "completed",
    featured: true,
    coverColor: "bg-indigo-100",
    tags: [
      "Angular",
      "TypeScript",
      "Django",
      "WebSocket",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "Ethereum",
      "Sepolia",
    ],
    body: {
      overview:
        "ft_transcendence è una piattaforma web multiplayer full-stack costruita attorno a un gioco Pong in tempo reale con gestione dei tornei, accesso basato su ruoli e registrazione dei risultati su blockchain. La piattaforma combina un frontend Angular, un backend Django con logica di gioco via WebSocket e un layer infrastrutturale orientato alla sicurezza — garantendo un'architettura di livello produzione in ogni layer dello stack.",
      overviewAssets: [
        {
          type: "image",
          url: withStaticBasePath("/images/Asset_1_Hero.jpg"),
          alt: "ft_transcendence sul monitor — partita Pong in corso",
        },
      ],
      context:
        "Il progetto era l'assignment finale del curriculum 42 con uno scope deliberatamente ampio: costruire una piattaforma multiplayer completa e deployabile che soddisfacesse requisiti funzionali, di sicurezza e infrastrutturali simultaneamente. La combinazione di gameplay in tempo reale, logica dei tornei, pattern di sicurezza enterprise e registrazione on-chain dei dati l'ha reso una sfida di integrazione tecnicamente densa senza margine per scorciatoie in nessun layer.",
      contextAssets: [
        {
          type: "diagram",
          url: withStaticBasePath("/images/Asset_2_diagram.png"),
          alt: "Diagramma architetturale Django-Redis-PostgreSQL",
          caption:
            "Flusso architetturale backend — Django Channels gestisce le sessioni di gioco via WebSocket, delegando lo stato in tempo reale a Redis come channel layer; PostgreSQL persiste i dati relazionali (utenti, tornei, risultati delle partite) mentre Redis gestisce lo stato effimero delle sessioni e il routing pub/sub dei messaggi tra i processi server.",
        },
      ],
      challenges: [
        {
          title: "Gameplay realtime e flusso dei tornei",
          description:
            "Implementare Pong multiplayer con sincronizzazione dello stato accurata e a bassa latenza ha richiesto un game loop basato su WebSocket con logica asincrona server-side e interpolazione client-side. La progressione dei bracket del torneo doveva rimanere coerente tra partite concorrenti e scenari di disconnessione.",
          image: withStaticBasePath("/images/Asset_5_Realtime.png"),
        },
        {
          title: "Infrastruttura orientata alla sicurezza",
          description:
            "Soddisfare i requisiti di sicurezza enterprise ha richiesto l'integrazione di HashiCorp Vault per la gestione dei segreti, ModSecurity come web application firewall, servizi TLS-enabled ovunque e ELK Stack per l'osservabilità — ciascuno richiedendo una configurazione attenta per funzionare insieme senza degradare le prestazioni dell'applicazione.",
          image: withStaticBasePath("/images/Asset_4_Security.png"),
        },
        {
          title: "Registrazione dei risultati su blockchain",
          description:
            "Persistere i risultati dei tornei sulla testnet Sepolia di Ethereum ha introdotto la gestione del ciclo di vita delle transazioni — attesa delle conferme, latenza di lettura/scrittura on-chain e vincoli della struttura dati degli smart contract — che richiedeva un decoupling attento dal flusso principale dell'applicazione per evitare di bloccare le operazioni visibili all'utente.",
          image: withStaticBasePath("/images/Asset_3_Blockchain.png"),
        },
      ],
      approach:
        "Frontend costruito in Angular con TypeScript. Backend in Django con Django REST Framework per le API e Django Channels per le sessioni di gioco via WebSocket. PostgreSQL per la persistenza relazionale, Redis per il channel layer e lo stato delle sessioni. Docker Compose per l'orchestrazione full-stack locale e di deployment. Layer di sicurezza composto da HashiCorp Vault, ModSecurity e confini di servizio TLS-enforced. ELK Stack per l'aggregazione centralizzata dei log e l'osservabilità.",
      approachCards: [
        { label: "Frontend",   value: "Angular, TypeScript" },
        { label: "Backend",    value: "Django, Channels" },
        { label: "Dati",       value: "PostgreSQL, Redis" },
        { label: "Infra",      value: "Docker Compose" },
        { label: "Sicurezza",  value: "Vault, ModSecurity" },
        { label: "Blockchain", value: "Ethereum, Sepolia" },
      ],
      outcome:
        "Piattaforma completa consegnata e funzionale in tutti i layer dei requisiti — multiplayer in tempo reale, gestione dei tornei, infrastruttura di sicurezza e integrazione blockchain. Il progetto ha prodotto esperienza full-stack su frontend, backend, DevOps e domini di sicurezza all'interno di un unico sistema coerente.",
      sections: [
        {
          id: "ui-experience",
          heading: "Interfaccia Utente & Experience",
          variant: "featured",
          intro:
            "Un design system coerente sviluppato in Angular, focalizzato sull'usabilità e sull'estetica cyberpunk.",
          galleryImages: [
            { url: withStaticBasePath("/images/Asset_6.jpg"), alt: "ft_transcendence gameplay — partita Pong con il giocatore ape" },
            { url: withStaticBasePath("/images/Asset_7.jpg"), alt: "ft_transcendence profilo — statistiche e storico tornei del giocatore cat" },
            { url: withStaticBasePath("/images/Asset_8.jpg"), alt: "ft_transcendence impostazioni — configurazione profilo e lingua" },
            { url: withStaticBasePath("/images/Asset_9.jpg"), alt: "ft_transcendence torneo — bracket finali e semifinali" },
          ],
          caption: "Render cinematici delle interfacce principali proiettate su terminali di quarzo.",
        },
      ],
    },
  },
];

export function getProjects(locale: string): Project[] {
  return locale === "it" ? projectsIT : projectsEN;
}

export function getProjectBySlug(slug: string, locale: string): Project | undefined {
  return getProjects(locale).find((p) => p.slug === slug);
}

export function getFeaturedProjects(locale: string): Project[] {
  return getProjects(locale).filter((p) => p.featured);
}

// Default EN exports for generateStaticParams (slugs are locale-independent)
export const projects = projectsEN;
