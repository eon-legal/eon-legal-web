/**
 * English dictionary. Structurally constrained to the canonical `Dictionary`
 * shape from the Spanish source, so TypeScript flags any missing or
 * misshapen key at build time.
 * File >150 lines justified: mirrors the full `es` counterpart.
 */

import type { Dictionary } from "@/lib/i18n/dictionaries/es";

export const dictionary: Dictionary = {
  site: {
    brand: {
      tagline:
        "Immigration, citizenship and residency law firm based in Spain.",
      organizationDescription:
        "Eon Legal provides end-to-end legal advice in Spanish immigration law: arraigo social, Spanish citizenship, work visas, family reunification and driving licence procedures. Personalised support in A Coruña and across Spain.",
    },
    header: {
      navAriaLabel: "Main navigation",
      nav: {
        services: "Services",
        process: "Process",
        faq: "FAQ",
        regularizacion: "Regularisation 2026",
      },
      cta: "Book a consultation",
      homeAriaLabel: "{brand} — Home",
    },
    urgent: {
      ribbon: {
        ariaLabel: "Featured campaign notice",
        eyebrow: "Royal Decree · Transitional provision",
        body: "Extraordinary regularisation open until 30 June 2026.",
        cta: "See requirements",
      },
      modal: {
        ariaLabel: "Notice · 2026 extraordinary regularisation",
        eyebrow: "Limited window",
        kicker: "Bulletin · Eon Legal",
        headingLead: "Extraordinary",
        headingTrail: "regularisation 2026.",
        deadlineLabel: "Filing closes",
        deadlineDate: "30 Jun · 2026",
        body: "Single online filing through UTEX. If you have lived in Spain since before 1 January 2026 and have no criminal record, you may obtain residency and work authorisation for one year.",
        ctaPrimary: "Check my case",
        ctaSecondary: "Later",
        close: "Close notice",
        daysSingular: "{count} day left",
        daysPlural: "{count} days left",
        opensToday: "Closes today",
      },
    },
    footer: {
      servicesHeading: "Services",
      infoHeading: "Information",
      labels: {
        email: "Email",
        phone: "Phone",
        office: "Office",
      },
      links: {
        legal: "Legal notice",
        privacy: "Privacy policy",
        cookies: "Cookie policy",
      },
      copyright: "All rights reserved.",
    },
    languageSwitcher: {
      label: "Language",
      ariaLabel: "Change language",
      options: {
        es: "Español",
        en: "English",
      },
    },
    common: {
      reviewBadgeAriaLabel:
        "{value} out of {bestRating} on {source}. {count} verified reviews.",
      reviewBadgeSource: "{source} · {count} reviews",
      verified: "Verified",
      googleReview: "Google review",
      starsAriaLabel: "{value} out of 5 stars",
    },
    cookieConsent: {
      ariaLabel: "Cookie notice",
      message:
        "We use analytics cookies to measure site usage and improve our services. They only activate if you accept.",
      accept: "Accept",
      reject: "Reject",
      learnMore: "View our cookie policy",
      resetTitle: "Change your preferences",
      resetDescription:
        "You can reset your choice and bring the cookie notice back to decide again.",
      resetButton: "Reset preferences",
    },
  },
  home: {
    metadata: {
      title: "Spanish immigration lawyers in A Coruña",
      description:
        "Spanish immigration law firm in A Coruña. Arraigo, citizenship, work visas and family reunification with online filing and personal guidance.",
    },
    hero: {
      eyebrow: "Spanish immigration law",
      headingLead: "Legal residency in Spain",
      headingTrail: "with full legal certainty.",
      descriptionPrefix:
        "{brand} guides your residency, visa and citizenship process with clear strategy and continuous support. Specialists in ",
      descriptionStrong: "arraigo social",
      descriptionSuffix:
        ", family reunification and Spanish citizenship.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "See services",
      stats: {
        officeLabel: "Office",
        coverageLabel: "Coverage",
        coverageValue: "Nationwide in Spain",
        languagesLabel: "Languages",
        languagesValue: "ES · EN",
      },
      aside: {
        ariaLabel: "Featured practice areas",
        figureAlt:
          "Lady Justice statue holding the scales, three-quarter view on a white background.",
        figureEyebrow: "Office · {city}",
        figureTitle: "Law studio",
        specialtiesHeading: "Specialties",
        specialties: [
          {
            title: "Arraigo (social and employment-based)",
            description:
              "End-to-end support from eligibility review to a favourable resolution.",
          },
          {
            title: "Spanish citizenship",
            description:
              "Full dossier preparation and follow-up before the Ministry of Justice.",
          },
          {
            title: "Family reunification",
            description:
              "Document strategy to reunite your family with solid legal guarantees.",
          },
        ],
      },
    },
    urgent: {
      ariaLabel: "Campaign · 2026 extraordinary regularisation",
      kicker: "Special edition",
      bulletinRef: "Royal Decree · Transitional provision",
      eyebrow: "Reader notice",
      headingLead: "Extraordinary regularisation.",
      headingTrail: "A six-month legal window.",
      lede: "The Spanish Government enables a single process for residents who lived in Spain before 1 January 2026. Centralised online filing at UTEX, positive silence resolution and an initial one-year authorisation with access to social security.",
      deadlineLabel: "Filing closes",
      deadlineDate: "30 Jun · 2026",
      deadlineFootnote: "Non-extendable deadline. No applications after this date.",
      criteria: {
        eyebrow: "Who qualifies",
        heading: "Three valid grounds",
        items: [
          {
            label: "Social",
            description:
              "Continuous residence in Spain prior to 1 January 2026.",
          },
          {
            label: "Political",
            description:
              "Holders of international protection or asylum claims under review.",
          },
          {
            label: "Economic",
            description:
              "Workers with a verifiable employment link or a path to social security.",
          },
        ],
      },
      timeline: {
        eyebrow: "Calendar",
        heading: "Process milestones",
        items: [
          {
            label: "16 Apr 2026",
            description: "Online filing opens through the Mercurio platform.",
          },
          {
            label: "20 Apr 2026",
            description: "In-person attention starts (prior appointment required).",
          },
          {
            label: "30 Jun 2026",
            description: "Filing closes. No applications accepted after this date.",
          },
        ],
      },
      ctaPrimary: "Check my case",
      ctaSecondary: "See full requirements",
    },
    services: {
      eyebrow: "Practice areas",
      heading: "Immigration services. One point of contact.",
      description:
        "We cover the full immigration cycle in Spain — from the initial eligibility review to the final document — with a single team assigned to your case.",
      card: {
        viewService: "View service",
        viewServiceAria: "See service detail: {title}",
      },
    },
    about: {
      eyebrow: "About the firm",
      headingLead: "Legal strategy.",
      headingTrail: "Human support.",
      imageAlt:
        "Eon Legal team reviewing an immigration case file in A Coruña.",
      figureEyebrow: "Office · {city}",
      figureTitle: "Eon Legal Solutions",
      paragraphs: [
        "Eon Legal is a law firm based in A Coruña focused exclusively on immigration, residency and citizenship law. A single team is assigned to each case — no handovers, no generic answers.",
        "We combine technical rigour with clear communication: we identify the best legal route, anticipate documentary requirements and accompany the client throughout the whole process, both in person and online.",
      ],
      stats: {
        coverageLabel: "Coverage",
        coverageValue: "Nationwide in Spain",
        languagesLabel: "Languages",
        languagesValue: "Spanish · English",
        specializationLabel: "Specialization",
        specializationValue: "Immigration & citizenship",
        formatLabel: "Format",
        formatValue: "In-person & online",
      },
    },
    team: {
      eyebrow: "Team",
      headingLead: "Behind every file,",
      headingTrail: "a hands-on team.",
      description:
        "Two immigration lawyers who handle each case personally — no intermediaries, no automated replies.",
      members: [
        {
          name: "Lammay Pérez",
          role: "Partner · Immigration lawyer",
          bio: "Leads the firm's legal strategy. Specialised in social roots, Spanish citizenship and contentious proceedings before the Administration.",
          imageAlt:
            "Professional portrait of the first partner at Eon Legal.",
          credentials: [
            { label: "Education", value: "University of Havana" },
            { label: "Languages", value: "Spanish · English" },
          ],
        },
        {
          name: "Yaymi Cruz",
          role: "Senior Associate · Immigration lawyer",
          bio: "Coordinates documentary work and case tracking before the Administration. Specialised in family reunification, visas and residence on exceptional grounds.",
          imageAlt:
            "Professional portrait of the second partner at Eon Legal.",
          credentials: [
            { label: "Education", value: "University of Havana" },
            { label: "Languages", value: "Spanish · English" },
          ],
        },
      ],
      placeholderEyebrow: "Placeholder photo",
    },
    process: {
      eyebrow: "How we work",
      heading: "A clear process, with no grey areas.",
      description:
        "We work against verifiable milestones. At every stage you know which documents you already have, which signature is still pending and how far you are from the next step.",
      steps: [
        {
          index: "01",
          title: "Consultation and diagnosis",
          description:
            "We assess your immigration status, available documents and goals. You receive a written report with the recommended legal route and realistic timelines.",
          duration: "45 min",
        },
        {
          index: "02",
          title: "Document strategy",
          description:
            "We coordinate the collection, sworn translation and apostille of all documents. We prepare the dossier for filing with every requirement double-checked.",
          duration: "2–6 weeks",
        },
        {
          index: "03",
          title: "Filing and follow-up",
          description:
            "We file online before the Administration and monitor the case until resolution. We respond to requirements and file appeals where appropriate.",
          duration: "Until resolution",
        },
      ],
    },
    testimonials: {
      eyebrow: "Client experience",
      heading: "Resolved cases, verified words.",
      description:
        "We accompany each client through to resolution. Below are a few of the experiences shared after closing a file with the firm.",
    },
    faq: {
      eyebrow: "Frequently asked questions",
      heading: "Direct answers to the most common questions.",
      description:
        "If your case is not listed here, get in touch. Every file is different and deserves an individual review.",
    },
    contact: {
      eyebrow: "Initial consultation",
      headingLead: "Tell us about your case.",
      headingTrail: "We'll reply today.",
      description:
        "We review the viability of your file at no cost. You receive in writing the recommended legal route, the required documents and a fixed fee before engaging.",
      ctaEmail: "Email us",
      ctaPhone: "Call the firm",
      labels: {
        email: "Email",
        phone: "Phone",
        office: "Office",
        coverage: "Coverage",
      },
      coverageValue: "Cases handled nationwide across Spain.",
    },
  },
  services: {
    common: {
      breadcrumbAriaLabel: "Breadcrumb",
      home: "Home",
      services: "Services",
      serviceEyebrow: "Service",
      highlightsEyebrow: "Scope of the service",
      highlightsHeading: "Cases we handle",
      highlightsDescription:
        "Each file is reviewed individually to choose the most appropriate legal route for the specific case.",
      requirementsEyebrow: "Usual documents",
      requirementsHeading: "What we need to get started",
      requirementsDescription:
        "The list is indicative; in the initial consultation we confirm the exact documents required by the applicable legal route.",
      ctaEyebrow: "Initial consultation",
      ctaHeading: "Does your case fit this service? Let's talk.",
      ctaDescription:
        "We review viability, timelines and the required documents in a first, no-obligation consultation. In person in A Coruña and online across Spain.",
      ctaPrimary: "Request consultation",
      ctaSecondary: "See all services",
      consultaSubjectPrefix: "Enquiry · ",
      notFoundTitle: "Service not found",
      serviceFaqEyebrow: "Frequently asked questions",
      serviceFaqHeading: "Questions about this service",
      relatedEyebrow: "Related services",
      relatedHeading: "You may also be interested in",
      relatedViewLink: "View service",
    },
  },
  legal: {
    layout: {
      lastUpdatedLabel: "Last updated",
      contentAriaLabel: "Legal content",
    },
    avisoLegal: {
      metadataTitle: "Legal notice",
      metadataDescription:
        "Legal information about the website owner pursuant to article 10 of Spanish Law 34/2002 (LSSI-CE): identity, address, contact details, corporate purpose and terms of use.",
      eyebrow: "Legal information",
      title: "Legal notice",
      description:
        "Legal information about the website owner pursuant to article 10 of Spanish Law 34/2002 (LSSI-CE): identity, address, contact details, corporate purpose and terms of use.",
      lastUpdated: "22 April 2026",
    },
    privacidad: {
      metadataTitle: "Privacy policy",
      metadataDescription:
        "Information on the processing of personal data under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD): controller, purposes, lawful basis, recipients, retention and rights.",
      eyebrow: "Data protection",
      title: "Privacy policy",
      description:
        "Information on the processing of personal data under Regulation (EU) 2016/679 (GDPR) and Spanish Organic Law 3/2018 (LOPDGDD): controller, purposes, lawful basis, recipients, retention and rights.",
      lastUpdated: "22 April 2026",
    },
    cookies: {
      metadataTitle: "Cookie policy",
      metadataDescription:
        "Information on the use of cookies on this website pursuant to article 22.2 of Spanish Law 34/2002 (LSSI-CE) and the AEPD guidelines: categories, purposes, retention and configuration.",
      eyebrow: "Cookie usage",
      title: "Cookie policy",
      description:
        "Information on the use of cookies on this website pursuant to article 22.2 of Spanish Law 34/2002 (LSSI-CE) and the AEPD guidelines: categories, purposes, retention and configuration.",
      lastUpdated: "22 April 2026",
    },
  },
};
