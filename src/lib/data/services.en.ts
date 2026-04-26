/**
 * English copy for the services catalogue. Slugs (IDs) stay identical to
 * the Spanish source so the URL structure remains shared across locales.
 */

import type { LocalizedServiceContent } from "@/lib/data/services";

export const servicesContentEn: Readonly<
  Record<string, LocalizedServiceContent>
> = {
  residencia: {
    title: "Residence permits",
    shortTitle: "Residence",
    metaDescription:
      "Spanish residence and work permits: employed, self-employed and family reunification. Full cycle management with online filing. Free initial consultation.",
    summary:
      "Residence and work permits — employed, self-employed, family reunification and long-term residency in Spain.",
    longDescription:
      "We handle the full cycle of residence permits regulated by Spanish Organic Law 4/2000 and its Regulations: from the initial application to renewals, status changes and the transition to long-term residency. We coordinate the collection of documents in the country of origin, sworn translations and online filing before the competent Immigration Office (Oficina de Extranjería).",
    highlights: [
      "Residence and work permit (employee)",
      "Residence and work permit (self-employed)",
      "Family reunification",
      "Long-term and EU long-term residency",
      "Renewals and status changes",
    ],
    requirements: [
      "Valid passport",
      "Criminal record certificate from the country of origin, apostilled or legalised",
      "Evidence of sufficient financial means or an employment contract",
      "Public or private health insurance with equivalent coverage",
    ],
  },
  arraigo: {
    title: "Arraigo and exceptional-circumstances permits",
    shortTitle: "Arraigo",
    metaDescription:
      "Regularise your status in Spain through social, employment-based or family arraigo. We assess your best route and manage the full case. Free consultation.",
    summary:
      "Regularisation through social, employment-based, family or training-based arraigo when the legal requirements are met.",
    longDescription:
      "Permits granted on exceptional grounds make it possible to regularise the status of foreign nationals already in Spain by evidencing social, employment or family ties. We assess case-by-case the most appropriate arraigo route, gather the supporting evidence and defend the file through to resolution, including administrative and judicial appeals where appropriate.",
    highlights: [
      "Social arraigo",
      "Employment-based arraigo",
      "Family arraigo",
      "Training-based arraigo",
    ],
    requirements: [
      "Evidence of the minimum continuous stay in Spain",
      "Up-to-date padrón (local registration) certificate",
      "Arraigo report or equivalent evidence depending on the route",
      "No criminal record in Spain or the country of origin",
    ],
  },
  visados: {
    title: "Visas",
    shortTitle: "Visas",
    metaDescription:
      "Work, study, non-lucrative and family visas for Spain. Consulate coordination and eligibility review from A Coruña. Expert immigration lawyers.",
    summary:
      "Work, study, family reunification, non-lucrative and entrepreneur visas filed in coordination with Spanish consulates.",
    longDescription:
      "We advise throughout the whole consular procedure: preparation of the file in Spain, coordination with the competent consulate in the country of origin, and follow-up until the visa is granted and the Foreigner Identity Card (TIE) is issued. Includes a preliminary eligibility review and drafting of the business plan or proof of means when required.",
    highlights: [
      "Work visa and highly-qualified professional visa",
      "Non-lucrative visa",
      "Study and internship visa",
      "Entrepreneur visa",
      "Visa for family members of Spanish citizens",
    ],
    requirements: [
      "Passport valid for the minimum period required by the consulate",
      "Evidence of the visa purpose (contract, enrolment, business plan)",
      "Medical and criminal record certificates",
      "Proof of sufficient financial means and accommodation",
    ],
  },
  nacionalidad: {
    title: "Spanish citizenship",
    shortTitle: "Citizenship",
    metaDescription:
      "Spanish citizenship by residency, option or Democratic Memory Law. Full dossier preparation and Ministry of Justice follow-up. Free initial consultation.",
    summary:
      "Citizenship by residency, by option, procedures under the Democratic Memory Law and passport management.",
    longDescription:
      "We prepare the full citizenship-by-residency file through the online portal of the Spanish Ministry of Justice, including the CCSE and DELE exams where required. We also handle citizenship by option, by naturalisation letter, and the routes opened by the Democratic Memory Law, all the way through to the oath before the Civil Registry officer.",
    highlights: [
      "Citizenship by residency",
      "Citizenship by option",
      "Democratic Memory Law",
      "Citizenship proceedings for minors",
      "Passport and document legalisation",
    ],
    requirements: [
      "Full birth certificate, legalised or apostilled",
      "Criminal record certificates from Spain and the country of origin",
      "Padrón certificate and evidence of legal residency",
      "CCSE and DELE exams (depending on nationality of origin)",
    ],
  },
  "familiares-ue": {
    title: "Family members of EU citizens",
    shortTitle: "EU family",
    metaDescription:
      "Residence card for family members of EU citizens (Art. 10 & Art. 20). Application, renewal and permanent residence. Immigration lawyers in A Coruña.",
    summary:
      "Residence card for family members of EU citizens and EU family reunification visas.",
    longDescription:
      "We handle the residence card for family members of EU citizens under Spanish Royal Decree 240/2007 and its subsequent amendments, with particular experience in civil partnerships, marriages, and dependent ascendants or descendants. We support the client through the application, the biometric appointment and the renewal up to permanent residence.",
    highlights: [
      "EU family card (Art. 10)",
      "Permanent EU family card (Art. 20)",
      "Visas for family members of EU citizens",
    ],
    requirements: [
      "Evidence of the family tie, duly legalised",
      "Registration certificate of the EU citizen",
      "Financial means and health insurance of the EU citizen",
      "Joint padrón certificate where applicable",
    ],
  },
  dgt: {
    title: "DGT procedures and general services",
    shortTitle: "DGT",
    metaDescription:
      "Foreign driving licence exchange, vehicle transfers and online administrative filings. DGT procedures handled from A Coruña. No-obligation consultation.",
    summary:
      "Driving licence exchange, vehicle transfers and online filing of immigration-related applications.",
    longDescription:
      "We complement immigration services with the integrated management of related administrative procedures: exchange of foreign driving licences for the Spanish one, vehicle transfers and deregistrations, online filing of applications before public administrations, and obtaining criminal-record, residency and registration certificates.",
    highlights: [
      "Driving licence exchange",
      "Vehicle transfers",
      "Online filing of applications",
      "Certificates and case status enquiries",
    ],
    requirements: [
      "Valid ID document or NIE",
      "Original driving licence with a sworn translation where required",
      "Vehicle paperwork (registration certificate, technical data sheet)",
      "Medical and psychotechnical certificate where required",
    ],
  },
  "regularizacion-2026": {
    title: "Extraordinary regularisation 2026",
    shortTitle: "Regularisation 2026",
    metaDescription:
      "Apply for Spain's 2026 extraordinary regularization before the 30 June deadline. Eligibility review, Mercurio online filing & UTEX follow-up. Free consultation.",
    highlightsHeading: "Who can apply for the 2026 extraordinary regularisation",
    requirementsHeading: "Documents to evidence your stay in Spain",
    bodyNote:
      "The process has three key milestones: online filing opens on 16 April 2026 through the Mercurio platform of the Ministry of Inclusion, Social Security and Migration; in-person appointments start on 20 April at immigration offices; and the filing deadline closes definitively on 30 June 2026 with no extensions. The permit granted — or deemed granted by positive administrative silence — is valid for twelve months and includes social security registration and the regional health card. On expiry, the status can be consolidated through the standard routes of the Immigration Regulations, such as employed, self-employed or long-term residency.",
    faqs: [
      {
        question:
          "What is 'positive administrative silence' in the 2026 extraordinary regularisation?",
        answer:
          "If UTEX does not issue an express decision within the legal timeframe, administrative silence is positive: the initial residence and work permit is deemed granted. You do not need an express resolution to begin working legally in Spain.",
      },
      {
        question:
          "What private documents can evidence my stay for the 2026 regularisation?",
        answer:
          "Rental contracts, utility bills in your name (water, electricity, phone), bank statements or transfer receipts, payslips or employment contracts, and school enrolment certificates for children are all valid. The documents must collectively cover your continuous stay in Spain since before 1 January 2026.",
      },
      {
        question:
          "Can I apply if I have an unexecuted expulsion order?",
        answer:
          "It depends on the type of order and whether it is final or under appeal. Eon Legal carries out a preliminary eligibility review to determine whether the order affects eligibility before starting the case. In some scenarios the extraordinary regularisation can proceed even with prior administrative proceedings.",
      },
      {
        question:
          "What happens when the one-year regularisation permit expires?",
        answer:
          "The initial authorisation is valid for twelve months. Once it expires, you can apply for a renewal or transition to a long-term residence and work permit under the Immigration Regulations, provided you can evidence employment or economic activity.",
      },
      {
        question:
          "Can Eon Legal manage the application from any region in Spain?",
        answer:
          "Yes. The extraordinary regularisation is filed centrally with UTEX regardless of the applicant's region of residence. Eon Legal handles cases fully online from its A Coruña office, serving clients across all of Spain.",
      },
    ],
    relatedServices: ["residencia", "arraigo"],
    summary:
      "Extraordinary process approved by Royal Decree that allows migrants already living in Spain to obtain an initial one-year residence and work permit.",
    longDescription:
      "The Royal Decree on extraordinary regularisation opens a unique window for thousands of migrants already living in Spain to access a residence and work permit, together with their Social Security affiliation number and the public health card of the region where they reside. It is an initiative with a threefold legitimacy —social, political and economic—: social, because it takes up a popular legislative initiative backed by more than 700,000 signatures and close to 900 associations; political, because of the broad parliamentary support obtained when the proposal was taken into consideration; and economic, because of the explicit endorsement of employers' organisations and trade unions, which see in this process a way to strengthen workers' rights and bring legal certainty to employment relationships. Eon Legal handles the entire procedure: preliminary eligibility review, gathering and verification of evidence of stay, online filing through the single Mercurio platform of the Ministry of Inclusion, Social Security and Migration, and responses to requests from the Immigration Case-Handling Unit (UTEX) until the permit is resolved.",
    highlights: [
      "Initial residence and work permit valid for one year",
      "Social Security registration and affiliation number",
      "Access to the public health card in the region of residence",
      "24/7 online filing through the Mercurio platform",
      "Subsequent route into the figures provided for in the Immigration Regulations",
    ],
    requirements: [
      "Presence in Spain before 1 January 2026",
      "At least five months of continuous stay in Spanish territory at the time of application",
      "No criminal record and no threat to public order or security",
      "Evidence of stay through public or private documents (or a combination of both) that are verifiable, named and dated",
      "Application filed before 30 June 2026, online or in person with a prior appointment",
    ],
  },
};
