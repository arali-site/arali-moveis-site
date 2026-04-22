export type Locale = "pt-BR" | "en";
export type PageKey = "home" | "projects" | "operation" | "about" | "contact";

export const defaultLocale: Locale = "pt-BR";

export const langAttrs: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  en: "en",
};

export const pagePaths: Record<PageKey, Record<Locale, string>> = {
  home: {
    "pt-BR": "/",
    en: "/en/",
  },
  projects: {
    "pt-BR": "/projetos/",
    en: "/en/projetos/",
  },
  operation: {
    "pt-BR": "/nossa-operacao/",
    en: "/en/nossa-operacao/",
  },
  about: {
    "pt-BR": "/sobre-nos/",
    en: "/en/sobre-nos/",
  },
  contact: {
    "pt-BR": "/contato/",
    en: "/en/contato/",
  },
};

export const dictionary = {
  "pt-BR": {
    common: {
      defaultDescription:
        "Arali — Engenharia Aplicada à Madeira. Soluções de alto padrão em marcenaria.",
      postalCode: "CEP",
    },
    nav: {
      projects: "PROJETOS",
      operation: "NOSSA OPERAÇÃO",
      about: "SOBRE NÓS",
      contact: "CONTATO",
    },
    header: {
      openMenu: "Abrir menu",
    },
    footer: {
      contact: "Contato",
      whatsapp: "Fale Conosco",
      instagram: "Acompanhe nosso Instagram",
      address: "Endereço",
      rights: "Todos os direitos reservados.",
    },
    home: {
      title: "Arali — Engenharia Aplicada à Madeira",
      heroAlt: "Projeto arquitetônico Arali",
      headline: ["ENGENHARIA", "APLICADA À", "MADEIRA"],
      intro: "Soluções de alto padrão em marcenaria para projetos nacionais e internacionais.",
      projectsCta: "Nossos Projetos",
      contactCta: "Fale conosco",
      stats: {
        years: "Anos de Mercado",
        employees: "Colaboradores",
        projects: "Projetos Entregues",
      },
      fsc: {
        imageAlt: "Sustentabilidade na Arali",
        title: "Manejo florestal certificado",
        learnMore: "Saiba mais sobre o FSC",
        operation: "Nossa operação",
      },
    },
    projects: {
      title: "Projetos — Arali",
      description:
        "Conheça os projetos da Arali. Soluções de alto padrão em marcenaria para projetos residenciais e comerciais.",
      heading: "Nossos Projetos",
      intro:
        "Cada projeto é único. Conheça alguns dos trabalhos que traduzem nossa paixão pela excelência em marcenaria.",
      back: "Voltar aos projetos",
      fallbackDescription: (title: string) => `Projeto ${title} — Arali`,
      labels: {
        location: "Local",
        architect: "Arquitetura",
        interiors: "Interiores",
      },
      photoAlt: (title: string, index: number) => `${title} — foto ${index}`,
    },
    operation: {
      title: "Nossa Operação — Arali",
      description:
        "Acompanhe a execução da Arali em tempo real. Registros da fábrica, equipe em operação e projetos em desenvolvimento.",
      heading: "Nossa Operação",
      intro: "Acompanhe a execução da Arali em tempo real.",
      subintro:
        "Atualizações contínuas da produção, com registros da fábrica, equipe em execução e projetos em desenvolvimento.",
      processTitle: "PROCESSO EM EXECUÇÃO",
      processCopy:
        "Registros contínuos da produção, com equipe em operação e projetos em desenvolvimento direto da fábrica.",
      instagramCta: "Acompanhe no Instagram",
      imageAlts: [
        "Equipe em operação na fábrica",
        "Processo de fabricação de móveis",
        "Marcenaria e produção",
        "Projetos em desenvolvimento",
      ],
    },
    about: {
      title: "Sobre Nós — Arali",
      description:
        "Conheça a história da Arali. Fundada em 2011, somos referência em marcenaria de alto padrão.",
      heroAlt: "Arali — Sobre Nós",
      heading: "Sobre Nós",
      aboutHeading: "Sobre a Arali",
      factoryAlt: "Fábrica Arali",
      structureHeading: "Estrutura e capacidade técnica",
      structureAlt: "Estrutura e capacidade técnica",
      teamHeading: "Equipe e execução",
      teamAlt: "Equipe Arali",
      missionVisionValues: "Missão, Visão e Valores",
      mission: "Missão",
      vision: "Visão",
      values: "Valores",
      documents: "Documentos",
      ethics: "Nosso Código de Ética e Conduta",
      transparency: "Relatório de Transparência e Igualdade Salarial",
      downloadPdf: "Baixar PDF",
    },
    contact: {
      title: "Contato — Arali",
      description:
        "Entre em contato com a Arali. Fale conosco por telefone, WhatsApp ou visite nosso escritório.",
      heading: "Fale Conosco",
      intro: "Entre em contato para conhecer nossas soluções em marcenaria de alto padrão.",
      formTitle: "Envie uma mensagem",
      labels: {
        name: "Seu nome",
        phone: "Telefone",
        email: "E-mail *",
        subject: "Assunto *",
        message: "Mensagem *",
      },
      placeholders: {
        name: "Nome completo",
        phone: "(00) 00000-0000",
        email: "seu@email.com",
        subject: "Assunto da mensagem",
        message: "Digite aqui a sua mensagem...",
      },
      submit: "Enviar mensagem",
      infoTitle: "Informações de contato",
      address: "Endereço",
      instagram: "Acompanhe nosso Instagram",
      mapTitle: "Localização Arali",
    },
  },
  en: {
    common: {
      defaultDescription:
        "Arali — Engineering Applied to Wood. High-end millwork solutions.",
      postalCode: "Postal code",
    },
    nav: {
      projects: "PROJECTS",
      operation: "OUR OPERATION",
      about: "ABOUT US",
      contact: "CONTACT",
    },
    header: {
      openMenu: "Open menu",
    },
    footer: {
      contact: "Contact",
      whatsapp: "Contact Us",
      instagram: "Follow us on Instagram",
      address: "Address",
      rights: "All rights reserved.",
    },
    home: {
      title: "Arali — Engineering Applied to Wood",
      heroAlt: "Arali architectural project",
      headline: ["ENGINEERING", "APPLIED TO", "WOOD"],
      intro: "High-end millwork solutions for national and international projects.",
      projectsCta: "Our Projects",
      contactCta: "Contact us",
      stats: {
        years: "Years in Business",
        employees: "Employees",
        projects: "Projects Delivered",
      },
      fsc: {
        imageAlt: "Sustainability at Arali",
        title: "Certified forest management",
        learnMore: "Learn more about FSC",
        operation: "Our operation",
      },
    },
    projects: {
      title: "Projects — Arali",
      description:
        "Explore Arali projects. High-end millwork solutions for residential and commercial projects.",
      heading: "Our Projects",
      intro:
        "Every project is unique. Explore selected work that reflects our commitment to excellence in millwork.",
      back: "Back to projects",
      fallbackDescription: (title: string) => `${title} project — Arali`,
      labels: {
        location: "Location",
        architect: "Architecture",
        interiors: "Interiors",
      },
      photoAlt: (title: string, index: number) => `${title} — photo ${index}`,
    },
    operation: {
      title: "Our Operation — Arali",
      description:
        "Follow Arali's execution in real time. Records from the factory, team in operation, and projects in development.",
      heading: "Our Operation",
      intro: "Follow Arali's execution in real time.",
      subintro:
        "Continuous production updates with records from the factory, the team in execution, and projects in development.",
      processTitle: "WORK IN PROGRESS",
      processCopy:
        "Continuous production records, with the team in operation and projects in development straight from the factory.",
      instagramCta: "Follow on Instagram",
      imageAlts: [
        "Team working in the factory",
        "Furniture manufacturing process",
        "Millwork and production",
        "Projects in development",
      ],
    },
    about: {
      title: "About Us — Arali",
      description:
        "Learn about Arali's history. Founded in 2011, we are a reference in high-end millwork.",
      heroAlt: "Arali — About Us",
      heading: "About Us",
      aboutHeading: "About Arali",
      factoryAlt: "Arali factory",
      structureHeading: "Structure and technical capacity",
      structureAlt: "Structure and technical capacity",
      teamHeading: "Team and execution",
      teamAlt: "Arali team",
      missionVisionValues: "Mission, Vision and Values",
      mission: "Mission",
      vision: "Vision",
      values: "Values",
      documents: "Documents",
      ethics: "Our Code of Ethics and Conduct",
      transparency: "Transparency and Equal Pay Report",
      downloadPdf: "Download PDF",
    },
    contact: {
      title: "Contact — Arali",
      description:
        "Contact Arali. Reach us by phone, WhatsApp, or visit our office.",
      heading: "Contact Us",
      intro: "Get in touch to learn more about our high-end millwork solutions.",
      formTitle: "Send a message",
      labels: {
        name: "Your name",
        phone: "Phone",
        email: "Email *",
        subject: "Subject *",
        message: "Message *",
      },
      placeholders: {
        name: "Full name",
        phone: "+55 00 00000-0000",
        email: "your@email.com",
        subject: "Message subject",
        message: "Type your message here...",
      },
      submit: "Send message",
      infoTitle: "Contact information",
      address: "Address",
      instagram: "Follow us on Instagram",
      mapTitle: "Arali location",
    },
  },
};

export function getDictionary(locale: Locale) {
  return dictionary[locale];
}

export function getPagePath(page: PageKey, locale: Locale) {
  return pagePaths[page][locale];
}

export function getProjectPath(locale: Locale, slug: string) {
  return `${pagePaths.projects[locale]}${slug}/`;
}

export function getAlternatePath(pathname: string, locale: Locale) {
  if (locale === "en") {
    const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
    return stripped || "/";
  }

  return pathname === "/" ? "/en/" : `/en${pathname}`;
}

export function getNavLinks(locale: Locale) {
  const nav = dictionary[locale].nav;

  return [
    { label: nav.projects, href: pagePaths.projects[locale] },
    { label: nav.operation, href: pagePaths.operation[locale] },
    { label: nav.about, href: pagePaths.about[locale] },
    { label: nav.contact, href: pagePaths.contact[locale] },
  ];
}

export function localizeProjectData<
  T extends {
    title: string;
    location?: string;
    description?: string;
    category?: string;
    en?: {
      title?: string;
      location?: string;
      description?: string;
      category?: string;
    };
  },
>(project: T, locale: Locale) {
  const translation = locale === "en" ? project.en : undefined;

  return {
    ...project,
    title: translation?.title ?? project.title,
    location: translation?.location ?? project.location,
    description: translation?.description ?? project.description,
    category: translation?.category ?? project.category,
  };
}
