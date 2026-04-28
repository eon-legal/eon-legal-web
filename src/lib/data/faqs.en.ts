/**
 * English FAQ copy for the landing page. Must match the FAQPage JSON-LD
 * text verbatim so Google can render the rich snippet for the English
 * locale.
 */

import type { FaqItem } from "@/lib/data/faqs";

export const homeFaqsEn: readonly FaqItem[] = [
  {
    question: "What are the requirements for social arraigo in Spain?",
    answer:
      "Social arraigo (arraigo social) is a regularisation route for non-residents who can demonstrate lasting ties to Spain without prior authorisation. Under Organic Law 4/2000, it requires: (1) continuous residence in Spanish territory for at least two years, (2) an employment contract with a minimum duration of one year, (3) absence of criminal records in Spain and the country of origin, and (4) a favourable social integration report issued by the corresponding Autonomous Community. All four requirements must be evidenced simultaneously in the application filed with the Immigration Office.",
  },
  {
    question: "How long does Spanish citizenship by residency take?",
    answer:
      "Spanish citizenship by residency (naturalisation) has a statutory maximum of one year from filing the complete application with the Ministry of Justice. However, actual resolution typically occurs between 12 and 24 months due to application volumes. Applications without administrative issues, with impeccable documentation and proactive response to official requests can obtain favourable resolution within the minimum timeframe. Deadlines may extend if the Administration issues requests for additional documentation.",
  },
  {
    question:
      "Can I file the visa for family members of a Spanish citizen from within Spain?",
    answer:
      "Yes. The residency visa for family members of a Spanish citizen offers procedural flexibility: it can be filed either at the competent consulate in the foreign relative's country of origin or directly at the Immigration Office in Spain. Filing in Spain is permitted provided the applicant is present in Spanish territory and evidences: (1) family relationship with a Spanish citizen, (2) sufficient financial means for family support, and (3) adequate accommodation. Documents must be apostilled at origin under the Hague Apostille Convention.",
  },
  {
    question:
      "What is the difference between employment-based and social arraigo?",
    answer:
      "Both routes allow regularisation without prior authorisation, but their requirements differ substantially. Employment-based arraigo (arraigo laboral) requires proof of continuous employment for a minimum of six months in Spain, evidenced by court judgment, Labour Inspectorate report or administrative resolution. Social arraigo, by contrast, requires two years of continuous residence, a future employment contract (minimum one year), and a favourable social integration report from the Autonomous Community. Employment-based arraigo focuses on the employer relationship, while social arraigo evaluates broader social integration.",
  },
  {
    question: "Do you handle cases outside A Coruña?",
    answer:
      "Yes. Eon Legal manages immigration files across all of Spain through online filing with the Administration (Immigration Offices, UTEX and other competent bodies), secure video consultations with end-to-end encryption, and digital document custody backed up physically at our A Coruña office. Our team coordinates all file management without requiring in-person client attendance, ensuring confidentiality and continuity throughout the process.",
  },
  {
    question:
      "When can applications for the 2026 extraordinary regularisation process be filed?",
    answer:
      "The 2026 extraordinary regularisation process offers two simultaneous channels. The online channel opens Thursday 16 April 2026 and is available 24 hours daily throughout the application period, managed by the Immigration Case-Handling Unit (UTEX) via the Mercurio platform. Appointments for in-person filing can be requested from 16 April, with in-office attention beginning Monday 20 April. The deadline for filing through either channel is non-extendable: 30 June 2026.",
  },
  {
    question:
      "What is the Mercurio platform and what role does it play in the extraordinary regularisation?",
    answer:
      "Mercurio is the single platform of the Spanish Ministry of Inclusion, Social Security and Migration designed exclusively for the 2026 extraordinary regularisation process. Through Mercurio, applicants submit all required documentation: criminal records, proof of residence, and evidence of social, labour or political ties supporting the application. The Immigration Case-Handling Unit (UTEX) uses Mercurio to review files, request clarifications when necessary, and issue the initial one-year residence and work authorisation with access to Spain's Social Security system.",
  },
];
