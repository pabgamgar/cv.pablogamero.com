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

export interface BilingualProject {
  name: string;
  en: { tagline: string; date: string; bullets: string[] };
  es: { tagline: string; date: string; bullets: string[] };
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

export const projects: BilingualProject[] = [
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
      tagline: "SaaS for researchers",
      date: "2024 – In development",
      bullets: [
        "Tool to automate the creation and updating of scientific CVs in official formats (CVA, CVN).",
        "Includes a web app and a Chrome extension to auto-complete FECYT forms.",
        "<span class='bold'>Stack:</span> React, Supabase, Chrome Extensions API.",
      ],
    },
    es: {
      tagline: "SaaS para investigadores",
      date: "2024 – En desarrollo",
      bullets: [
        "Herramienta para automatizar la creación y actualización de CVs científicos en formatos oficiales (CVA, CVN).",
        "Incluye web app y extensión de Chrome para autocompletar formularios del FECYT.",
        "<span class='bold'>Stack:</span> React, Supabase, Chrome Extensions API.",
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

function getProjects(locale: Locale): ProjectEntry[] {
  return projects.map((p) => ({
    name: p.name,
    date: p[locale].date,
    tagline: p[locale].tagline,
    bullets: p[locale].bullets,
  }));
}

export const contact: ContactInfo = {
  name: "Pablo Gamero",
  links: [
    { label: "+34 601159109", href: "tel:+34601159109" },
    { label: "hola@pablogamero.com", href: "mailto:hola@pablogamero.com" },
    { label: "pablogamero.com", href: "https://pablogamero.com" },
    { label: "github.com/pabgamgar", href: "https://github.com/pabgamgar" },
  ],
};

export const cv: Record<Locale, CVData> = {
  en: {
    meta: {
      title: "Pablo Gamero's CV",
      desc: "CV",
      kw: "CV, Curriculum Vitae, Resume",
      subtitle:
        "Software developer focused on solving specific problems for businesses and individuals",
      canon: "https://cv.pablogamero.com",
      alt: "https://cv.pablogamero.com/es",
    },
    labels: {
      professionalSummary: "Professional Summary",
      workExperience: "Work Experience",
      projects: "Projects",
      skills: "Skills",
      languages: "Languages",
      education: "Education",
    },
    summary:
      "4th-year Computer Science student with experience in web software and mobile application development, focused on creating solutions that solve specific problems for businesses and individuals.",
    workExperience: [
      {
        role: "Freelance Developer",
        company: "Spanish Multiple Sclerosis Network",
        date: "2023 – Present",
        bullets: [
          "Development and maintenance of the public website (reem.es), creating an information platform about the network's research projects.",
          "Design and development of the private website (miembros.reem.es), used as an information hub for research teams nationwide.",
          "Act as the sole developer, managing the full development cycle.",
        ],
      },
    ],
    projects: getProjects("en"),
    skills: [
      {
        category: "Programming Languages",
        items: "Python, Java, JavaScript, TypeScript, HTML, CSS, SQL",
      },
      {
        category: "Frameworks and Libraries",
        items: "React, Next.js, Flutter, Astro, React Native",
      },
      {
        category: "Databases and Cloud",
        items: "Firebase, Supabase, MySQL, PostgreSQL, MariaDB",
      },
      {
        category: "Tools and Platforms",
        items: "Git, GitHub, Docker, Vercel, Cloudflare, WordPress, Figma",
      },
    ],
    languages: [
      { language: "Spanish", level: "Native" },
      { language: "English", level: "C1 (CAE)" },
      { language: "French", level: "B2 (DELF)" },
    ],
    education: [
      {
        institution:
          "School of Computer Engineering (ETSII), University of Seville",
        date: "2022 – Present",
        description:
          "Bachelor's Degree in Computer Engineering – IT Technologies",
      },
      {
        institution:
          "École Polytechnique Fédérale de Lausanne (EPFL), Switzerland",
        date: "2020 – 2022",
        description: "Bachelor's in Computer Science",
        note: "not completed, transferred to University of Seville",
      },
      {
        institution: "International School San Francisco de Paula, Seville",
        date: "2018 – 2020",
        description:
          "International Baccalaureate – Engineering and Architecture National Baccalaureate – Engineering and Architecture",
      },
    ],
  },
  es: {
    meta: {
      title: "CV de Pablo Gamero",
      desc: "CV",
      kw: "CV, Currículum Vitae, Currículum, Curriculum",
      subtitle:
        "Desarrollador de software enfocado en resolver problemas específicos para empresas y personas",
      canon: "https://cv.pablogamero.com/es",
      alt: "https://cv.pablogamero.com",
    },
    labels: {
      professionalSummary: "Resumen Profesional",
      workExperience: "Experiencia Laboral",
      projects: "Proyectos",
      skills: "Skills",
      languages: "Idiomas",
      education: "Educación",
    },
    summary:
      "Estudiante de 4º de Ingeniería Informática con experiencia en desarrollo de software web y aplicaciones móviles, enfocado en crear soluciones que resuelven problemas específicos de empresas y personas.",
    workExperience: [
      {
        role: "Desarrollador Freelance",
        company: "Red Española de Esclerosis Múltiple",
        date: "2023 – Actualidad",
        bullets: [
          "Desarrollo y mantenimiento de la web pública (reem.es), creando una plataforma informativa sobre los proyectos de investigación de la red.",
          "Diseño y desarrollo de la web privada (miembros.reem.es), utilizada como centro de información para equipos de investigación a nivel nacional.",
          "Actúo como único desarrollador, gestionando el ciclo completo.",
        ],
      },
    ],
    projects: getProjects("es"),
    skills: [
      {
        category: "Lenguajes de Programación",
        items: "Python, Java, JavaScript, TypeScript, HTML, CSS, SQL",
      },
      {
        category: "Frameworks y Librerías",
        items: "React, Next.js, Flutter, Astro, React Native",
      },
      {
        category: "Bases de datos y Cloud",
        items: "Firebase, Supabase, MySQL, PostgreSQL, MariaDB",
      },
      {
        category: "Herramientas y Plataformas",
        items: "Git, GitHub, Docker, Vercel, Cloudflare, WordPress, Figma",
      },
    ],
    languages: [
      { language: "Español", level: "Nativo" },
      { language: "Inglés", level: "C1 (CAE)" },
      { language: "Francés", level: "B2 (DELF)" },
    ],
    education: [
      {
        institution:
          "Escuela Superior de Ingeniería Informática (ETSII), Universidad de Sevilla",
        date: "2022 – Actualidad",
        description:
          "Grado en Ingeniería Informática – Tecnologías Informáticas",
      },
      {
        institution: "École Polytechnique Fédérale de Lausanne (EPFL), Suiza",
        date: "2020 – 2022",
        description: "Grado en Informática",
        note: "no finalizado, traslado a la Universidad de Sevilla",
      },
      {
        institution: "Colegio Internacional San Francisco de Paula, Sevilla",
        date: "2018 – 2020",
        description:
          "Bachillerato Internacional – Ingeniería y Arquitectura Bachillerato Nacional – Ingeniería y Arquitectura",
      },
    ],
  },
};
