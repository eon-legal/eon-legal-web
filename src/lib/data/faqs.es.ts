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
      "El arraigo social es una vía de regularización para personas extranjeras que acreditan vínculos duraderos en España sin tener una autorización de residencia previa. Según la Ley Orgánica 4/2000, requiere: (1) permanencia continuada de al menos dos años en territorio español, (2) un contrato de trabajo con duración mínima de un año, (3) carencia de antecedentes penales en España y en el país de origen, y (4) informe favorable de inserción social emitido por la comunidad autónoma correspondiente. Estos cuatro requisitos deben acreditarse simultáneamente en la solicitud ante la Oficina de Extranjería.",
  },
  {
    question: "¿Cuánto tarda la nacionalidad española por residencia?",
    answer:
      "La nacionalidad española por residencia (conocida como naturalización) tiene un plazo legal máximo de un año desde la presentación del expediente completo ante el Ministerio de Justicia. Sin embargo, la resolución efectiva suele situarse entre 12 y 24 meses debido al volumen de solicitudes. Expedientes sin incidencias administrativas, con documentación impecable y seguimiento proactivo de requerimientos pueden obtener resolución favorable en el plazo mínimo. Los plazos pueden extenderse si la Administración formula requerimientos de documentación adicional.",
  },
  {
    question:
      "¿Puedo tramitar el visado de familiar de ciudadano español en España?",
    answer:
      "Sí. El visado de residencia de familiar de ciudadano español ofrece flexibilidad procedural: puede tramitarse tanto en el consulado competente del país de origen del familiar extranjero como directamente en la Oficina de Extranjería en España. La tramitación en España es posible siempre que el solicitante se encuentre en territorio español y acredite: (1) el vínculo familiar con un ciudadano español, (2) medios económicos suficientes para el sostén de la familia, y (3) alojamiento adecuado. La documentación debe apostillarse en origen según la Convención de La Haya.",
  },
  {
    question: "¿Qué diferencia hay entre arraigo laboral y arraigo social?",
    answer:
      "Ambas vías permiten regularizar situación sin autorización previa, pero tienen requisitos distintos. El arraigo laboral exige acreditar una relación laboral continuada de mínimo seis meses en España, demostrada mediante sentencia judicial, acta de la Inspección de Trabajo o resolución administrativa. El arraigo social, en cambio, requiere dos años de permanencia continuada, un contrato de trabajo futuro (mínimo un año) e informe favorable de inserción social emitido por la comunidad autónoma. El arraigo laboral se enfoca en la relación con el empleador, mientras que el arraigo social valora la integración social más amplia.",
  },
  {
    question: "¿Atendéis consultas fuera de A Coruña?",
    answer:
      "Sí. Eon Legal gestiona expedientes de extranjería en toda España mediante presentación telemática ante la Administración (Oficinas de Extranjería, UTEX, y otros órganos competentes), videoconsulta segura con encriptación end-to-end, y custodia documental digital con respaldo físico en nuestra oficina de A Coruña. Nuestro equipo coordina la tramitación sin necesidad de presencia física del cliente, garantizando confidencialidad y continuidad en cada expediente.",
  },
  {
    question:
      "¿Cuándo se pueden presentar las solicitudes del proceso de regularización extraordinaria de 2026?",
    answer:
      "El proceso de regularización extraordinaria 2026 ofrece dos vías simultáneas. La vía telemática se abre el jueves 16 de abril de 2026 y permanece disponible las 24 horas del día durante todo el periodo de solicitud, gestionada por la Unidad de Tramitación de Expedientes de Extranjería (UTEX) mediante la plataforma Mercurio. La cita previa para atención presencial puede solicitarse desde el 16 de abril, con atención en oficinas a partir del lunes 20 de abril. El plazo para presentar por cualquiera de las dos vías finaliza improrrogablemente el 30 de junio de 2026.",
  },
  {
    question:
      "¿Qué es la plataforma Mercurio y qué papel tiene en la regularización extraordinaria?",
    answer:
      "Mercurio es la plataforma única del Ministerio de Inclusión, Seguridad Social y Migraciones diseñada exclusivamente para la tramitación del proceso de regularización extraordinaria 2026. A través de Mercurio se presenta toda la documentación requerida: antecedentes, justificación de permanencia y pruebas del vínculo social, laboral o político que fundamenta la solicitud. La Unidad de Tramitación de Expedientes de Extranjería (UTEX) utiliza Mercurio para revisar expedientes, solicitar subsanaciones cuando es necesario, y emitir la resolución de autorización inicial de residencia y trabajo de duración de un año con acceso a la Seguridad Social.",
  },
];
