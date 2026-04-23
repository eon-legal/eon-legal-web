/**
 * Client testimonials for the home page. Transcribed verbatim from the
 * firm's verified Google Business profile. No case details are shown,
 * in line with the mandato de confidencialidad profesional.
 */

export interface Testimonial {
  readonly id: string;
  readonly quote: string;
  readonly name: string;
  readonly rating: number;
}

export const homeTestimonials: readonly Testimonial[] = [
  {
    id: "diana-perez",
    quote:
      "Felicidades a este equipo. Muchas gracias por haberme ayudado con todos mis trámites y por haber aclarado con paciencia y profesionalidad todas nuestras dudas. Sin duda los volveremos a contratar. Un saludo.",
    name: "Diana Pérez",
    rating: 5,
  },
  {
    id: "diana-jordan",
    quote:
      "Son muy profesionales y me han ayudado muchísimo con mis trámites. Siempre me respondieron en tiempo y me acompañaron muy profesionalmente durante todo el tiempo. Muchas gracias siempre por la ayuda.",
    name: "Diana Jordan",
    rating: 5,
  },
  {
    id: "viene-perez",
    quote:
      "Estoy encantada con el trato de estas profesionales, extremadamente confiables, con una comunicación muy asertiva y resolución sinceramente eficaz y transparente. Las recomiendo 200%.",
    name: "Viene Pérez",
    rating: 5,
  },
] as const;
