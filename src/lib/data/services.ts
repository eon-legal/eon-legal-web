/**
 * Catálogo de categorías de servicio mostradas en la landing principal.
 * Derivado de `docs/services.md`. Estos datos también alimentan el JSON-LD
 * (schema.org/LegalService) y deben coincidir con el contenido visible.
 */

export interface ServiceCategory {
  readonly id: string;
  readonly index: string;
  readonly title: string;
  readonly shortTitle: string;
  readonly summary: string;
  readonly longDescription: string;
  readonly highlights: readonly string[];
  readonly requirements: readonly string[];
}

export const serviceCategories: readonly ServiceCategory[] = [
  {
    id: "residencia",
    index: "01",
    title: "Autorizaciones de residencia",
    shortTitle: "Residencia",
    summary:
      "Permisos de residencia y trabajo por cuenta ajena, por cuenta propia, reagrupación familiar y larga duración en España.",
    longDescription:
      "Gestionamos el ciclo completo de autorizaciones de residencia reguladas por la Ley Orgánica 4/2000 y su Reglamento: desde la solicitud inicial hasta las renovaciones, modificaciones de situación y paso a larga duración. Coordinamos la obtención documental en origen, la traducción jurada y la presentación telemática en la Oficina de Extranjería competente.",
    highlights: [
      "Residencia y trabajo por cuenta ajena",
      "Residencia y trabajo por cuenta propia",
      "Reagrupación familiar",
      "Larga duración y larga duración-UE",
      "Renovaciones y modificaciones",
    ],
    requirements: [
      "Pasaporte en vigor",
      "Certificado de antecedentes penales del país de origen con apostilla o legalización",
      "Documentación acreditativa de medios económicos o contrato laboral",
      "Seguro médico público o privado con cobertura equivalente",
    ],
  },
  {
    id: "arraigo",
    index: "02",
    title: "Arraigo y circunstancias excepcionales",
    shortTitle: "Arraigo",
    summary:
      "Regularización por arraigo social, laboral, familiar y para la formación cuando se acreditan los requisitos legales.",
    longDescription:
      "Las autorizaciones por circunstancias excepcionales permiten regularizar la situación de personas extranjeras que se encuentran en España acreditando vínculos sociales, laborales o familiares. Estudiamos individualmente la vía de arraigo más adecuada, reunimos la documentación probatoria y defendemos el expediente hasta la resolución, incluyendo recurso de reposición o contencioso-administrativo si procede.",
    highlights: [
      "Arraigo social",
      "Arraigo laboral",
      "Arraigo familiar",
      "Arraigo para la formación",
    ],
    requirements: [
      "Acreditación del periodo mínimo de permanencia continuada en España",
      "Certificado de empadronamiento actualizado",
      "Informe de arraigo o medios alternativos según el supuesto",
      "Carencia de antecedentes penales en España y país de origen",
    ],
  },
  {
    id: "visados",
    index: "03",
    title: "Visados",
    shortTitle: "Visados",
    summary:
      "Tramitación coordinada con los consulados de España para visados de trabajo, estudios, reagrupación, no lucrativa y emprendedores.",
    longDescription:
      "Asesoramos durante todo el procedimiento consular: preparación del expediente en España, coordinación con el consulado competente en el país de origen y seguimiento hasta la concesión del visado y posterior obtención de la Tarjeta de Identidad de Extranjero. Incluye la revisión previa de viabilidad y la redacción del proyecto o justificación de medios cuando es exigible.",
    highlights: [
      "Visado de trabajo y altamente cualificado",
      "Visado no lucrativo",
      "Visado de estudios y prácticas",
      "Visado para emprender",
      "Visado de familiar de ciudadano español",
    ],
    requirements: [
      "Pasaporte con vigencia mínima exigida por el consulado",
      "Documentación acreditativa del motivo del visado (contrato, matrícula, proyecto)",
      "Certificados médicos y de antecedentes penales",
      "Justificación de medios económicos suficientes y alojamiento",
    ],
  },
  {
    id: "nacionalidad",
    index: "04",
    title: "Nacionalidad española",
    shortTitle: "Nacionalidad",
    summary:
      "Nacionalidad por residencia, por opción, trámites de la Ley de Memoria Democrática y gestión de pasaporte.",
    longDescription:
      "Preparamos el expediente completo de nacionalidad por residencia a través de la sede electrónica del Ministerio de Justicia, incluyendo la pruebas CCSE y DELE cuando son exigibles. También tramitamos supuestos por opción, por carta de naturaleza y las vías habilitadas por la Ley de Memoria Democrática, hasta la jura ante el encargado del Registro Civil.",
    highlights: [
      "Nacionalidad por residencia",
      "Nacionalidad por opción",
      "Ley de Memoria Democrática",
      "Trámites de nacionalidad para menores",
      "Pasaporte y legalización de documentos",
    ],
    requirements: [
      "Certificado literal de nacimiento legalizado o apostillado",
      "Certificado de antecedentes penales de España y país de origen",
      "Certificado de empadronamiento y residencia legal",
      "Pruebas CCSE y DELE (según nacionalidad de origen)",
    ],
  },
  {
    id: "familiares-ue",
    index: "05",
    title: "Familiares de ciudadanos UE",
    shortTitle: "Familia UE",
    summary:
      "Tarjeta de residencia de familiar de ciudadano de la Unión Europea y visados de reunificación comunitaria.",
    longDescription:
      "Tramitamos la tarjeta de residencia de familiar de ciudadano de la Unión al amparo del Real Decreto 240/2007 y sus sucesivas modificaciones, con especial atención a los supuestos de pareja de hecho, matrimonio y ascendientes o descendientes a cargo. Acompañamos al cliente durante la solicitud, la cita biométrica y la renovación hasta la residencia permanente.",
    highlights: [
      "Tarjeta comunitaria (art. 10)",
      "Tarjeta comunitaria permanente (art. 20)",
      "Visados de familiar de ciudadano UE",
    ],
    requirements: [
      "Documentación acreditativa del vínculo familiar legalizada",
      "Certificado de registro del ciudadano UE titular",
      "Medios económicos y seguro médico del ciudadano UE",
      "Certificado de empadronamiento conjunto cuando proceda",
    ],
  },
  {
    id: "dgt",
    index: "06",
    title: "Trámites DGT y servicios generales",
    shortTitle: "DGT",
    summary:
      "Canje de permisos de conducir, traspaso de vehículos y presentación telemática de solicitudes en materia de extranjería.",
    longDescription:
      "Complementamos los servicios de extranjería con la gestión integral de trámites administrativos conexos: canje de permisos de conducir extranjeros por el español, traspasos y bajas de vehículos, presentación telemática de solicitudes ante administraciones públicas y obtención de certificados de antecedentes, residencia y matriculación.",
    highlights: [
      "Canje de carnet de conducir",
      "Traspaso de vehículos",
      "Presentación telemática de solicitudes",
      "Certificaciones y consultas de expedientes",
    ],
    requirements: [
      "Documento de identidad o NIE en vigor",
      "Permiso de conducir original con traducción jurada si procede",
      "Documentación del vehículo (permiso de circulación, ficha técnica)",
      "Certificado médico psicotécnico cuando sea exigible",
    ],
  },
] as const;

export function getServiceById(
  id: string
): ServiceCategory | undefined {
  return serviceCategories.find((service) => service.id === id);
}
