import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/i18n/config";

interface PrivacidadBodyProps {
  readonly locale: Locale;
}

export function PrivacidadBody({
  locale,
}: PrivacidadBodyProps): React.ReactElement {
  return locale === "en" ? <BodyEn /> : <BodyEs />;
}

function BodyEs(): React.ReactElement {
  return (
    <>
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
        Los datos personales facilitados a través del formulario de
        contacto, correo electrónico o teléfono se tratan con las
        siguientes finalidades:
      </p>
      <ul>
        <li>
          Atender consultas y solicitudes de información remitidas por el
          usuario.
        </li>
        <li>
          Prestar los servicios jurídicos contratados y gestionar la
          relación profesional durante su vigencia.
        </li>
        <li>
          Cumplir las obligaciones legales derivadas del ejercicio de la
          abogacía y de la normativa fiscal y contable.
        </li>
      </ul>

      <h2>3. Base jurídica</h2>
      <p>
        El tratamiento se legitima, según corresponda, en: (i) el
        consentimiento del interesado (art. 6.1.a RGPD) para las
        comunicaciones informativas; (ii) la ejecución de un contrato o de
        medidas precontractuales (art. 6.1.b RGPD) cuando se contrata un
        servicio; y (iii) el cumplimiento de obligaciones legales
        aplicables al responsable (art. 6.1.c RGPD).
      </p>

      <h2>4. Destinatarios y cesiones</h2>
      <p>
        Los datos no se cederán a terceros salvo por obligación legal o
        cuando resulte necesario para la ejecución del encargo profesional
        (por ejemplo, presentación de escritos ante administraciones
        públicas, juzgados o consulados). {siteConfig.name} utiliza
        proveedores de servicios tecnológicos (hosting, correo y analítica)
        que actúan como encargados del tratamiento bajo las garantías
        exigidas por el RGPD.
      </p>

      <h2>5. Transferencias internacionales</h2>
      <p>
        Cuando algún encargado del tratamiento esté ubicado fuera del
        Espacio Económico Europeo, se aplicarán las garantías adecuadas
        previstas por el RGPD (decisiones de adecuación o cláusulas
        contractuales tipo).
      </p>

      <h2>6. Conservación</h2>
      <p>
        Los datos se conservarán mientras se mantenga la relación
        profesional y, posteriormente, durante los plazos legalmente
        exigibles para atender responsabilidades derivadas del servicio
        prestado (en particular, los establecidos por la normativa fiscal,
        mercantil y deontológica de la abogacía).
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
        {siteConfig.name} aplica medidas técnicas y organizativas adecuadas
        al riesgo del tratamiento para preservar la confidencialidad,
        integridad y disponibilidad de los datos personales, incluyendo el
        deber de secreto profesional del letrado.
      </p>
    </>
  );
}

function BodyEn(): React.ReactElement {
  return (
    <>
      <h2>1. Data controller</h2>
      <dl>
        <dt>Controller</dt>
        <dd>{siteConfig.name}</dd>
        <dt>Address</dt>
        <dd>
          {siteConfig.contact.address}, {siteConfig.contact.postalCode}{" "}
          {siteConfig.contact.city} ({siteConfig.contact.region}), Spain
        </dd>
        <dt>Email</dt>
        <dd>
          <a href={`mailto:${siteConfig.contact.email}`}>
            {siteConfig.contact.email}
          </a>
        </dd>
      </dl>

      <h2>2. Purposes of processing</h2>
      <p>
        Personal data provided via the contact form, email or phone are
        processed for the following purposes:
      </p>
      <ul>
        <li>Responding to enquiries and requests for information.</li>
        <li>
          Providing the contracted legal services and managing the
          professional relationship.
        </li>
        <li>
          Complying with legal obligations arising from the practice of law
          and from applicable tax and accounting rules.
        </li>
      </ul>

      <h2>3. Lawful basis</h2>
      <p>
        Processing is based, as applicable, on: (i) the consent of the data
        subject (art. 6.1.a GDPR) for informational communications; (ii)
        the performance of a contract or pre-contractual measures (art.
        6.1.b GDPR) when a service is engaged; and (iii) compliance with
        legal obligations of the controller (art. 6.1.c GDPR).
      </p>

      <h2>4. Recipients and disclosures</h2>
      <p>
        Data will not be disclosed to third parties except where legally
        required or where necessary to carry out the professional
        engagement (e.g. filing submissions with public authorities,
        courts or consulates). {siteConfig.name} uses technology service
        providers (hosting, email and analytics) acting as processors
        under the safeguards required by the GDPR.
      </p>

      <h2>5. International transfers</h2>
      <p>
        Where a processor is located outside the European Economic Area,
        the appropriate safeguards provided by the GDPR will apply
        (adequacy decisions or standard contractual clauses).
      </p>

      <h2>6. Retention</h2>
      <p>
        Data will be retained for as long as the professional relationship
        is maintained and, subsequently, for the periods required by law
        to address liabilities arising from the service provided (in
        particular, those set out in tax, commercial and Bar Association
        deontological rules).
      </p>

      <h2>7. Rights</h2>
      <p>
        Data subjects may exercise their rights of access, rectification,
        erasure, objection, restriction of processing and portability by
        writing to{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        , enclosing a copy of an identification document.
      </p>
      <p>
        They also have the right to lodge a complaint with the Spanish
        Data Protection Agency (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">
          www.aepd.es
        </a>
        ) if they consider that the processing does not comply with
        applicable law.
      </p>

      <h2>8. Security measures</h2>
      <p>
        {siteConfig.name} applies technical and organisational measures
        appropriate to the risk of the processing to preserve the
        confidentiality, integrity and availability of personal data,
        including the lawyer&apos;s professional duty of secrecy.
      </p>
    </>
  );
}
