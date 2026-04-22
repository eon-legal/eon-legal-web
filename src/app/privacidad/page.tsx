import type { Metadata } from "next";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";
import { siteConfig } from "@/lib/config";
import { breadcrumbSchema, webPageSchema } from "@/lib/seo/jsonld";

const pageTitle = "Política de privacidad";
const pageDescription =
  "Información sobre el tratamiento de datos personales conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 (LOPDGDD): responsable, finalidades, legitimación, destinatarios, conservación y derechos.";
const lastUpdated = "22 de abril de 2026";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: "/privacidad" },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: "/privacidad",
    type: "article",
    locale: siteConfig.locale,
  },
  robots: { index: true, follow: true },
};

export default function PrivacidadPage(): React.ReactElement {
  const jsonLd = [
    webPageSchema({
      title: pageTitle,
      description: pageDescription,
      url: `${siteConfig.url}/privacidad`,
    }),
    breadcrumbSchema([
      { name: "Inicio", url: "/" },
      { name: pageTitle, url: "/privacidad" },
    ]),
  ];

  return (
    <LegalPageLayout
      eyebrow="Protección de datos"
      title={pageTitle}
      description={pageDescription}
      lastUpdated={lastUpdated}
      jsonLd={jsonLd}
    >
      <h2>1. Responsable del tratamiento</h2>
      <dl>
        <dt>Responsable</dt>
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
      </dl>

      <h2>2. Finalidades del tratamiento</h2>
      <p>
        Los datos personales facilitados a través del formulario de contacto,
        correo electrónico o teléfono se tratan con las siguientes finalidades:
      </p>
      <ul>
        <li>
          Atender consultas y solicitudes de información remitidas por el
          usuario.
        </li>
        <li>
          Prestar los servicios jurídicos contratados y gestionar la relación
          profesional durante su vigencia.
        </li>
        <li>
          Cumplir las obligaciones legales derivadas del ejercicio de la
          abogacía y de la normativa fiscal y contable.
        </li>
      </ul>

      <h2>3. Base jurídica</h2>
      <p>
        El tratamiento se legitima, según corresponda, en: (i) el consentimiento
        del interesado (art. 6.1.a RGPD) para las comunicaciones informativas;
        (ii) la ejecución de un contrato o de medidas precontractuales (art.
        6.1.b RGPD) cuando se contrata un servicio; y (iii) el cumplimiento de
        obligaciones legales aplicables al responsable (art. 6.1.c RGPD).
      </p>

      <h2>4. Destinatarios y cesiones</h2>
      <p>
        Los datos no se cederán a terceros salvo por obligación legal o cuando
        resulte necesario para la ejecución del encargo profesional (por
        ejemplo, presentación de escritos ante administraciones públicas,
        juzgados o consulados). {siteConfig.name} utiliza proveedores de
        servicios tecnológicos (hosting, correo y analítica) que actúan como
        encargados del tratamiento bajo las garantías exigidas por el RGPD.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Cuando algún encargado del tratamiento esté ubicado fuera del Espacio
        Económico Europeo, se aplicarán las garantías adecuadas previstas por
        el RGPD (decisiones de adecuación o cláusulas contractuales tipo).
      </p>

      <h2>6. Conservación</h2>
      <p>
        Los datos se conservarán mientras se mantenga la relación profesional y,
        posteriormente, durante los plazos legalmente exigibles para atender
        responsabilidades derivadas del servicio prestado (en particular, los
        establecidos por la normativa fiscal, mercantil y deontológica de la
        abogacía).
      </p>

      <h2>7. Derechos</h2>
      <p>
        El interesado puede ejercer los derechos de acceso, rectificación,
        supresión, oposición, limitación del tratamiento y portabilidad
        dirigiéndose por escrito al correo{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        , acompañando copia de un documento identificativo.
      </p>
      <p>
        Asimismo, tiene derecho a presentar una reclamación ante la Agencia
        Española de Protección de Datos (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">
          www.aepd.es
        </a>
        ) cuando considere que el tratamiento no se ajusta a la normativa
        vigente.
      </p>

      <h2>8. Medidas de seguridad</h2>
      <p>
        {siteConfig.name} aplica medidas técnicas y organizativas adecuadas al
        riesgo del tratamiento para preservar la confidencialidad, integridad y
        disponibilidad de los datos personales, incluyendo el deber de secreto
        profesional del letrado.
      </p>
    </LegalPageLayout>
  );
}
