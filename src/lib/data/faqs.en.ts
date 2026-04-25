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
      "Social arraigo (arraigo social) requires evidence of at least two years of continuous stay in Spain, an employment contract with a minimum duration of one year, no criminal record, and a favourable social integration report issued by the corresponding Autonomous Community.",
  },
  {
    question: "How long does Spanish citizenship by residency take?",
    answer:
      "The statutory maximum is one year from the filing of the complete file, although the actual resolution is usually issued within 12 to 24 months. A clean file with impeccable documentation and proactive follow-up shortens the response time.",
  },
  {
    question:
      "Can I file the visa for family members of a Spanish citizen from within Spain?",
    answer:
      "Yes. The residency visa for family members of a Spanish citizen can be filed both in the foreign relative's country of origin and directly in Spain, provided that the family tie, sufficient financial means and adequate accommodation are evidenced.",
  },
  {
    question:
      "What is the difference between employment-based and social arraigo?",
    answer:
      "Employment-based arraigo (arraigo laboral) requires proof of at least six months of employment in Spain by way of a court judgment, a Labour Inspectorate report or an administrative resolution. Social arraigo requires two years of stay, a future employment contract and a regional social report.",
  },
  {
    question: "Do you handle cases outside A Coruña?",
    answer:
      "Yes. Eon Legal handles immigration files across the whole of Spain through online filing with the Administration, secure video consultations and digital document custody backed up physically at our A Coruña office.",
  },
  {
    question:
      "When can applications for the 2026 extraordinary regularisation process be filed?",
    answer:
      "The online channel opens on Thursday 16 April 2026 and is available 24 hours a day throughout the application period. Prior appointments for in-person filing can be booked from the same date, while in-office attention begins on Monday 20 April. The deadline for filing through either channel is 30 June 2026.",
  },
  {
    question:
      "What is the Mercurio platform and what role does it play in the extraordinary regularisation?",
    answer:
      "Mercurio is the single platform of the Spanish Ministry of Inclusion, Social Security and Migration through which all documentation for the extraordinary regularisation process is submitted. From Mercurio, the Immigration Case-Handling Unit (UTEX) reviews the file, requests amendments and issues the initial one-year residence and work permit.",
  },
];
