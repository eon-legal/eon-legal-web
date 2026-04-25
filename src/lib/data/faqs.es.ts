/**
 * FAQs en español de la landing. Consumido por `src/lib/data/faqs.ts`
 * según el `Locale` activo. Los textos deben coincidir palabra por
 * palabra con el JSON-LD FAQPage correspondiente.
 */

import type { FaqItem } from "@/lib/data/faqs";

export const homeFaqsEs: readonly FaqItem[] = [
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
  {
    question:
      "¿Cuándo se pueden presentar las solicitudes del proceso de regularización extraordinaria de 2026?",
    answer:
      "La vía telemática se abre el jueves 16 de abril de 2026 y permanece disponible las 24 horas del día durante todo el periodo de solicitud. La cita previa para la atención presencial puede pedirse desde la misma fecha, mientras que la atención en oficinas comienza el lunes 20 de abril. El plazo para presentar la solicitud por cualquiera de las dos vías finaliza el 30 de junio de 2026.",
  },
  {
    question:
      "¿Qué es la plataforma Mercurio y qué papel tiene en la regularización extraordinaria?",
    answer:
      "Mercurio es la plataforma única del Ministerio de Inclusión, Seguridad Social y Migraciones a través de la cual se presenta toda la documentación del proceso de regularización extraordinaria. Desde Mercurio, la Unidad de Tramitación de Expedientes de Extranjería (UTEX) estudia el expediente, solicita subsanaciones y resuelve la autorización inicial de residencia y trabajo de un año.",
  },
];
