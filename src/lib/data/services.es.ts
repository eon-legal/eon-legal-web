/**
 * Contenido en español del catálogo de servicios. Consumido por
 * `src/lib/data/services.ts` según el `Locale` activo.
 */

import type { LocalizedServiceContent } from "@/lib/data/services";

export const servicesContentEs: Readonly<
  Record<string, LocalizedServiceContent>
> = {
  residencia: {
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
  arraigo: {
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
  visados: {
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
  nacionalidad: {
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
  "familiares-ue": {
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
  dgt: {
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
  "regularizacion-2026": {
    title: "Regularización extraordinaria 2026",
    shortTitle: "Regularización 2026",
    summary:
      "Proceso extraordinario aprobado por Real Decreto que permite a personas migrantes ya residentes en España obtener una autorización inicial de residencia y trabajo con vigencia de un año.",
    longDescription:
      "El Real Decreto de regularización extraordinaria abre una ventana única para que miles de personas migrantes que ya conviven en España accedan a una autorización de residencia y trabajo, a su número de afiliación a la Seguridad Social y a la tarjeta sanitaria del territorio en el que residan. Es una iniciativa con triple legitimidad —social, política y económica—: social porque toma el testigo de una iniciativa legislativa popular respaldada por más de 700.000 firmas y cerca de 900 asociaciones; política por el respaldo parlamentario obtenido en su toma en consideración; y económica por el apoyo expreso de patronal y sindicatos, que ven en este proceso una vía para reforzar derechos laborales y dotar de seguridad jurídica a las relaciones de trabajo. Eon Legal acompaña al solicitante en todo el procedimiento: revisión previa de viabilidad, recopilación y verificación de la prueba de estancia, presentación telemática a través de la plataforma única Mercurio del Ministerio de Inclusión, Seguridad Social y Migraciones, y respuesta a requerimientos de la Unidad de Tramitación de Expedientes de Extranjería (UTEX) hasta la resolución de la autorización.",
    highlights: [
      "Autorización inicial de residencia y trabajo con vigencia de un año",
      "Alta y número de afiliación en la Seguridad Social",
      "Acceso a la tarjeta sanitaria del territorio de residencia",
      "Presentación telemática 24/7 a través de la plataforma Mercurio",
      "Pasarela posterior a las figuras previstas en el Reglamento de Extranjería",
    ],
    requirements: [
      "Encontrarse en España antes del 1 de enero de 2026",
      "Haber permanecido en territorio español al menos cinco meses ininterrumpidos en el momento de la solicitud",
      "Carecer de antecedentes penales y no suponer una amenaza para el orden o la seguridad pública",
      "Acreditar la estancia mediante documentos públicos, privados o combinación de ambos, verificables, nominativos y con fecha",
      "Presentar la solicitud antes del 30 de junio de 2026 por la vía telemática o presencial con cita previa",
    ],
  },
};
