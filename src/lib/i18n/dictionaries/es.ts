/**
 * Diccionario canónico en español. Fuente de la verdad para el tipo
 * `Dictionary`: el resto de idiomas debe cumplir esta misma estructura.
 * Archivo >150 líneas justificado: concentra todo el texto de la UI en un
 * único punto de edición para facilitar la revisión por locales.
 */

export const dictionary = {
  site: {
    brand: {
      tagline:
        "Despacho especializado en extranjería, nacionalidad y residencia en España.",
      organizationDescription:
        "Eon Legal ofrece asesoría jurídica integral en extranjería: arraigo social, nacionalidad española, visados, reagrupación familiar y trámites ante la DGT. Atención personalizada en A Coruña y en toda España.",
    },
    header: {
      navAriaLabel: "Navegación principal",
      nav: {
        services: "Servicios",
        process: "Proceso",
        faq: "Preguntas",
      },
      cta: "Consulta inicial",
      homeAriaLabel: "{brand} — Inicio",
    },
    footer: {
      servicesHeading: "Servicios",
      infoHeading: "Información",
      labels: {
        email: "Email",
        phone: "Tel.",
        office: "Sede",
      },
      links: {
        legal: "Aviso legal",
        privacy: "Política de privacidad",
        cookies: "Política de cookies",
      },
      copyright: "Todos los derechos reservados.",
    },
    languageSwitcher: {
      label: "Idioma",
      ariaLabel: "Cambiar idioma",
      options: {
        es: "Español",
        en: "English",
      },
    },
    common: {
      reviewBadgeAriaLabel:
        "{value} sobre {bestRating} en {source}. {count} reseñas verificadas.",
      reviewBadgeSource: "{source} · {count} reseñas",
      verified: "Verificado",
      googleReview: "Reseña en Google",
      starsAriaLabel: "{value} de 5 estrellas",
    },
  },
  home: {
    metadata: {
      title: "Abogados de extranjería en A Coruña",
      description:
        "Despacho de extranjería en A Coruña. Tramitamos arraigo social, nacionalidad española, visados y reagrupación familiar con presentación telemática.",
    },
    hero: {
      eyebrow: "Derecho de extranjería · España",
      headingLead: "Residencia legal en España",
      headingTrail: "con certeza jurídica.",
      descriptionPrefix:
        "{brand} guía tu proceso de residencia, visados y nacionalidad con estrategia clara y atención continua. Especialistas en ",
      descriptionStrong: "arraigo social",
      descriptionSuffix:
        ", reagrupación familiar y nacionalidad española.",
      ctaPrimary: "Agenda una consulta",
      ctaSecondary: "Ver servicios",
      stats: {
        officeLabel: "Sede",
        coverageLabel: "Cobertura",
        coverageValue: "Todo el territorio español",
        languagesLabel: "Idiomas",
        languagesValue: "ES · EN",
      },
      aside: {
        ariaLabel: "Especialidades destacadas",
        figureAlt:
          "Detalle arquitectónico de biblioteca jurídica, atmósfera sobria y profesional.",
        figureEyebrow: "Despacho · {city}",
        figureTitle: "Estudio jurídico",
        specialtiesHeading: "Especialidades",
        specialties: [
          {
            title: "Arraigo social y laboral",
            description:
              "Acompañamiento desde la valoración de requisitos hasta la resolución favorable.",
          },
          {
            title: "Nacionalidad española",
            description:
              "Preparación integral del expediente y seguimiento ante el Ministerio de Justicia.",
          },
          {
            title: "Reagrupación familiar",
            description:
              "Estrategia documental para reunir a tu familia con garantías jurídicas.",
          },
        ],
      },
    },
    services: {
      eyebrow: "Áreas de práctica",
      heading: "Seis áreas. Una sola interlocución.",
      description:
        "Cubrimos el ciclo completo de extranjería en España: desde la primera valoración de viabilidad hasta la obtención del documento final, con un único equipo asignado a tu expediente.",
      card: {
        viewService: "Ver servicio",
        viewServiceAria: "Ver detalle del servicio: {title}",
      },
    },
    about: {
      eyebrow: "Sobre el despacho",
      headingLead: "Estrategia legal.",
      headingTrail: "Atención humana.",
      imageAlt:
        "Equipo de Eon Legal revisando un expediente de extranjería en A Coruña.",
      figureEyebrow: "Despacho · {city}",
      figureTitle: "Eon Legal Solutions",
      paragraphs: [
        "Eon Legal es un despacho con sede en A Coruña especializado exclusivamente en derecho de extranjería, residencia y nacionalidad. Trabajamos con un único equipo asignado a cada expediente, sin traspasos internos ni respuestas genéricas.",
        "Combinamos rigor técnico y comunicación clara: analizamos la vía jurídica más adecuada, anticipamos requisitos documentales y acompañamos al cliente durante toda la tramitación, tanto presencial como telemática.",
      ],
      stats: {
        coverageLabel: "Cobertura",
        coverageValue: "Todo el territorio español",
        languagesLabel: "Idiomas",
        languagesValue: "Español · Inglés",
        specializationLabel: "Especialización",
        specializationValue: "Extranjería y nacionalidad",
        formatLabel: "Formato",
        formatValue: "Presencial y telemático",
      },
    },
    process: {
      eyebrow: "Cómo trabajamos",
      heading: "Un proceso claro, sin ambigüedades.",
      description:
        "Trabajamos por hitos verificables. En cada fase sabes qué documento tienes, qué firma falta y cuánto queda hasta el siguiente paso.",
      steps: [
        {
          index: "01",
          title: "Consulta y diagnóstico",
          description:
            "Analizamos tu situación migratoria, documentos disponibles y objetivos. Al final recibes un informe escrito con la vía legal recomendada y sus plazos realistas.",
          duration: "45 min",
        },
        {
          index: "02",
          title: "Estrategia documental",
          description:
            "Coordinamos la obtención, traducción jurada y apostilla de la documentación. Preparamos el expediente listo para presentación con cada requisito verificado.",
          duration: "2–6 semanas",
        },
        {
          index: "03",
          title: "Presentación y seguimiento",
          description:
            "Presentamos telemáticamente ante la Administración y monitorizamos el expediente hasta la resolución. Respondemos requerimientos y recurrimos si procede.",
          duration: "Hasta resolución",
        },
      ],
    },
    testimonials: {
      eyebrow: "Experiencia de clientes",
      heading: "Casos resueltos, palabras verificadas.",
      description:
        "Acompañamos a cada cliente hasta la resolución. Estas son algunas de las experiencias compartidas tras cerrar su expediente con el despacho.",
    },
    faq: {
      eyebrow: "Preguntas frecuentes",
      heading: "Respuestas directas a las dudas más comunes.",
      description:
        "Si tu caso no aparece aquí, escríbenos. Cada expediente es distinto y merece una valoración individual.",
    },
    contact: {
      eyebrow: "Consulta inicial",
      headingLead: "Cuéntanos tu caso.",
      headingTrail: "Te respondemos hoy.",
      description:
        "Valoramos gratuitamente la viabilidad de tu expediente. Recibes por escrito la vía legal recomendada, la documentación exigida y un presupuesto cerrado antes de contratar.",
      ctaEmail: "Escríbenos por email",
      ctaPhone: "Llamar al despacho",
      labels: {
        email: "Email",
        phone: "Teléfono",
        office: "Sede",
        coverage: "Cobertura",
      },
      coverageValue: "Expedientes en todo el territorio español.",
    },
  },
  services: {
    common: {
      breadcrumbAriaLabel: "Ruta de navegación",
      home: "Inicio",
      services: "Servicios",
      serviceEyebrow: "Servicio",
      highlightsEyebrow: "Ámbito del servicio",
      highlightsHeading: "Supuestos que tramitamos",
      highlightsDescription:
        "Cada expediente se analiza de forma individual para escoger la vía jurídica más adecuada al caso concreto.",
      requirementsEyebrow: "Documentación habitual",
      requirementsHeading: "Qué necesitamos para empezar",
      requirementsDescription:
        "El listado es orientativo; en la primera consulta confirmamos los documentos exigibles según la vía jurídica aplicable.",
      ctaEyebrow: "Consulta inicial",
      ctaHeading: "¿Tu caso encaja en este servicio? Hablemos.",
      ctaDescription:
        "Revisamos la viabilidad, plazos y documentación necesaria en una primera consulta sin compromiso. Atendemos de forma presencial en A Coruña y telemática en toda España.",
      ctaPrimary: "Solicitar consulta",
      ctaSecondary: "Ver todos los servicios",
      consultaSubjectPrefix: "Consulta · ",
      notFoundTitle: "Servicio no encontrado",
    },
  },
  legal: {
    layout: {
      lastUpdatedLabel: "Última actualización",
      contentAriaLabel: "Contenido legal",
    },
    avisoLegal: {
      metadataTitle: "Aviso legal",
      metadataDescription:
        "Información legal del titular del sitio web conforme al artículo 10 de la Ley 34/2002 (LSSI-CE): identidad, domicilio, contacto, objeto social y condiciones de uso.",
      eyebrow: "Información legal",
      title: "Aviso legal",
      description:
        "Información legal del titular del sitio web conforme al artículo 10 de la Ley 34/2002 (LSSI-CE): identidad, domicilio, contacto, objeto social y condiciones de uso.",
      lastUpdated: "22 de abril de 2026",
    },
    privacidad: {
      metadataTitle: "Política de privacidad",
      metadataDescription:
        "Información sobre el tratamiento de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD): responsable, finalidades, legitimación, destinatarios, conservación y derechos.",
      eyebrow: "Protección de datos",
      title: "Política de privacidad",
      description:
        "Información sobre el tratamiento de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD): responsable, finalidades, legitimación, destinatarios, conservación y derechos.",
      lastUpdated: "22 de abril de 2026",
    },
    cookies: {
      metadataTitle: "Política de cookies",
      metadataDescription:
        "Información sobre el uso de cookies en este sitio web conforme al artículo 22.2 de la Ley 34/2002 (LSSI-CE) y las directrices de la AEPD: tipologías, finalidades, conservación y configuración.",
      eyebrow: "Uso de cookies",
      title: "Política de cookies",
      description:
        "Información sobre el uso de cookies en este sitio web conforme al artículo 22.2 de la Ley 34/2002 (LSSI-CE) y las directrices de la AEPD: tipologías, finalidades, conservación y configuración.",
      lastUpdated: "22 de abril de 2026",
    },
  },
};

export type Dictionary = typeof dictionary;
