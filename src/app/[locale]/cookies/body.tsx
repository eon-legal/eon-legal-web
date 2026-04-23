import { siteConfig } from "@/lib/config";
import type { Locale } from "@/lib/i18n/config";

interface CookiesBodyProps {
  readonly locale: Locale;
}

export function CookiesBody({
  locale,
}: CookiesBodyProps): React.ReactElement {
  return locale === "en" ? <BodyEn /> : <BodyEs />;
}

function BodyEs(): React.ReactElement {
  return (
    <>
      <h2>1. ¿Qué son las cookies?</h2>
      <p>
        Las cookies son pequeños archivos que los sitios web almacenan en el
        navegador del usuario para permitir el funcionamiento del sitio,
        recordar preferencias o medir el uso de forma agregada. Esta
        política explica las cookies que emplea {siteConfig.name} y las
        opciones disponibles para su gestión.
      </p>

      <h2>2. Base jurídica</h2>
      <p>
        El uso de cookies se regula por el artículo 22.2 de la Ley 34/2002
        (LSSI-CE) y por las directrices de la Agencia Española de
        Protección de Datos (AEPD). Las cookies estrictamente necesarias no
        requieren consentimiento; el resto sólo se instalan tras una acción
        afirmativa del usuario.
      </p>

      <h2>3. Tipología de cookies utilizadas</h2>
      <ul>
        <li>
          <strong>Técnicas (exentas):</strong> imprescindibles para
          mantener la sesión, gestionar la preferencia de idioma y permitir
          la navegación segura del sitio.
        </li>
        <li>
          <strong>De preferencia:</strong> conservan elecciones del usuario
          (por ejemplo, el idioma seleccionado) para mejorar su
          experiencia. Se instalan sólo con su consentimiento.
        </li>
        <li>
          <strong>Analíticas:</strong> permiten medir de forma agregada y
          anonimizada el uso del sitio para mejorar sus contenidos. Se
          instalan únicamente tras aceptación expresa.
        </li>
      </ul>

      <h2>4. Conservación</h2>
      <p>
        Las cookies técnicas se mantienen mientras dura la sesión o por el
        tiempo necesario para cumplir su finalidad. Las cookies de
        preferencia y analíticas tienen una duración máxima de doce meses,
        transcurridos los cuales se solicita nuevamente el consentimiento.
      </p>

      <h2>5. Gestión y retirada del consentimiento</h2>
      <p>
        El usuario puede configurar su navegador para bloquear o eliminar
        las cookies en cualquier momento. La retirada del consentimiento
        no afecta a la licitud del tratamiento previo. Puede obtener
        información detallada en la ayuda de su navegador o en la web de
        la AEPD (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">
          www.aepd.es
        </a>
        ).
      </p>

      <h2>6. Contacto</h2>
      <p>
        Para cualquier consulta sobre el uso de cookies puede escribir a{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </>
  );
}

function BodyEn(): React.ReactElement {
  return (
    <>
      <h2>1. What are cookies?</h2>
      <p>
        Cookies are small files that websites store on the user&apos;s
        browser to enable the site to function, remember preferences, or
        measure usage in aggregate. This policy explains the cookies used
        by {siteConfig.name} and the options available to manage them.
      </p>

      <h2>2. Legal basis</h2>
      <p>
        The use of cookies is governed by article 22.2 of Spanish Law
        34/2002 (LSSI-CE) and the guidelines of the Spanish Data
        Protection Agency (AEPD). Strictly necessary cookies do not
        require consent; all others are only installed following an
        affirmative action by the user.
      </p>

      <h2>3. Types of cookies used</h2>
      <ul>
        <li>
          <strong>Technical (exempt):</strong> essential to maintain the
          session, manage the language preference and enable safe browsing
          of the site.
        </li>
        <li>
          <strong>Preference:</strong> retain user choices (e.g. selected
          language) to improve the experience. Installed only with
          consent.
        </li>
        <li>
          <strong>Analytics:</strong> allow aggregated, anonymised
          measurement of site usage to improve its content. Installed only
          after explicit acceptance.
        </li>
      </ul>

      <h2>4. Retention</h2>
      <p>
        Technical cookies are kept for the duration of the session or for
        the time needed to fulfil their purpose. Preference and analytics
        cookies have a maximum duration of twelve months, after which
        consent is requested again.
      </p>

      <h2>5. Managing and withdrawing consent</h2>
      <p>
        Users may configure their browser to block or delete cookies at
        any time. Withdrawing consent does not affect the lawfulness of
        prior processing. Detailed information is available in the
        browser&apos;s help section or on the AEPD website (
        <a href="https://www.aepd.es" target="_blank" rel="noreferrer noopener">
          www.aepd.es
        </a>
        ).
      </p>

      <h2>6. Contact</h2>
      <p>
        For any questions regarding the use of cookies you may write to{" "}
        <a href={`mailto:${siteConfig.contact.email}`}>
          {siteConfig.contact.email}
        </a>
        .
      </p>
    </>
  );
}
