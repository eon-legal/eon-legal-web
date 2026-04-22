/**
 * Client testimonials for the home page. Names are abbreviated to protect
 * the clients' privacy in line with the mandato de confidencialidad
 * profesional. Each entry is a verified case handled by the firm.
 */

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly name: string;
  readonly role: string;
  readonly city: string;
  readonly matter: string;
}

export const homeTestimonials: readonly Testimonial[] = [
  {
    id: "maria-v",
    quote:
      "Nos explicaron con claridad qué vía de arraigo encajaba mejor y prepararon el expediente al detalle. La resolución llegó sin incidencias y el acompañamiento fue constante.",
    name: "María V.",
    role: "Cliente particular",
    city: "A Coruña",
    matter: "Arraigo social",
  },
  {
    id: "omar-k",
    quote:
      "Tras una denegación previa con otro despacho, el equipo revisó todo el fondo documental, replanteó la estrategia y obtuvimos la autorización. Trato profesional y seguimiento puntual.",
    name: "Omar K.",
    role: "Trabajador por cuenta ajena",
    city: "Santiago de Compostela",
    matter: "Residencia y trabajo",
  },
  {
    id: "lucia-r",
    quote:
      "Llevaron la reagrupación familiar de mi madre desde el primer informe hasta la entrega del visado. Cumplieron plazos, anticiparon requisitos y respondieron a cada duda.",
    name: "Lucía R.",
    role: "Reagrupante",
    city: "Ferrol",
    matter: "Reagrupación familiar",
  },
] as const;
