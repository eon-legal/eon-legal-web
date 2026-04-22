import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";

const pageTitle = "Aviso legal";
const pageDescription =
  "Información legal del titular del sitio web conforme al artículo 10 de la Ley 34/2002 (LSSI-CE): identidad, domicilio, contacto, objeto social y condiciones de uso.";
const lastUpdated = "22 de abril de 2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/aviso-legal" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/aviso-legal",
    type: "article",
    locale: siteConfig.locale,
  },
  robots: { index: true, follow: true },
};

export default function AvisoLegalPage(): React.ReactElement {
  const jsonLd = [
    webPageSchema({
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}/aviso-legal`,
    }),
    breadcrumbSchema([
      { name: "Inicio", url: "/" },
      { name: pageTitle, url: "/aviso-legal" },
    ]),
  ];

  return (
    <LegalPageLayout
      eyebrow="Información legal"
      title={pageTitle}
      description={pageDescription}
      lastUpdated={lastUpdated}
      jsonLd={jsonLd}
    >
      <h2>1. Titular del sitio web</h2>
      <p>
        En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002, de
        11 de julio, de Servicios de la Sociedad de la Información y de
        Comercio Electrónico (LSSI-CE), se informa de los siguientes datos del
        titular de este sitio web:
      </p>
      <dl>
        <dt>Denominación</dt>
        <dd>{siteConfig.name}</dd>
        <dt>Domicilio</dt>
        <dd>
          {siteConfig.contact.address}, {siteConfig.contact.postalCode}{" "}
          {siteConfig.contact.city} ({siteConfig.contact.region}),{" "}
          {siteConfig.contact.country}
        </dd>
        <dt>Correo</dt>
        <dd>
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </dd>
        <dt>Teléfono</dt>
        <dd>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
            {siteConfig.contact.phone}
          </a>
        </dd>
      </dl>
      <p>
        Los datos de colegiación profesional del letrado responsable (número de
        colegiado y Colegio de Abogados competente) se facilitan previa
        solicitud al correo de contacto.
      </p>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web tiene por objeto informar sobre los servicios
        jurídicos prestados por {siteConfig.name} en materia de extranjería,
        nacionalidad, residencia y trámites administrativos conexos, así como
        facilitar un canal de contacto con potenciales clientes.
      </p>
      <p>
        El acceso y uso del sitio web implican la aceptación plena de las
        condiciones recogidas en este aviso legal. La información publicada
        tiene carácter meramente orientativo y no sustituye el asesoramiento
        jurídico personalizado, que requerirá el encargo profesional
        correspondiente.
      </p>

      <h2>3. Propiedad intelectual e industrial</h2>
      <p>
        Todos los contenidos del sitio web —incluyendo textos, marcas, logotipo,
        diseño, código fuente y elementos gráficos— son titularidad de{" "}
        {siteConfig.name} o de terceros que han autorizado su uso. Queda
        prohibida su reproducción, distribución, comunicación pública o
        transformación sin autorización expresa y por escrito del titular.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        {siteConfig.name} realiza sus mejores esfuerzos para mantener la
        información actualizada y libre de errores, pero no garantiza la
        ausencia de inexactitudes ni la disponibilidad ininterrumpida del
        sitio. En particular, no se asume responsabilidad por el uso que los
        usuarios puedan hacer de los contenidos ni por las decisiones adoptadas
        con base en ellos sin contar con asesoramiento profesional específico.
      </p>

      <h2>5. Enlaces a sitios de terceros</h2>
      <p>
        Los enlaces a sitios externos se proporcionan exclusivamente con fines
        informativos. {siteConfig.name} no controla su contenido ni se
        responsabiliza de las prácticas, políticas o servicios de los sitios
        enlazados.
      </p>

      <h2>6. Legislación aplicable y jurisdicción</h2>
      <p>
        Este aviso legal se rige por la legislación española. Para la
        resolución de cualquier controversia derivada del acceso o uso del
        sitio web serán competentes los Juzgados y Tribunales de{" "}
        {siteConfig.contact.city}, salvo que la normativa aplicable disponga
        otra cosa.
      </p>
    </LegalPageLayout>
  );
}
