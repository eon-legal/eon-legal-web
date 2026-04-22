/**
 * FAQs mostradas en la landing principal.
 * Los textos deben coincidir palabra por palabra con el JSON-LD FAQPage:
 * Google requiere coincidencia exacta para los rich snippets.
 */

export interface FaqItem {
  readonly question: string;
  readonly answer: string;
}

export const homeFaqs: readonly FaqItem[] = [
  {
    question: "¿Qué requisitos tiene el arraigo social en España?",
    answer:
      "El arraigo social requiere acreditar al menos dos años de permanencia continuada en España, un contrato de trabajo de duración mínima de un año, carecer de antecedentes penales e informe favorable de inserción social emitido por la comunidad autónoma correspondiente.",
  },
  {
    question: "¿Cuánto tarda la nacionalidad española por residencia?",
    answer:
      "El plazo legal máximo es de un año desde la presentación del expediente completo, aunque la resolución efectiva suele situarse entre 12 y 24 meses. Un expediente sin incidencias, con documentación impecable y seguimiento proactivo reduce los tiempos de respuesta.",
  },
  {
    question:
      "¿Puedo tramitar el visado de familiar de ciudadano español en España?",
    answer:
      "Sí. El visado de residencia de familiar de ciudadano español puede tramitarse tanto en el país de origen del familiar extranjero como directamente en España, siempre que se acredite el vínculo familiar, los medios económicos suficientes y un alojamiento adecuado.",
  },
  {
    question: "¿Qué diferencia hay entre arraigo laboral y arraigo social?",
    answer:
      "El arraigo laboral exige acreditar al menos seis meses de relación laboral en España mediante sentencia judicial, acta de la Inspección de Trabajo o resolución administrativa. El arraigo social requiere dos años de permanencia, un contrato futuro e informe social autonómico.",
  },
  {
    question: "¿Atendéis consultas fuera de A Coruña?",
    answer:
      "Sí. Eon Legal gestiona expedientes de extranjería en toda España mediante presentación telemática ante la Administración, videoconsulta segura y custodia documental digital con respaldo físico en nuestra oficina de A Coruña.",
  },
];
