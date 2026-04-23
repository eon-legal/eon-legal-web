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
};
