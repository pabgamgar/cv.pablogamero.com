export type Locale = "en" | "es";

export interface ContactLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  name: string;
  links: ContactLink[];
}

export interface PageMeta {
  title: string;
  desc: string;
  kw: string;
  subtitle: string;
  canon: string;
  alt: string;
}

export interface SectionLabels {
  professionalSummary: string;
  workExperience: string;
  projects: string;
  skills: string;
  languages: string;
  education: string;
}

export interface WorkEntry {
  role: string;
  company: string;
  date: string;
  bullets: string[];
}

export interface ProjectEntry {
  name: string;
  tagline: string;
  date: string;
  bullets: string[];
}

export interface SkillCategory {
  category: string;
  items: string;
}

export interface LanguageEntry {
  language: string;
  level: string;
}

export interface EducationEntry {
  institution: string;
  date: string;
  description: string;
  note?: string;
}

export interface CVData {
  meta: PageMeta;
  labels: SectionLabels;
  summary: string;
  workExperience: WorkEntry[];
  projects: ProjectEntry[];
  skills: SkillCategory[];
  languages: LanguageEntry[];
  education: EducationEntry[];
}

// ── Bilingual types: en/es side by side ─────────────────────────

type Bilingual<T> = { en: T; es: T };

interface BilingualProject {
  name: string;
  en: { tagline: string; date: string; bullets: string[] };
  es: { tagline: string; date: string; bullets: string[] };
}

interface BilingualWork {
  company: string;
  en: { role: string; date: string; bullets: string[] };
  es: { role: string; date: string; bullets: string[] };
}

interface BilingualSkill {
  category: Bilingual<string>;
  items: string;
}

interface BilingualLanguage {
  en: { language: string; level: string };
  es: { language: string; level: string };
}

interface BilingualEducation {
  en: { institution: string; date: string; description: string; note?: string };
  es: { institution: string; date: string; description: string; note?: string };
}

// ── Contact (shared) ────────────────────────────────────────────

export const contact: ContactInfo = {
  name: "Pablo Gamero",
  links: [
    { label: "+34 601159109", href: "tel:+34601159109" },
    { label: "hola@pablogamero.com", href: "mailto:hola@pablogamero.com" },
    { label: "pablogamero.com", href: "https://pablogamero.com" },
    { label: "github.com/pabgamgar", href: "https://github.com/pabgamgar" },
  ],
};

// ── Meta ────────────────────────────────────────────────────────

const meta: Bilingual<PageMeta> = {
  en: {
    title: "Pablo Gamero's CV",
    desc: "CV",
    kw: "CV, Curriculum Vitae, Resume",
    subtitle:
      "Software developer focused on solving specific problems for businesses and individuals",
    canon: "https://cv.pablogamero.com",
    alt: "https://cv.pablogamero.com/es",
  },
  es: {
    title: "CV de Pablo Gamero",
    desc: "CV",
    kw: "CV, Currículum Vitae, Currículum, Curriculum",
    subtitle:
      "Desarrollador de software enfocado en resolver problemas específicos para empresas y personas",
    canon: "https://cv.pablogamero.com/es",
    alt: "https://cv.pablogamero.com",
  },
};

// ── Section labels ──────────────────────────────────────────────

const labels: Bilingual<SectionLabels> = {
  en: {
    professionalSummary: "Professional Summary",
    workExperience: "Work Experience",
    projects: "Projects",
    skills: "Skills",
    languages: "Languages",
    education: "Education",
  },
  es: {
    professionalSummary: "Resumen Profesional",
    workExperience: "Experiencia Laboral",
    projects: "Proyectos",
    skills: "Skills",
    languages: "Idiomas",
    education: "Educación",
  },
};

// ── Summary ─────────────────────────────────────────────────────

const summary: Bilingual<string> = {
  en: "4th-year Computer Science student with experience in web software and mobile application development, focused on creating solutions that solve specific problems for businesses and individuals.",
  es: "Estudiante de 4º de Ingeniería Informática con experiencia en desarrollo de software web y aplicaciones móviles, enfocado en crear soluciones que resuelven problemas específicos de empresas y personas.",
};

// ── Work experience ─────────────────────────────────────────────

const workExperience: BilingualWork[] = [
  {
    company: "REEM",
    en: {
      role: "Freelance Developer",
      date: "2023 – Present",
      bullets: [
        "Development and maintenance of the public website (reem.es), creating an information platform about the network's research projects.",
        "Design and development of the private website (miembros.reem.es), used as an information hub for research teams nationwide.",
        "Development of a mobile app mirroring the private website's content, enabling researchers to access information more easily and receive push notifications.",
        "Act as the sole developer, managing the full development cycle.",
      ],
    },
    es: {
      role: "Desarrollador Freelance",
      date: "2023 – Actualidad",
      bullets: [
        "Desarrollo y mantenimiento de la web pública (reem.es), creando una plataforma informativa sobre los proyectos de investigación de la red.",
        "Diseño y desarrollo de la web privada (miembros.reem.es), utilizada como centro de información para equipos de investigación a nivel nacional.",
        "Desarrollo de una app móvil con el mismo contenido que la web privada, facilitando el acceso a la información y la recepción de notificaciones push.",
        "Actúo como único desarrollador, gestionando el ciclo completo.",
      ],
    },
  },
];

// ── Projects ────────────────────────────────────────────────────

const projects: BilingualProject[] = [
  {
    name: "CareDose",
    en: {
      tagline: "Medication reminders and family sharing",
      date: "2026 – Beta",
      bullets: [
        "iOS app to track medication, appointments, dose history, and optional caregiver sharing.",
        "Includes reminders, low-stock alerts, and family plans so caregivers can stay in the loop.",
        "<span class='bold'>Stack:</span> Flutter, Firebase (FCM, Firestore, Auth), Cloudflare (Workers)",
      ],
    },
    es: {
      tagline: "Recordatorios de medicación y seguimiento familiar",
      date: "2026 – Beta",
      bullets: [
        "App iOS para seguimiento de medicación, citas médicas, historial de dosis y compartición opcional con cuidadores.",
        "Incluye recordatorios, alertas de stock bajo y planes familiares para que los cuidadores estén al día.",
        "<span class='bold'>Stack:</span> Flutter, Firebase (FCM, Firestore, Auth), Cloudflare (Workers)",
      ],
    },
  },
  {
    name: "Submoney",
    en: {
      tagline: "Subscription and recurring payments tracker",
      date: "2026",
      bullets: [
        "Mobile app that tells you the exact balance to keep in your bank account for your subscriptions — updated daily.",
        "Features daily balance tracking, annual spend analytics, payment calendar, home screen widgets, and trial period tracking.",
        "<span class='bold'>Stack:</span> Flutter.",
      ],
    },
    es: {
      tagline: "Seguimiento de suscripciones y pagos recurrentes",
      date: "2026",
      bullets: [
        "App móvil que indica el saldo exacto a mantener en tu cuenta bancaria para tus suscripciones — actualizado a diario.",
        "Incluye seguimiento diario del saldo, analíticas anuales de gasto, calendario de pagos, widgets y seguimiento de periodos de prueba.",
        "<span class='bold'>Stack:</span> Flutter.",
      ],
    },
  },
  {
    name: "Dibs",
    en: {
      tagline: "Personal debts and IOUs tracker",
      date: "2025",
      bullets: [
        "Mobile app to manage debts easily, with reminders and visual progress tracking.",
        "Designed to help users maintain financial control in their daily lives.",
        "<span class='bold'>Stack:</span> Flutter.",
      ],
    },
    es: {
      tagline: "App de finanzas personales",
      date: "2025",
      bullets: [
        "Aplicación móvil para gestionar deudas de manera simple, con recordatorios y seguimiento visual del progreso.",
        "Diseñada para ayudar a usuarios a tener control financiero en su día a día",
        "<span class='bold'>Stack:</span> Flutter.",
      ],
    },
  },
  {
    name: "Pubmefy",
    en: {
      tagline: "Scientific publication manager and CV builder",
      date: "In development",
      bullets: [
        "Tool to automate the creation and updating of scientific CVs in official formats (CVA, CVN).",
        "Includes a web app and a Chrome extension to auto-complete FECYT forms.",
        "<span class='bold'>Stack:</span> Next.js, TypeScript, Clerk, Convex, Cloudflare (Workers).",
      ],
    },
    es: {
      tagline: "Gestor de publicaciones científicas y generador de CV",
      date: "En desarrollo",
      bullets: [
        "Aplicación web que convierte las publicaciones dispersas de un investigador en currículums académicos preparados para procesos de evaluación.",
        "Importa publicaciones desde ORCID, PubMed, SciELO, BibTeX y RIS; detecta metadatos ausentes o sospechosos, como DOI, factores de impacto y cuartiles; y genera distintos CV adaptados a formatos específicos —FECYT, Vancouver y APA—, con exportación a DOCX, PDF, BibTeX y RIS.",
        "<span class='bold'>Stack:</span> Next.js, TypeScript, Clerk, Convex, Cloudflare (Workers).",
      ],
    },
  },
  // {
  //   name: "DayKeeper",
  //   en: {
  //     tagline: "Smart journaling app",
  //     date: "2025 – In development",
  //     bullets: [
  //       'Personal diary app that allows users to record entries and ask AI questions ("What did I do last week?").',
  //       "Developed for iOS (Swift, Core Data, CloudKit).",
  //       "Inspired by Apple Journal, with mood and habit tracking features.",
  //     ],
  //   },
  //   es: {
  //     tagline: "App de journaling inteligente",
  //     date: "2025 – En desarrollo",
  //     bullets: [
  //       'Aplicación de diario personal que permite registrar entradas y hacer preguntas a la IA ("¿Qué hice la semana pasada?").',
  //       "Desarrollada con iOS (Swift, Core Data, CloudKit).",
  //       "Inspirada en Apple Journal, con funcionalidades de análisis de estado de ánimo y hábitos.",
  //     ],
  //   },
  // },
  // {
  //   name: "Omnia",
  //   en: {
  //     tagline: "Tech consultancy",
  //     date: "2024 – Active",
  //     bullets: [
  //       "Startup focused on identifying daily problems in small businesses and proposing digital solutions.",
  //       "Projects include web development, automation, and social media strategy.",
  //     ],
  //   },
  //   es: {
  //     tagline: "Consultoría tecnológica",
  //     date: "2024 – En desarrollo",
  //     bullets: [
  //       "Startup enfocada en identificar problemas diarios de empresas pequeñas y proponer soluciones digitales.",
  //       "Proyectos de desarrollo web, automatización y estrategia en redes sociales.",
  //     ],
  //   },
  // },
];

// ── Skills ──────────────────────────────────────────────────────

const skills: BilingualSkill[] = [
  {
    category: { en: "Programming Languages", es: "Lenguajes de Programación" },
    items: "Python, Java, JavaScript, TypeScript, HTML, CSS, SQL",
  },
  {
    category: { en: "Frameworks and Libraries", es: "Frameworks y Librerías" },
    items: "React, Next.js, Flutter, Astro, React Native",
  },
  {
    category: { en: "Databases and Cloud", es: "Bases de datos y Cloud" },
    items: "Firebase, Supabase, MySQL, PostgreSQL, MariaDB",
  },
  {
    category: { en: "Tools and Platforms", es: "Herramientas y Plataformas" },
    items:
      "Git, GitHub, Docker, Vercel, Cloudflare, Claude Code, Figma, WordPress",
  },
];

// ── Languages ───────────────────────────────────────────────────

const languages: BilingualLanguage[] = [
  {
    en: { language: "Spanish", level: "Native" },
    es: { language: "Español", level: "Nativo" },
  },
  {
    en: { language: "English", level: "C1 (CAE)" },
    es: { language: "Inglés", level: "C1 (CAE)" },
  },
  {
    en: { language: "French", level: "B2 (DELF)" },
    es: { language: "Francés", level: "B2 (DELF)" },
  },
];

// ── Education ───────────────────────────────────────────────────

const education: BilingualEducation[] = [
  {
    en: {
      institution:
        "School of Computer Engineering (ETSII), University of Seville",
      date: "2022 – Present",
      description:
        "Bachelor's Degree in Computer Engineering – IT Technologies",
    },
    es: {
      institution:
        "Escuela Superior de Ingeniería Informática (ETSII), Universidad de Sevilla",
      date: "2022 – Actualidad",
      description: "Grado en Ingeniería Informática – Tecnologías Informáticas",
    },
  },
  {
    en: {
      institution:
        "École Polytechnique Fédérale de Lausanne (EPFL), Switzerland",
      date: "2020 – 2022",
      description: "Bachelor's in Computer Science",
      note: "not completed, transferred to University of Seville",
    },
    es: {
      institution: "École Polytechnique Fédérale de Lausanne (EPFL), Suiza",
      date: "2020 – 2022",
      description: "Grado en Informática",
      note: "no finalizado, traslado a la Universidad de Sevilla",
    },
  },
  {
    en: {
      institution: "International School San Francisco de Paula, Seville",
      date: "2018 – 2020",
      description:
        "International Baccalaureate – Engineering and Architecture National Baccalaureate – Engineering and Architecture",
    },
    es: {
      institution: "Colegio Internacional San Francisco de Paula, Sevilla",
      date: "2018 – 2020",
      description:
        "Bachillerato Internacional – Ingeniería y Arquitectura Bachillerato Nacional – Ingeniería y Arquitectura",
    },
  },
];

// ── Build locale-specific CVData (keeps page API unchanged) ─────

function buildCV(locale: Locale): CVData {
  return {
    meta: meta[locale],
    labels: labels[locale],
    summary: summary[locale],
    workExperience: workExperience.map((w) => ({
      role: w[locale].role,
      company: w.company,
      date: w[locale].date,
      bullets: w[locale].bullets,
    })),
    projects: projects.map((p) => ({
      name: p.name,
      tagline: p[locale].tagline,
      date: p[locale].date,
      bullets: p[locale].bullets,
    })),
    skills: skills.map((s) => ({
      category: s.category[locale],
      items: s.items,
    })),
    languages: languages.map((l) => l[locale]),
    education: education.map((e) => e[locale]),
  };
}

export const cv: Record<Locale, CVData> = {
  en: buildCV("en"),
  es: buildCV("es"),
};
