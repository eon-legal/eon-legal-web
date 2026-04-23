import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/i18n/config";

interface AvisoLegalBodyProps {
  readonly locale: Locale;
}

export function AvisoLegalBody({
  locale,
}: AvisoLegalBodyProps): React.ReactElement {
  return locale === "en" ? <BodyEn /> : <BodyEs />;
}

function BodyEs(): React.ReactElement {
  return (
    <>
      <h2>1. Titular del sitio web</h2>
      <p>
        En cumplimiento de lo dispuesto en el artículo 10 de la Ley 34/2002,
        de 11 de julio, de Servicios de la Sociedad de la Información y de
        Comercio Electrónico (LSSI-CE), se informa de los siguientes datos
        del titular de este sitio web:
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
        Los datos de colegiación profesional del letrado responsable (número
        de colegiado y Colegio de Abogados competente) se facilitan previa
        solicitud al correo de contacto.
      </p>

      <h2>2. Objeto</h2>
      <p>
        El presente sitio web tiene por objeto informar sobre los servicios
        jurídicos prestados por {siteConfig.name} en materia de extranjería,
        nacionalidad, residencia y trámites administrativos conexos, así
        como facilitar un canal de contacto con potenciales clientes.
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
        Todos los contenidos del sitio web —incluyendo textos, marcas,
        logotipo, diseño, código fuente y elementos gráficos— son
        titularidad de {siteConfig.name} o de terceros que han autorizado su
        uso. Queda prohibida su reproducción, distribución, comunicación
        pública o transformación sin autorización expresa y por escrito del
        titular.
      </p>

      <h2>4. Responsabilidad</h2>
      <p>
        {siteConfig.name} realiza sus mejores esfuerzos para mantener la
        información actualizada y libre de errores, pero no garantiza la
        ausencia de inexactitudes ni la disponibilidad ininterrumpida del
        sitio. En particular, no se asume responsabilidad por el uso que los
        usuarios puedan hacer de los contenidos ni por las decisiones
        adoptadas con base en ellos sin contar con asesoramiento profesional
        específico.
      </p>

      <h2>5. Enlaces a sitios de terceros</h2>
      <p>
        Los enlaces a sitios externos se proporcionan exclusivamente con
        fines informativos. {siteConfig.name} no controla su contenido ni se
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
    </>
  );
}

function BodyEn(): React.ReactElement {
  return (
    <>
      <h2>1. Website owner</h2>
      <p>
        Pursuant to article 10 of Spanish Law 34/2002, of 11 July, on
        Information Society Services and Electronic Commerce (LSSI-CE), the
        following information is provided about the owner of this website:
      </p>
      <dl>
        <dt>Name</dt>
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
        <dt>Phone</dt>
        <dd>
          <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}>
            {siteConfig.contact.phone}
          </a>
        </dd>
      </dl>
      <p>
        Professional registration details of the responsible lawyer (Bar
        number and competent Bar Association) are available upon request at
        the contact email.
      </p>

      <h2>2. Purpose</h2>
      <p>
        This website is intended to inform about the legal services
        provided by {siteConfig.name} in the fields of immigration,
        citizenship, residency and related administrative procedures, and
        to facilitate a contact channel with potential clients.
      </p>
      <p>
        Access to and use of this website entails full acceptance of the
        terms set out in this legal notice. The information published is
        for guidance only and does not replace personalised legal advice,
        which requires a corresponding professional engagement.
      </p>

      <h2>3. Intellectual and industrial property</h2>
      <p>
        All contents of the website —including texts, trademarks, logo,
        design, source code and graphic elements— are owned by{" "}
        {siteConfig.name} or by third parties that have authorised their
        use. Their reproduction, distribution, public communication or
        transformation is prohibited without express written authorisation
        from the owner.
      </p>

      <h2>4. Liability</h2>
      <p>
        {siteConfig.name} makes reasonable efforts to keep the information
        up to date and free of errors, but does not guarantee the absence
        of inaccuracies or the uninterrupted availability of the website.
        In particular, no liability is assumed for the use users may make
        of the contents or for decisions taken based on them without
        obtaining specific professional advice.
      </p>

      <h2>5. Links to third-party sites</h2>
      <p>
        Links to external websites are provided for informational purposes
        only. {siteConfig.name} does not control their content and is not
        responsible for the practices, policies or services of the linked
        sites.
      </p>

      <h2>6. Applicable law and jurisdiction</h2>
      <p>
        This legal notice is governed by Spanish law. Any dispute arising
        from access to or use of the website shall be submitted to the
        Courts and Tribunals of {siteConfig.contact.city}, unless otherwise
        provided by applicable regulations.
      </p>
    </>
  );
}
