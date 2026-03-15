import type { Dictionary } from "./en";

const it: Dictionary = {
  nav: {
    about: "Chi sono",
    projects: "Progetti",
    experience: "Esperienza",
    contact: "Contatti",
    openMenu: "Apri menu",
    closeMenu: "Chiudi menu",
    switchLang: "EN",
  },

  hero: {
    badge: "Disponibile — Preferibilmente in remoto",
    line1: "Design. Sviluppo.",
    line2: "",
    accent: "Continuità.",
    description:
      "Progetto e sviluppo interfacce, strumenti interni e sistemi digitali con attenzione a chiarezza, struttura e affidabilità.",
    proof:
      "React / Next.js / TypeScript · Interfacce prodotto · Workflow integrati via API",
    viewProjects: "Vedi i progetti",
    getInTouch: "Contatti",
  },

  intro: {
    label: "Background",
    p1: "Il Design del Prodotto mi ha dato un modo per leggere le interfacce oltre l’aspetto visivo: come guidano l’attenzione, strutturano le decisioni e si rompono quando la logica sottostante non regge.",
    p2: "Mi sono avvicinato al codice e allo sviluppo perché molte decisioni di prodotto vengono prese dopo il passaggio dal design allo sviluppo, proprio nel punto in cui la chiarezza si perde più facilmente. Volevo lavorare più vicino all’implementazione, dove struttura, comportamento e qualità vengono davvero definiti.",
    p3: "Da allora ho lavorato su piattaforme operative, tooling finanziario, automazione di workflow e sviluppo frontend per prodotti digitali diversi. Contesti diversi, ma lo stesso schema: le decisioni tecniche più vicine all’interfaccia sono spesso quelle con il maggiore impatto sul prodotto.",
  },

  selectedProjects: {
    label: "Lavori selezionati",
    heading: "Progetti",
    allProjects: "Tutti i progetti →",
    technologiesLabel: "Tecnologie",
    viewProject: "Vedi progetto:",
  },

  focusAreas: {
    label: "Come lavoro",
    heading: "Aree di focus",
    areas: [
      {
        title: "Sviluppo orientato al prodotto",
        description:
          "Parto dal problema reale di prodotto, non dal percorso di implementazione. Questo significa prendere decisioni strutturali in anticipo, evitare complessità che non serve all’utente e mantenere il modello dei componenti allineato al modello d’interazione — non solo al modello dei dati.",
      },
      {
        title: "Ingegneria frontend",
        description:
          "Il frontend è system design, non assemblaggio di UI. I confini dei componenti, la proprietà dello stato, la strategia di rendering, l’integrazione delle API e l’accessibilità sono decisioni architetturali — determinano come si comporta il prodotto, non solo come appare.",
      },
      {
        title: "Strumenti operativi",
        description:
          "Gli strumenti interni sono il luogo in cui molti prodotti hanno successo o falliscono silenziosamente. Dashboard, flussi amministrativi e sistemi di gestione meritano la stessa cura strutturale delle superfici rivolte al cliente — perché chi li usa svolge un lavoro che conta.",
      },
      {
        title: "Integrazione design–ingegneria",
        description:
          "Aver progettato prima di costruire cambia quello che noto durante l’implementazione. Le implicazioni di interazione, i problemi di gerarchia e le decisioni di spaziatura si leggono diversamente quando si è lavorato dall’altra parte del passaggio. Il divario tra esperienza pensata e prodotto rilasciato si chiude prima.",
      },
    ],
  },

  finalCTA: {
    badge: "In cerca",
    heading1: "Cerco un team che consideri",
    heading2: "qualità ingegneristica e qualità del prodotto",
    heading3: "parte dello stesso lavoro.",
    description:
      "Sto valutando ruoli Frontend e Full Stack — idealmente in un contesto orientato al prodotto dove gli ingegneri partecipano davvero a cosa si costruisce e perché. In remoto o a Bologna.",
    primary: "Inizia una conversazione",
    secondary: "Di più su di me",
  },

  about: {
    label: "Chi sono",
    headingLine1: "Prima ho progettato.",
    headingLine2: "Poi ho programmato.",
    headingAccent: "Continuo a pensare a entrambe le cose.",
    p1: "Ho studiato Product Design all’Accademia Poliarte di Ancona. Più della forma visiva, mi è rimasto il modo in cui struttura, gerarchia e flusso delle informazioni determinano se qualcosa funziona davvero.",
    p2: "Ho imparato a costruire software alla 42 Roma Luiss — un percorso peer-to-peer basato su progetti, senza lezioni frontali né curricolo formale, dove tutto si impara scrivendo codice reale con vincoli reali. Il passaggio è stato deliberato: molte delle scelte che incidono sull’esperienza utente accadono nel codice, non nei file di design.",
    p3: "Da allora ho lavorato nel frontend engineering in Leonardo S.p.A. e IOOOTA Srl, costruendo interfacce e funzionalità per prodotti web e mobile in team strutturati. In parallelo porto avanti AtavicoLabs, dove lavoro su sviluppo prodotto, tooling operativo e automazione dei workflow.",
    p4: "Cerco un ruolo Frontend o Full Stack in un team orientato al prodotto — un contesto in cui qualità dell’interfaccia, qualità del prodotto e qualità ingegneristica siano trattate come parte dello stesso lavoro.",
    stackLabel: "Stack",
    valuesLabel: "Come lavoro",
    ctaText:
      "Di solito studio con attenzione team e ruoli prima di scrivere. Se pensi che ci sia una buona compatibilità, mi farà piacere parlarne.",
    ctaButton: "Contattami",
    metaTitle: "Chi sono",
    metaDescription:
      "Sviluppatore Frontend e Full Stack con background nel Product Design. Disponibile per ruoli in remoto.",
  },

  experience: {
    label: "Background",
    heading: "Esperienza & Formazione",
    intro:
      "Una cronologia di dove ho lavorato, cosa ho costruito e della base che ho sviluppato prima di passare all’ingegneria.",
    workLabel: "Lavoro",
    educationLabel: "Formazione",
    ctaText:
      "Vuoi il quadro completo? Posso illustrarti progetti specifici, decisioni prese e il ragionamento dietro di esse.",
    ctaButton: "Contattami",
    metaTitle: "Esperienza",
    metaDescription:
      "Storico lavorativo, formazione e background professionale di Alessandro Tarsi — sviluppatore Frontend e Full Stack.",
  },

  projects: {
    label: "Lavori",
    heading: "Progetti selezionati",
    description:
      "Una selezione mirata di lavori tra interfacce prodotto, piattaforme operative, tooling finanziario e sistemi full-stack con componenti API, automazione e realtime.",
    allProjectsLabel: "Tutti i progetti",
    metaTitle: "Progetti",
    metaDescription:
      "Progetti selezionati nel frontend engineering, piattaforme full-stack, tooling operativo e applicazioni blockchain.",
  },

  projectDetail: {
    allProjects: "← Tutti i progetti",
    yearLabel: "Anno",
    roleLabel: "Ruolo",
    statusLabel: "Stato",
    sectionOverview: "Panoramica",
    sectionContext: "Contesto",
    sectionChallenges: "Sfide",
    sectionApproach: "Approccio",
    sectionOutcome: "Risultato",
    backToProjects: "← Torna a tutti i progetti",
    discussText: "Vuoi discutere di questo lavoro?",
    contactLink: "Contattami",
    notFoundTitle: "Progetto non trovato",
    stackLabel: "Stack",
    statusCompleted: "Completato",
    statusInProgress: "In corso",
    statusArchived: "Archiviato",
    prevProject: "Precedente",
    nextProject: "Successivo",
    githubLabel: "GitHub ↗",
    liveLabel: "Sito live ↗",
    demoLabel: "Demo ↗",
    githubAriaLabel: "Repository GitHub (si apre in una nuova scheda)",
    liveAriaLabel: "Sito live (si apre in una nuova scheda)",
    demoAriaLabel: "Demo (si apre in una nuova scheda)",
  },

  contact: {
    label: "Contatti",
    heading: "Contattami.",
    description:
      "Sto valutando ruoli Frontend e Full Stack. Se stai costruendo un team orientato al prodotto e pensi che ci sia una buona compatibilità, sono disponibile a parlarne — in remoto o a Bologna.",
    nameLabel: "Nome",
    namePlaceholder: "Il tuo nome",
    emailLabel: "Email",
    emailPlaceholder: "La tua email",
    messageLabel: "Messaggio",
    messagePlaceholder: "Di cosa vorresti parlare?",
    submitButton: "Invia messaggio",
    submittingButton: "Invio in corso…",
    sentLabel: "Inviato",
    sentTitle: "Messaggio ricevuto.",
    sentBody: "Ti risponderò entro uno o due giorni.",
    errorTitle: "Qualcosa è andato storto.",
    errorBody: "Il messaggio non è stato inviato. Riprova oppure scrivimi direttamente a alessandro.tarsi@proton.me",
    errorRetry: "Riprova",
    contactFormAriaLabel: "Modulo di contatto",
    metaTitle: "Contatti",
    metaDescription:
      "Contatta Alessandro Tarsi — disponibile per ruoli frontend e full stack, in remoto o a Bologna.",
  },

  notFound: {
    label: "404",
    heading: "Pagina non trovata",
    description:
      "Questa pagina non esiste o potrebbe essere stata spostata. Prova uno dei link qui sotto.",
    goHome: "Vai alla home",
    viewProjects: "Vedi i progetti",
    metaTitle: "Pagina non trovata",
  },

  footer: {
    navigationAriaLabel: "Navigazione footer",
  },
};

export default it;