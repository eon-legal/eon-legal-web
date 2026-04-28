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
        regularizacion: "Regularización 2026",
      },
      cta: "Consulta inicial",
      homeAriaLabel: "{brand} — Inicio",
    },
    urgent: {
      ribbon: {
        ariaLabel: "Aviso de campaña destacada",
        eyebrow: "Disposición transitoria · Real Decreto",
        body: "Regularización extraordinaria abierta hasta el 30 de junio de 2026.",
        cta: "Ver requisitos",
      },
      modal: {
        ariaLabel: "Aviso · Regularización extraordinaria 2026",
        eyebrow: "Plazo limitado",
        kicker: "Boletín · Eon Legal",
        headingLead: "Regularización",
        headingTrail: "extraordinaria 2026.",
        deadlineLabel: "Cierre del plazo",
        deadlineDate: "30 jun · 2026",
        body: "Solicitud telemática única ante la UTEX. Si llevas en España desde antes del 1 de enero de 2026 y no tienes antecedentes, podrías obtener residencia y trabajo por un año.",
        ctaPrimary: "Comprobar mi caso",
        ctaSecondary: "Más adelante",
        close: "Cerrar aviso",
        daysSingular: "{count} día restante",
        daysPlural: "{count} días restantes",
        opensToday: "Cierra hoy",
      },
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
    cookieConsent: {
      ariaLabel: "Aviso de cookies",
      message:
        "Utilizamos cookies analíticas para medir el uso de la web y mejorar nuestros servicios. Solo se activan si las aceptas.",
      accept: "Aceptar",
      reject: "Rechazar",
      learnMore: "Ver nuestra política de cookies",
      resetTitle: "Cambiar tus preferencias",
      resetDescription:
        "Puedes restablecer tu elección y volver a mostrar el aviso de cookies para volver a decidir.",
      resetButton: "Restablecer preferencias",
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
          "Estatua de la dama de la justicia sosteniendo la balanza, vista de tres cuartos sobre fondo blanco.",
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
    urgent: {
      ariaLabel: "Campaña · Regularización extraordinaria 2026",
      kicker: "Edición especial",
      bulletinRef: "Real Decreto · Disposición transitoria",
      eyebrow: "Aviso al lector",
      headingLead: "Regularización extraordinaria.",
      headingTrail: "Una ventana legal de seis meses.",
      lede: "El Gobierno habilita un proceso único para residentes que vivían en España antes del 1 de enero de 2026. Solicitud telemática centralizada en la UTEX, resolución por silencio positivo y autorización inicial de un año con acceso a la Seguridad Social.",
      deadlineLabel: "Cierre del plazo",
      deadlineDate: "30 jun · 2026",
      deadlineFootnote: "Plazo improrrogable. Sin solicitudes fuera de tiempo.",
      criteria: {
        eyebrow: "Quién encaja",
        heading: "Tres legitimidades válidas",
        items: [
          {
            label: "Social",
            description:
              "Permanencia continuada en España con anterioridad al 1 de enero de 2026.",
          },
          {
            label: "Política",
            description:
              "Personas con autorización por protección internacional o asilo en revisión.",
          },
          {
            label: "Económica",
            description:
              "Trabajadores con vínculo demostrable o vía a la Seguridad Social.",
          },
        ],
      },
      timeline: {
        eyebrow: "Calendario",
        heading: "Hitos del proceso",
        items: [
          {
            label: "16 abr 2026",
            description: "Apertura de la solicitud telemática vía Mercurio.",
          },
          {
            label: "20 abr 2026",
            description:
              "Inicio de la atención presencial con cita previa.",
          },
          {
            label: "30 jun 2026",
            description: "Cierre del plazo. No se admiten solicitudes posteriores.",
          },
        ],
      },
      ctaPrimary: "Comprobar mi caso",
      ctaSecondary: "Ver requisitos completos",
    },
    services: {
      eyebrow: "Áreas de práctica",
      heading: "Servicios de extranjería. Una sola interlocución.",
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
    team: {
      eyebrow: "Equipo",
      headingLead: "Detrás de cada expediente,",
      headingTrail: "un equipo cercano.",
      description:
        "Dos abogadas especializadas en extranjería que llevan personalmente cada expediente, sin intermediarios ni respuestas automatizadas.",
      members: [
        {
          name: "Lammay Pérez",
          role: "Socia · Abogada de extranjería",
          bio: "Lidera la estrategia jurídica del despacho. Especializada en arraigo social, nacionalidad española y procedimientos contenciosos ante la Administración.",
          imageAlt:
            "Retrato profesional de la primera socia del despacho Eon Legal.",
          credentials: [
            { label: "Formación", value: "Universidad de La Habana" },
            { label: "Idiomas", value: "Español · Inglés" },
          ],
        },
        {
          name: "Yaymi Cruz",
          role: "Asociada Sénior · Abogada de extranjería",
          bio: "Coordina la tramitación documental y el seguimiento ante la Administración. Especializada en reagrupación familiar, visados y residencia por circunstancias excepcionales.",
          imageAlt:
            "Retrato profesional de la segunda socia del despacho Eon Legal.",
          credentials: [
            { label: "Formación", value: "Universidad de La Habana" },
            { label: "Idiomas", value: "Español · Inglés" },
          ],
        },
      ],
      placeholderEyebrow: "Foto provisional",
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
      serviceFaqEyebrow: "Preguntas frecuentes",
      serviceFaqHeading: "Dudas sobre este servicio",
      relatedEyebrow: "Servicios relacionados",
      relatedHeading: "También puede interesarte",
      relatedViewLink: "Ver servicio",
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
