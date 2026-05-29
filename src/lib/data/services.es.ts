/**
 * Contenido en español del catálogo de servicios. Consumido por
 * `src/lib/data/services.ts` según el `Locale` activo.
 */

import type { LocalizedServiceContent } from "@/lib/data/services";

export const servicesContentEs: Readonly<
  Record<string, LocalizedServiceContent>
> = {
  residencia: {
    title: "Autorizaciones de residencia en España: empleado, autónomo y reagrupación",
    metaTitle: "Autorización de residencia en España: empleado y autónomo",
    shortTitle: "Residencia",
    metaDescription:
      "Autorización de residencia en España: cuenta ajena (empleado), cuenta propia (autónomo) y reagrupación familiar 2026. Plazo legal y documentos. Consulta gratis.",
    summary:
      "Autorizaciones de residencia y trabajo: empleado (cuenta ajena), autónomo (cuenta propia), reagrupación familiar y larga duración en España.",
    longDescription: [
      { h3: "Tipos de autorización de residencia" },
      "La autorización de residencia es la vía legal principal para que personas extranjeras vivan y trabajen en España, regulada por la Ley Orgánica 4/2000 y su Reglamento (Real Decreto 557/2011). Las autorizaciones se dividen en dos categorías: temporal (1–3 años, renovable) y larga duración (indefinida). Dentro de la residencia temporal, las principales vías son: (1) Empleado (cuenta ajena) — vinculada a contrato laboral específico; (2) Autónomo (cuenta propia) — requiere plan de negocio y viabilidad económica; (3) Reagrupación familiar — familiares dependientes de un residente o ciudadano español; (4) Inversor/emprendedor — inversión significativa o creación empresarial.",
      { h3: "Plazos de tramitación" },
      "El plazo legal de resolución es de 3 meses desde la presentación completa ante la Oficina de Extranjería, aunque la resolución efectiva suele extenderse entre 4 y 8 meses. Tras 5 años de residencia continuada con permiso temporal, los solicitantes pueden acceder a la larga duración, que elimina la necesidad de renovación y autoriza la libre circulación en el espacio Schengen.",
      { h3: "Cómo gestionamos tu expediente" },
      "En Eon Legal, gestionamos el ciclo completo: valoración de viabilidad inicial, coordinación documental en origen (contratos, certificados de nacimiento, justificación de medios), traducciones juradas y apostilla, presentación telemática ante la Oficina de Extranjería competente, y tramitación de requerimientos administrativos o procedimientos de renovación.",
      "Las barreras comunes de aprobación incluyen justificación insuficiente de medios, denegación de prueba de mercado laboral (para visados de empleado) y problemas de autenticación documental — anticipamos y resolvemos estos obstáculos de forma proactiva.",
    ],
    highlights: [
      "Residencia como empleado (cuenta ajena): vinculada a contrato laboral, renovación anual",
      "Residencia como autónomo (cuenta propia): plan de negocio + prueba de viabilidad económica, valoración anual",
      "Reagrupación familiar: cónyuge, hijos, ascendientes o descendientes en situación de dependencia",
      "Larga duración (LD): estatus indefinido tras 5 años de residencia temporal continuada",
      "Larga duración-UE (LD-UE): para familiares de ciudadanos UE, derechos de circulación más flexibles",
    ],
    requirements: [
      "Pasaporte válido (mínimo 4 meses de validez más allá del período de estancia)",
      "Certificado de antecedentes penales del país de origen apostillado o legalizado",
      "Contrato de trabajo (para ruta de empleado) o plan de negocio (para autónomos)",
      "Justificación de medios económicos suficientes: mínimo €20.430/año (se actualiza anualmente)",
      "Carta de contratación de empleador español o documentos de registro de empresa (autónomos)",
      "Certificado médico (formulario TW.2 de autoridad sanitaria española para solicitantes de larga duración)",
      "Para reagrupación familiar: certificado de matrimonio, certificados de nacimiento, prueba de situación de dependencia (menores)",
      "Justificación de alojamiento: contrato de alquiler, escritura de propiedad o certificado de vivienda oficial",
      "Seguro médico público o privado con cobertura equivalente al Sistema Nacional de Salud",
      "Para renovaciones: prueba de actividad laboral continuada o actividad empresarial; documentación financiera actualizada",
      "Para paso a larga duración: justificación de 5 años de residencia continuada (certificados de empadronamiento, documentación de autorizaciones previas)",
    ],
    sources: [
      { label: "Ley Orgánica 4/2000 de extranjería", url: "https://www.boe.es/eli/es/lo/2000/01/11/4/con" },
      { label: "Real Decreto 557/2011 — Reglamento de extranjería", url: "https://www.boe.es/eli/es/rd/2011/04/20/557/con" },
      { label: "Ministerio de Inclusión — Trámites de extranjería", url: "https://www.inclusion.gob.es/web/migraciones/en-tu-pais/tramites" },
    ],
    faqs: [
      {
        question: "¿Cuánto tarda en resolverse una autorización de residencia en España?",
        answer: "El plazo legal de resolución es de 3 meses desde la presentación completa del expediente ante la Oficina de Extranjería, aunque en la práctica la resolución efectiva suele extenderse entre 4 y 8 meses según la comunidad autónoma y el volumen de solicitudes. En Eon Legal realizamos un seguimiento proactivo del expediente, respondemos a requerimientos administrativos en plazo y adelantamos posibles incidencias documentales para minimizar demoras.",
      },
      {
        question: "¿Puedo trabajar mientras tramito mi autorización de residencia?",
        answer: "Depende del tipo de autorización solicitada. Las autorizaciones de residencia y trabajo (cuenta ajena y cuenta propia) incluyen habilitación laboral desde la resolución favorable. Sin embargo, las autorizaciones de residencia sin trabajo (reagrupación familiar, larga duración inicial) requieren solicitar por separado la modificación que incluya autorización de trabajo si se desea realizar actividad laboral remunerada.",
      },
      {
        question: "¿Qué pasa si me deniegan la autorización de residencia?",
        answer: "Existen dos vías de impugnación: el recurso de reposición ante la misma Oficina de Extranjería, que debe interponerse en el plazo de 1 mes desde la notificación, y el recurso contencioso-administrativo ante los tribunales, con un plazo de 2 meses. Eon Legal gestiona ambos procedimientos, analiza los motivos de denegación y prepara la argumentación jurídica y documental para revertir la resolución.",
      },
      {
        question: "¿Cuánto dinero necesito acreditar para la autorización de residencia?",
        answer: "Para la autorización de residencia individual se exige un mínimo de €20.430 anuales, cifra que se actualiza cada año conforme al IPREM. En supuestos de reagrupación familiar el umbral se incrementa en función del número de personas a cargo. La acreditación puede realizarse mediante extracto bancario, nóminas, pensión o cualquier fuente de ingresos documentada.",
      },
    ],
    relatedServices: ["arraigo", "visados", "familiares-ue"],
  },
  arraigo: {
    title: "Arraigo: social, laboral, familiar y para la formación",
    metaTitle: "Arraigo social, laboral y familiar en España: guía 2026",
    shortTitle: "Arraigo",
    metaDescription:
      "Arraigo social, laboral y familiar en España 2026. Requisitos, documentos y plazo legal de tramitación. Abogados especializados en A Coruña. Consulta gratis.",
    summary:
      "Arraigo social, laboral, familiar y para la formación: vías de regularización para personas extranjeras que acreditan vínculos establecidos en España.",
    longDescription: [
      { h3: "Vías de arraigo disponibles" },
      "El arraigo es una vía de regularización por circunstancias excepcionales conforme a los Artículos 51 y 52 de la Ley Orgánica 4/2000, que permite a personas extranjeras obtener una autorización de residencia acreditando vínculos continuados en España sin autorización previa. Existen cuatro vías: arraigo social (2 años de residencia + informe de inserción social), arraigo laboral (relación laboral de 6 meses), arraigo familiar (vínculo familiar documentado) y arraigo para la formación (estatus de estudiante).",
      { h3: "Plazos y probabilidad de éxito" },
      "El plazo legal de resolución es de 3 meses desde la presentación completa ante la Oficina de Extranjería, aunque las resoluciones efectivas suelen extenderse entre 6 y 12 meses debido a requerimientos administrativos. Las tasas de aprobación para expedientes bien documentados rondan el 65–75%.",
      "En Eon Legal, valoramos individualmente cuál es la vía de arraigo más viable para tu situación, recopilamos la documentación probatoria (certificados de empadronamiento, contratos de trabajo, antecedentes penales, informes sociales), presentamos el expediente telemáticamente ante la Oficina de Extranjería competente, y te representamos en requerimientos administrativos, recursos de reposición o procedimientos contencioso-administrativos si es necesario.",
    ],
    highlights: [
      "Arraigo social: 2 años de residencia continuada + informe de inserción social de la comunidad autónoma",
      "Arraigo laboral: 6 meses de relación laboral probada (sentencia judicial, acta de Inspección de Trabajo o resolución administrativa)",
      "Arraigo familiar: vínculo familiar documentado + mediación comunitaria o informe oficial acreditativo",
      "Arraigo para la formación: estudiante matriculado con 2 o más años de residencia acumulada en España",
    ],
    requirements: [
      "Pasaporte o documento de viaje válido; copia del NIE si ya consta inscrito",
      "Certificados de empadronamiento cubriendo todo el período reclamado (2 años, 6 meses o 1 año según la vía)",
      "Certificado de antecedentes penales de España (Policía Nacional) y del país de origen, apostillado",
      "Para arraigo social: informe de inserción social de la comunidad autónoma o documentación equivalente; contrato de trabajo firmado (mínimo 1 año)",
      "Para arraigo laboral: sentencia judicial, acta de Inspección de Trabajo o resolución administrativa que acredite 6 o más meses de relación laboral",
      "Para arraigo familiar: certificado de matrimonio o certificado de pareja de hecho registrada, certificado de nacimiento; documentación del familiar residente o ciudadano español",
      "Para arraigo para la formación: certificado de matriculación y prueba de estatus de estudiante durante todo el período de residencia",
      "Declaraciones juradas de 3-4 testigos con conocimiento que se remonte 2 o más años atrás (si no se dispone de informe de arraigo social)",
      "Para recursos: justificación de la presentación del escrito de recursos ante el Registro Electrónico (REUE) dentro del mes siguiente a la resolución",
    ],
    sources: [
      { label: "Ley Orgánica 4/2000 de extranjería", url: "https://www.boe.es/eli/es/lo/2000/01/11/4/con" },
      { label: "Real Decreto 557/2011 — Reglamento de extranjería", url: "https://www.boe.es/eli/es/rd/2011/04/20/557/con" },
      { label: "Ministerio de Inclusión — Trámites de extranjería", url: "https://www.inclusion.gob.es/web/migraciones/en-tu-pais/tramites" },
    ],
    faqs: [
      {
        question: "¿Cuál es la diferencia entre arraigo social y arraigo laboral?",
        answer: "El arraigo social requiere acreditar 2 años de residencia continuada en España más un informe de inserción social emitido por la comunidad autónoma, junto con un contrato de trabajo de al menos 1 año. El arraigo laboral exige demostrar una relación laboral de al menos 6 meses mediante sentencia judicial, acta de la Inspección de Trabajo o resolución administrativa. La documentación requerida y los plazos de tramitación difieren sustancialmente entre ambas vías.",
      },
      {
        question: "¿Qué alternativas existen si no tengo informe de arraigo social?",
        answer: "En algunos casos, declaraciones juradas de 3 o 4 testigos con conocimiento acreditado de la situación del solicitante, acompañadas de documentación probatoria suficiente (contratos de alquiler, facturas, empadronamientos), pueden complementar o reforzar el expediente cuando el informe oficial de inserción social no está disponible o es negativo. Eon Legal evalúa la viabilidad real del expediente antes de presentarlo para evitar resoluciones desfavorables.",
      },
      {
        question: "¿El arraigo autoriza a trabajar en España?",
        answer: "Sí. El arraigo social y el arraigo laboral incluyen autorización de trabajo desde la concesión. El arraigo para la formación, sin embargo, no incluye automáticamente habilitación laboral; el titular debe solicitar por separado la modificación que incorpore la autorización de trabajo una vez concluida la formación o cumplidos los requisitos.",
      },
      {
        question: "¿Cuántas veces se puede solicitar el arraigo?",
        answer: "No existe un límite legal en el número de solicitudes de arraigo. Sin embargo, cada resolución denegatoria crea antecedentes administrativos y puede dificultar solicitudes posteriores si no se presenta documentación sustancialmente mejorada o nuevos fundamentos. Eon Legal recomienda preparar un expediente sólido desde la primera solicitud para maximizar las probabilidades de éxito.",
      },
    ],
    relatedServices: ["residencia", "regularizacion-2026"],
  },
  visados: {
    title: "Visados para España: trabajo, estudios, no lucrativo y familia",
    metaTitle: "Visados para España: trabajo, estudios y familia 2026",
    shortTitle: "Visados",
    metaDescription:
      "Visados para España: trabajo, estudios, no lucrativo, familia. Coordinación consular y revisión de viabilidad. Plazo legal y documentos. Consulta gratis.",
    summary:
      "Visados de trabajo, estudios, no lucrativo, emprendedor y familiar de ciudadano español tramitados en coordinación con los consulados españoles.",
    longDescription: [
      { h3: "Tipos de visado de larga duración" },
      "El visado es el requisito previo obligatorio para que personas extranjeras puedan entrar en España por un período superior a 90 días. Los visados se categorizan en dos tipos según la Ley Orgánica 4/2000: de corta duración (hasta 90 días) y de larga duración (superior a 90 días). Los visados de larga duración representan un compromiso de residencia y se conceden bajo diferentes supuestos: (1) Visado de trabajo (altamente cualificado o de empleado) — vinculado a contrato laboral español; (2) Visado no lucrativo — justificación de medios económicos sin vinculación laboral; (3) Visado de estudios — matrícula en institución española acreditada; (4) Visado de emprendedor/inversor — proyecto empresarial o inversión significativa; (5) Visado de familia — cónyuge o descendientes de ciudadano español.",
      { h3: "Proceso consular y TIE" },
      "El plazo legal de resolución consular es de 1 mes, aunque muchos consulados aplican plazos ampliados (30–60 días) según volumen de solicitudes. Tras la aprobación consular, el solicitante debe obtener la Tarjeta de Identidad de Extranjero (TIE) en la Oficina de Extranjería española dentro de 30 días de entrada.",
      "En Eon Legal, gestionamos la tramitación consular completa: revisión previa de viabilidad en España (incluyendo evaluación de requisitos específicos del consulado), preparación del expediente (contratos, cartas de aceptación, justificación de medios), coordinación con el consulado competente en el país de origen, seguimiento del estado de solicitud, y acompañamiento en la obtención del TIE.",
      "Las dificultades comunes incluyen requisitos consulares variables por territorio (no existe criterio único nacional), cambios en normativa consular, y documentación insuficiente — solucionamos estas complejidades mediante contacto directo con consulados.",
    ],
    highlights: [
      "Visado de trabajo: altamente cualificado (TIC) o empleado dependiente con contrato laboral",
      "Visado no lucrativo: justificación de medios económicos, sin requisito de actividad laboral",
      "Visado de estudios: matrícula en centro acreditado, seguro médico, justificación de medios",
      "Visado de emprendedor: proyecto de negocio + inversión o creación de empleo",
      "Visado de familia: cónyuge, pareja de hecho registrada, o descendientes de ciudadano español",
    ],
    requirements: [
      "Pasaporte válido con vigencia mínima de 3 meses más allá de la duración pretendida del visado",
      "Formulario de solicitud de visado completado (modelo EX-00 o específico del consulado)",
      "Fotografía de pasaporte (requisitos de formato según consulado)",
      "Para visado de trabajo: contrato laboral original con firma legalizada, inscripción en Seguridad Social, o carta de aceptación del empleador",
      "Para visado no lucrativo: justificación de medios (extracto bancario, nómina, pensión) mínimo €1.644/mes (indexado anualmente), aprobado por la Delegación Provincial",
      "Para visado de estudios: certificado de matrícula, oferta académica, seguro médico, justificación de medios económicos",
      "Para visado de emprendedor: proyecto empresarial redactado, plan financiero, documentación de inversión",
      "Para visado de familia: documentación de relación familiar (matrimonio, pareja, certificado de nacimiento), datos del ciudadano español patrocinador",
      "Certificado médico (examen sanitario básico, requisitos varían por consulado)",
      "Certificado de antecedentes penales de país de origen apostillado",
      "Comprobante de alojamiento en España (contrato de alquiler, propiedad, carta de acogida)",
      "Justificación de medios económicos para subsistencia en España (varía por ruta y duración)",
      "Póliza de seguro médico con cobertura en España (público o privado equivalente)",
    ],
    faqs: [
      {
        question: "¿Cuánto tarda en tramitarse un visado de larga duración para España?",
        answer: "El plazo legal de resolución consular es de 1 mes desde la presentación completa del expediente, aunque muchos consulados aplican plazos reales de 30–60 días según el volumen de solicitudes. Una vez aprobado el visado, el titular dispone de 30 días desde la entrada en España para solicitar la Tarjeta de Identidad de Extranjero (TIE) ante la Oficina de Extranjería competente.",
      },
      {
        question: "¿Puedo solicitar un visado no lucrativo si no tengo trabajo en España?",
        answer: "Sí. El visado no lucrativo está diseñado precisamente para personas que desean residir en España sin realizar actividad laboral. El requisito principal es demostrar medios económicos suficientes — al menos €1.644 al mes (índice actualizable anualmente) — mediante extracto bancario, nómina, pensión o cualquier fuente de ingresos documentada. No se exige contrato de trabajo ni alta en la Seguridad Social.",
      },
      {
        question: "¿Qué diferencia hay entre el visado y la autorización de residencia?",
        answer: "El visado es el permiso de entrada inicial, concedido por el consulado español en el país de origen, que habilita para entrar en España y permanecer durante un período determinado. La autorización de residencia es el permiso que se tramita dentro de España y habilita para la permanencia legal a largo plazo y, según el tipo, también para trabajar. El visado de larga duración es, en muchos casos, el paso previo obligatorio para obtener la autorización de residencia posterior.",
      },
      {
        question: "¿Qué ocurre si el consulado deniega el visado?",
        answer: "La denegación consular puede impugnarse mediante recurso de alzada ante la Embajada o la Secretaría de Estado de Asuntos Exteriores en el plazo de 1 mes desde la notificación, o mediante recurso contencioso-administrativo en vía judicial en el plazo de 2 meses. Eon Legal analiza los motivos de denegación, refuerza la documentación y gestiona el recurso correspondiente para maximizar las probabilidades de resolución favorable.",
      },
    ],
    relatedServices: ["residencia", "nacionalidad"],
  },
  nacionalidad: {
    title: "Nacionalidad española: residencia, opción y Ley de Memoria Democrática",
    metaTitle: "Nacionalidad española por residencia, opción e hijos",
    shortTitle: "Nacionalidad",
    metaDescription:
      "Nacionalidad española por residencia (5 años), opción, Ley Memoria Democrática. Pruebas CCSE-DELE, expediente completo, plazo legal. Consulta gratis.",
    summary:
      "Nacionalidad por residencia (5 años), por opción, vías de Memoria Democrática, y gestión de pasaporte español.",
    longDescription: [
      "La nacionalidad española es el estatus definitivo que permite vivir, trabajar y circular libremente en España y el espacio Schengen sin limitación temporal. Existen cuatro vías principales reguladas por el Código Civil: (1) Naturalización por residencia — requiere 5 años de residencia legal continuada, pero se reduce a 2 años para nacionalidades iberoamericanas, filipinas, portugués, andorranos, y sefardíes; (2) Nacionalidad por opción — para personas con antepasados españoles (hijos de padre/madre español, bisnietos, etc.); (3) Nacionalidad por carta de naturaleza — supuestos excepcionales concedidos por gracia del Estado; (4) Leyes de Memoria Democrática y Nietos de Republicanos — vías especiales para descendientes de exiliados, asilados durante la Guerra Civil.",
      "El plazo legal de resolución es de 1 año desde la presentación completa del expediente ante el Ministerio de Justicia, aunque la resolución efectiva suele prolongarse entre 12 y 24 meses por volumen de solicitudes. La naturalización requiere demostración de integración social mediante pruebas lingüísticas (CCSE: Conocimiento Constitucional y Socio-Cultural de España; DELE B1: Diploma de Español como Lengua Extranjera, si procede según nacionalidad de origen).",
      "El expediente debe incluir certificados apostillados del país de origen (nacimiento, antecedentes penales, etc.), documentación de residencia continuada (empadronamientos, declaraciones de la renta), y registro civil español actualizado.",
      "En Eon Legal, preparamos el expediente completo: coordinación de documentación en origen, solicitud de antecedentes y certificaciones, registro ante el Ministerio de Justicia mediante la sede electrónica, gestión de requerimientos administrativos, y acompañamiento en la jura ante el encargado del Registro Civil.",
    ],
    highlights: [
      "Naturalización por residencia: 5 años (2 años para iberoamericanos, portugueses, filipinos, sefardíes)",
      "Nacionalidad por opción: para hijos, nietos y demás descendientes de españoles",
      "Ley de Memoria Democrática: para descendientes de exiliados y republicanos perseguidos",
      "Pruebas CCSE y DELE: requisitos lingüísticos según nacionalidad y vía (algunos países exentos)",
      "Pasaporte y gestión de documentación post-nacionalización",
    ],
    requirements: [
      "Certificado literal de nacimiento (del registro civil español o apostillado del país de origen)",
      "Certificado de antecedentes penales: España (Policía Nacional) y país de origen apostillado",
      "Certificado de residencia legal: empadronamientos continuados desde inicio del período de residencia (últimos 5 años o período reclamado)",
      "Certificado de empadronamiento actual (máximo 3 meses de antigüedad)",
      "Declaración de la Renta (últimos 2-3 años) como prueba de residencia fiscal continuada",
      "Documentación de antecedentes penales en España (si procede)",
      "Para nacionalidad por opción: acta de nacimiento del ascendiente español, documentación del vínculo genealógico (matrimonio, etc.), certificado de nacionalidad del familiar español",
      "Para Memoria Democrática: documentación que acredite la persecución o exilio (sentencias, documentación de confinamiento, etc.)",
      "Aprobado de pruebas CCSE y DELE (según nacionalidad): certificados oficiales emitidos por centros acreditados",
      "Declaración Jurada de integración social (si se solicita)",
      "Seguro médico vigente en España (para comprobar vínculos continuos)",
      "Pasaporte válido o documento de viaje",
      "Documentación de jura ante Registro Civil: cédula de identidad o pasaporte válido para comparecencia",
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tarda en resolverse la nacionalidad española por residencia?",
        answer: "El plazo legal de resolución es de 1 año desde la presentación completa del expediente ante el Ministerio de Justicia, aunque la resolución efectiva suele prolongarse entre 12 y 24 meses por el volumen de solicitudes. Eon Legal realiza un seguimiento activo del expediente, responde a requerimientos del Ministerio y gestiona las incidencias documentales que puedan surgir durante la tramitación.",
      },
      {
        question: "¿Cuál es la diferencia entre la nacionalidad por residencia y la nacionalidad por opción?",
        answer: "La nacionalidad por residencia requiere acreditar 5 años de residencia legal continuada en España (2 años para iberoamericanos, portugueses, filipinos y sefardíes) y superar las pruebas CCSE y DELE B1. La nacionalidad por opción se concede a quienes tienen ascendientes españoles — hijos, nietos u otros descendientes de padre o madre español — sin exigir residencia previa ni pruebas lingüísticas en la mayoría de los supuestos. Los requisitos documentales y los plazos de tramitación son distintos en cada vía.",
      },
      {
        question: "¿Es obligatorio hacer las pruebas CCSE y DELE B1 para obtener la nacionalidad española?",
        answer: "En general sí, pero existen exenciones. Quedan exentos de la prueba DELE B1 los nacionales de países hispanohablantes (que ya acreditan el español como lengua materna). Quedan exentos de ambas pruebas los menores de 18 años, las personas con discapacidad acreditada que les impida realizarlas, y quienes obtienen la nacionalidad por carta de naturaleza. Eon Legal verifica en la consulta inicial si el solicitante está exento o qué pruebas debe superar.",
      },
      {
        question: "¿Qué es la Ley de Memoria Democrática y quién puede acogerse a ella?",
        answer: "La Ley de Memoria Democrática (Ley 20/2022) y su predecesora la Ley 52/2007 (Ley de Nietos) establecen vías especiales de adquisición de la nacionalidad española para descendientes de personas que sufrieron exilio o persecución durante la Guerra Civil española y el franquismo. Pueden acogerse nietos e hijos de exiliados republicanos, de personas privadas de la nacionalidad entre 1939 y 1978, y otros supuestos específicos regulados en ambas normas. Eon Legal revisa la elegibilidad y gestiona el expediente completo.",
      },
    ],
    relatedServices: ["residencia", "visados"],
  },
  "familiares-ue": {
    title: "Tarjeta de residencia de familiar de ciudadano UE: derechos y tramitación",
    metaTitle: "Tarjeta de residencia familiar de ciudadano UE en España",
    shortTitle: "Familia UE",
    metaDescription:
      "Tarjeta de residencia de familiar de ciudadano UE (art. 10 y 20): requisitos, plazo de tramitación y renovación. Despacho especializado. Consulta gratis.",
    summary:
      "Tarjeta de residencia de familiar de ciudadano de la Unión Europea: tramitación inicial, renovación y acceso a residencia permanente.",
    longDescription: [
      "La tarjeta de residencia de familiar de ciudadano de la Unión (TRF-UE) es el instrumento legal que reconoce el derecho de residencia de familiares de ciudadanos de la Unión Europea en España, regulado por el Real Decreto 240/2007 y los Tratados de la Unión Europea. Existen dos categorías: (1) Tarjeta de residencia inicial (art. 10) — válida por 5 años, renovable mientras subsista el vínculo familiar y la ciudadanía UE del titular; (2) Tarjeta de residencia permanente (art. 20) — estatus indefinido tras 5 años de residencia legal continuada como familiar de ciudadano UE.",
      "La tarjeta cubre a cónyuge, pareja de hecho registrada, descendientes menores o dependientes, y ascendientes a cargo del ciudadano UE. El plazo de tramitación es de 30 días desde la solicitud ante la Oficina de Extranjería competente, aunque los tiempos reales oscilan entre 45–90 días según volumen.",
      "Una vez obtenida la TRF-UE, el familiar tiene derecho al mismo acceso al mercado laboral que los ciudadanos españoles, sin restricción sectorial ni geográfica.",
      "En Eon Legal, gestionamos el ciclo completo: revisión de elegibilidad, coordinación documental (matrimonio, pareja de hecho, prueba de dependencia), presentación ante la Oficina de Extranjería, tramitación de renovaciones quinquenales, y apoyo en la transición a residencia permanente.",
    ],
    highlights: [
      "Tarjeta de residencia inicial (TRF-UE art. 10): válida 5 años, renovable",
      "Tarjeta de residencia permanente (art. 20): estatus indefinido tras 5 años de residencia continuada",
      "Acceso pleno al mercado laboral español sin restricciones sectoriales",
      "Cobertura de cónyuge, pareja de hecho registrada, descendientes y ascendientes a cargo",
      "Libre circulación en el espacio Schengen con derechos equiparables a ciudadano UE",
    ],
    requirements: [
      "Documentación del vínculo familiar legalizada: certificado de matrimonio, acta de pareja de hecho registrada (Registro del Estado Civil), o certificado de nacimiento para descendientes/ascendientes",
      "Certificado de registro del ciudadano UE titular (Oficina de Extranjería o consulado de país de origen)",
      "Pasaporte válido del familiar solicitante",
      "Prueba de dependencia económica (para ascendientes a cargo): nóminas, extracto bancario, documentación de pensión o subsidio",
      "Prueba de alojamiento conjunto: contrato de alquiler, escritura, o certificado de convivencia",
      "Seguro médico del ciudadano UE titular (póliza privada o afiliación a Sistema de Salud español)",
      "Certificado de empadronamiento conjunto en domicilio de residencia común",
      "Documentación de prueba de pareja de hecho (si aplica): acta de convivencia de administración local o privada legalizada, o resolución de inscripción en registro autonómico",
      "Para renovación: documentación que acredite subsistencia del vínculo familiar y ciudadanía UE del titular",
      "Para acceso a residencia permanente: certificados de empadronamiento continuado durante 5 años + documentación del vínculo actual",
    ],
    faqs: [
      {
        question: "¿Quién puede solicitar la tarjeta de residencia de familiar de ciudadano UE?",
        answer: "Pueden solicitarla el cónyuge, la pareja de hecho registrada, los hijos menores de 21 años (o mayores dependientes) y los ascendientes a cargo del ciudadano de la Unión Europea residente en España. El vínculo familiar debe estar legalmente documentado.",
      },
      {
        question: "¿Qué diferencia hay entre la tarjeta del art. 10 y la del art. 20?",
        answer: "La tarjeta del artículo 10 es la tarjeta inicial, válida por 5 años y renovable mientras subsista el vínculo familiar y la ciudadanía UE del titular. La tarjeta del artículo 20 es la tarjeta de residencia permanente, que se concede tras 5 años de residencia legal continuada como familiar de ciudadano UE y no tiene fecha de caducidad.",
      },
      {
        question: "¿Puedo trabajar en España con la tarjeta de familiar de ciudadano UE?",
        answer: "Sí. La tarjeta de familiar de ciudadano UE otorga acceso pleno al mercado laboral español sin restricciones sectoriales ni geográficas, con los mismos derechos que los ciudadanos españoles.",
      },
      {
        question: "¿Qué ocurre si el ciudadano UE titular abandona España?",
        answer: "Los familiares que hayan residido legalmente en España durante 3 o más años pueden conservar su derecho de residencia aunque el ciudadano UE se marche. El resultado concreto depende de las circunstancias individuales y requiere un análisis jurídico específico del caso.",
      },
    ],
    relatedServices: ["residencia", "dgt"],
  },
  dgt: {
    title: "Canje de carnet de conducir y trámites DGT para extranjeros en España",
    metaTitle: "Canje de carnet de conducir extranjero en España: DGT",
    shortTitle: "DGT",
    metaDescription:
      "Canje de carnet de conducir extranjero a español, traspaso de vehículos y certificaciones DGT. Tramitación desde A Coruña para toda España. Consulta gratis.",
    summary:
      "Canje de permisos de conducir extranjeros, traspaso de vehículos, certificaciones y tramitación ante la Dirección General de Tráfico (DGT).",
    longDescription: [
      "El canje de permisos de conducir es un trámite administrativo esencial para personas extranjeras residentes en España. La Dirección General de Tráfico (DGT) permite canjear permisos de conducir válidos de terceros países por un permiso español, siempre que el permiso de origen cumpla requisitos de equivalencia reconocidos por la Convención de Viena sobre Señales y Señales de Tráfico de 1968. El plazo de tramitación es de 2–4 semanas desde la presentación completa de documentación ante la Jefatura Provincial de Tráfico (JPT) competente.",
      "No todos los permisos extranjeros son canjeables automáticamente; algunos requieren homologación previa o examen teórico en España. Complementando el canje, gestionamos traspasos de vehículos (cambio de titularidad), bajas de circulación, solicitudes de duplicados de documentación DGT, y obtención de certificados de antecedentes de tráfico.",
      "También coordinamos tramitaciones administrativas conexas ante otras administraciones públicas españolas (Hacienda, Ayuntamientos, Registros) y obtención de certificados de residencia, antecedentes penales y matriculación.",
      "En Eon Legal, manejamos el ciclo administrativo completo: revisión previa de compatibilidad del permiso extranjero con normativa española, preparación de documentación (traducciones juradas, apostillas, solicitudes), presentación ante JPT o gestorías colaboradoras, seguimiento del trámite, y obtención de permisos duplicados o certificaciones.",
    ],
    highlights: [
      "Canje de carnet de conducir: conversión a permiso español válido (2-4 semanas tramitación)",
      "Evaluación de compatibilidad: verificación si permiso extranjero es canjeable sin examen",
      "Homologación o examen teórico: tramitación si se requiere prueba adicional",
      "Traspaso de vehículos: cambio de titularidad ante DGT (procesos telemáticos simplificados)",
      "Baja de circulación y gestión de documentación: certificados DGT, duplicados, antecedentes de tráfico",
    ],
    requirements: [
      "Permiso de conducir extranjero original y válido en país de emisión",
      "Traducción oficial jurada del permiso de conducir (si está en idioma no oficial de la UE)",
      "Apostilla del permiso de conducir (si procede según Convención de La Haya)",
      "Documento de identidad válido: pasaporte, NIE o permiso de residencia",
      "Certificado médico psicotécnico emitido por centro aprobado por DGT (si la edad, nacionalidad o tipo de permiso lo exigen)",
      "Para traspasos vehiculares: documentación del vehículo (permiso de circulación original, ficha técnica, foto del vehículo)",
      "Certificado de titularidad o factura de compra de vehículo (para traspasos)",
      "Justificante de pago de impuestos municipales (IBI) si se requiere en la comunidad autónoma",
      "Para bajas de circulación: permiso de circulación, ficha técnica, solicitud de baja",
      "Justificante de empadronamiento en España (para acreditar domicilio)",
      "Comprobante de seguro de responsabilidad civil vigente (si el vehículo sigue en uso)",
    ],
    faqs: [
      {
        question: "¿Todos los carnets de conducir extranjeros son canjeables por un carnet español?",
        answer: "No. Solo son canjeables directamente los permisos de países que tienen convenio de reciprocidad con España o que son signatarios de la Convención de Viena sobre Tráfico por Carretera de 1968. Para permisos de países sin convenio, puede ser necesario superar un examen teórico o de conducción en España. Eon Legal realiza una revisión previa de compatibilidad del permiso antes de iniciar el trámite.",
      },
      {
        question: "¿Cuánto tiempo tarda el canje del carnet de conducir extranjero?",
        answer: "El plazo habitual es de 2 a 4 semanas desde la presentación completa de la documentación ante la Jefatura Provincial de Tráfico (JPT) competente, aunque puede extenderse a 4–6 semanas según el volumen de la oficina y la necesidad de verificación consular del permiso original.",
      },
      {
        question: "¿Puedo conducir en España mientras tramito el canje del carnet?",
        answer: "Sí, con condiciones. Los extranjeros residentes en España pueden conducir con su permiso original durante el primer año desde que establecen su residencia habitual. Pasado ese período, es obligatorio tramitar el canje. Durante la tramitación del canje, la DGT expide un resguardo acreditativo que permite conducir legalmente hasta la obtención del permiso español.",
      },
      {
        question: "¿Necesito un certificado médico para el canje del carnet de conducir?",
        answer: "Depende de la categoría del permiso, la edad del solicitante y la normativa específica del consulado del país de origen. En general, los titulares de permisos de categoría B (turismos) pueden estar exentos si el permiso es reciente y el solicitante tiene menos de 45 años. Para vehículos pesados (C, D) o solicitantes mayores, el certificado médico psicotécnico emitido por un centro autorizado por la DGT es obligatorio.",
      },
    ],
    relatedServices: ["familiares-ue", "residencia"],
  },
  "regularizacion-2026": {
    title: "Regularización extraordinaria 2026: residencia y trabajo legal en España",
    metaTitle: "Regularización extraordinaria 2026 en España: Mercurio",
    shortTitle: "Regularización 2026",
    metaDescription:
      "Regularización extraordinaria 2026: permanencia antes 1 ene 2026, plazo 30 jun, Mercurio UTEX, silencio positivo. Presentación telemática. Consulta gratis.",
    highlightsHeading: "Legitimidades válidas para la regularización extraordinaria 2026",
    requirementsHeading: "Documentación para acreditar la estancia y vínculo en España",
    bodyNote: [
      "El Real Decreto de regularización extraordinaria abre una ventana única hasta el 30 de junio de 2026 para que personas migrantes ya residentes en España accedan a una autorización de residencia y trabajo de un año con acceso a la Seguridad Social y tarjeta sanitaria. El proceso tiene tres hitos clave: (1) solicitud telemática abre el 16 de abril de 2026, 24/7 a través de la plataforma única Mercurio del Ministerio de Inclusión, Seguridad Social y Migraciones; (2) atención presencial con cita previa arranca el 20 de abril en las Oficinas de Extranjería; (3) plazo cierra definitivamente el 30 de junio de 2026 (sin prórrogas).",
      "La autorización concedida —o presumida por silencio positivo administrativo (art. 24 Ley de Procedimiento Administrativo Común)— tiene vigencia de doce meses e incluye número de afiliación a la Seguridad Social, tarjeta sanitaria y autorización para trabajar en cualquier sector sin restricción geográfica. Al término del año, la situación puede consolidarse hacia las vías ordinarias del Reglamento de Extranjería (residencia por cuenta ajena, propia, de larga duración, o familiares) siempre que se acredite continuidad de vínculo laboral o integración social. Esta regularización responde a triple legitimidad: social (respaldada por >700.000 firmas de iniciativa legislativa popular y ~900 asociaciones), política (apoyo parlamentario), y económica (respaldo de patronal y sindicatos para reforzar derechos laborales).",
    ],
    faqs: [
      {
        question:
          "¿Qué es el silencio positivo en la regularización extraordinaria 2026?",
        answer:
          "El silencio administrativo positivo significa que si la UTEX no resuelve expresamente la solicitud dentro del plazo legal (entre 3-6 meses típicamente, máximo 1 año), la autorización de residencia y trabajo se entiende automáticamente concedida. No necesitas obtener una resolución expresa del Ministerio para empezar a trabajar legalmente. Esta presunción favorable es un mecanismo de protección procesal: después del silencio, la autorización es válida y puedes solicitar tu afiliación a la Seguridad Social y tarjeta sanitaria.",
      },
      {
        question:
          "¿Qué documentos privados acreditan la estancia para la regularización 2026?",
        answer:
          "Documentos privados válidos: (1) contratos de arrendamiento o recibos de alquiler con la dirección de residencia; (2) facturas de servicios a nombre del solicitante (agua, luz, gas, teléfono, internet); (3) extractos bancarios o justificantes de transferencia que demuestren presencia en la localidad; (4) nóminas o contratos laborales de cualquier período en España; (5) certificados de matrícula escolar de hijos en colegios españoles; (6) cartas de empleadores o referencias laborales con fechas; (7) recibos de servicios médicos o farmacéuticos; (8) facturas de compra con domicilio. El conjunto debe cubrir el período de permanencia desde antes del 1 de enero de 2026 de forma continua.",
      },
      {
        question:
          "¿Puedo solicitar la regularización si tengo una orden de expulsión no ejecutada?",
        answer:
          "Depende de múltiples factores: tipo de resolución (administrativa vs judicial), si está firme o pendiente de recurso, estado del procedimiento contencioso, fecha de emisión. Eon Legal realiza una revisión previa exhaustiva de viabilidad para determinar si la orden de expulsión afecta a la elegibilidad. En algunos supuestos la regularización extraordinaria puede tramitarse incluso con antecedentes administrativos previos si la orden no está firme o si concurren circunstancias que suspenden su ejecución. El análisis es individual por caso.",
      },
      {
        question:
          "¿Qué ocurre cuando caduca la autorización de un año de la regularización 2026?",
        answer:
          "La autorización inicial otorgada en esta regularización tiene vigencia de doce meses calendario. Al vencimiento (12 meses desde la concesión o silencio positivo), tienes dos opciones: (1) solicitar renovación del permiso por un año más si se mantiene el vínculo inicial (trabajo o circunstancia de origen); (2) modificar la situación migratoria hacia un permiso ordinario del Reglamento de Extranjería (residencia por cuenta ajena si tienes contrato de trabajo en vigor, residencia por cuenta propia si tienes actividad empresarial, larga duración si cumples 5 años de residencia continuada). La transición debe iniciarse antes de que expire el año para evitar períodos sin autorización.",
      },
      {
        question:
          "¿Puede Eon Legal gestionar la solicitud desde cualquier comunidad autónoma?",
        answer:
          "Sí. La regularización extraordinaria se tramita de forma centralizada ante la Unidad de Tramitación de Expedientes de Extranjería (UTEX) del Ministerio, independientemente de la comunidad autónoma donde residas. No hay oficinas autonómicas intermedias. Eon Legal gestiona expedientes de forma 100% telemática en todo el territorio español desde su sede en A Coruña: coordinación documental, preparación de solicitud, presentación en Mercurio, seguimiento ante UTEX, y respuesta a requerimientos sin necesidad de presencia física.",
      },
    ],
    relatedServices: ["residencia", "arraigo"],
    summary:
      "Proceso extraordinario por Real Decreto que abre hasta 30 jun 2026 para personas migrantes residentes en España obtener autorización de residencia y trabajo de un año con Seguridad Social y tarjeta sanitaria.",
    longDescription: [
      "El Real Decreto de regularización extraordinaria 2026 es una iniciativa de triple legitimidad que abre una ventana única hasta el 30 de junio de 2026 para que miles de personas migrantes que ya conviven en España accedan a una autorización de residencia y trabajo de un año, número de afiliación a la Seguridad Social, y tarjeta sanitaria del territorio de residencia. La iniciativa tiene respaldo social (>700.000 firmas de Iniciativa Legislativa Popular más ~900 asociaciones), político (aprobación parlamentaria en su toma en consideración), y económico (apoyo expreso de patronal UGT-CCOO-CEOE por refuerzo de derechos laborales y seguridad jurídica en relaciones de trabajo).",
      "El proceso está centralizado en la Unidad de Tramitación de Expedientes de Extranjería (UTEX) del Ministerio de Inclusión, Seguridad Social y Migraciones mediante la plataforma única Mercurio: solicitud telemática disponible 24/7 desde 16 abril, atención presencial desde 20 abril, plazo definitivo 30 junio. El silencio administrativo positivo (no resolución expresa dentro del plazo legal) genera automáticamente la autorización.",
      "En Eon Legal, gestionamos el ciclo completo: revisión previa exhaustiva de viabilidad (evaluación de riesgos por antecedentes, órdenes administrativas, eligibilidad por legitimidad), recopilación y verificación de prueba de permanencia (documentos públicos y privados), presentación telemática en Mercurio, seguimiento del expediente ante UTEX, respuesta a requerimientos administrativos, y asesoramiento en la transición hacia vías ordinarias del Reglamento de Extranjería al término del año.",
    ],
    highlights: [
      "Autorización de residencia y trabajo válida por 12 meses (renovable o convertible a vías ordinarias)",
      "Alta y número de afiliación inmediata en Seguridad Social (dentro de 3 meses desde concesión/silencio)",
      "Tarjeta sanitaria de cobertura universal del territorio de residencia",
      "Presentación telemática 24/7 a través de plataforma Mercurio (16 abril – 30 junio 2026)",
      "Pasarela hacia vías ordinarias de residencia (residencia por cuenta ajena, propia, larga duración, familia)",
    ],
    requirements: [
      "Encontrarse en España de forma continuada antes del 1 de enero de 2026 bajo una de las tres legitimidades válidas:",
      "Legitimidad social — permanencia comprobada con raíces establecidas (familia, vínculos comunitarios)",
      "Legitimidad política — autorización por protección internacional o asilo en revisión/procedimiento",
      "Legitimidad económica — trabajador con vínculo laboral demostrable o acceso a la Seguridad Social",
      "Haber permanecido en territorio español de forma ininterrumpida al menos cinco meses en el momento de presentación de la solicitud (requisito mínimo para todas las legitimidades)",
      "Carencia de antecedentes penales: no constar en registros españoles ni extranjeros por delitos graves; no tener orden de expulsión firme o en ejecución; no suponer una amenaza para el orden público o seguridad del Estado",
      "Documentos públicos acreditativos de estancia — empadronamiento, inscripción en registro municipal, cita consular, registros públicos españoles",
      "Documentos privados acreditativos de estancia — arrendamientos, facturas de servicios, nóminas, cartas de empleadores, extractos bancarios, matrícula escolar",
      "Combinación de documentos públicos y privados para período completo desde antes del 1 de enero de 2026",
      "Documentación de legitimidad social — empadronamiento continuado, certificado de arraigo comunitario o declaraciones de personas conocidas",
      "Documentación de legitimidad política — certificado de Dirección General de Policía de solicitud de asilo o protección internacional, resolución de acogida provisional",
      "Documentación de legitimidad económica — nóminas, contratos laborales, resolución de inscripción en Seguridad Social, número de afiliación o certificación de cotización",
      "Pasaporte o documento de viaje válido y legible",
      "Modelo de solicitud completado según instrucciones de UTEX en plataforma Mercurio (disponible en español e inglés)",
      "Fotografía tipo carné o similar (especificaciones técnicas DGT)",
      "Presentar solicitud antes del 30 de junio de 2026 sin prórroga: modalidad telemática 24/7 en Mercurio, o modalidad presencial previa cita en Oficina de Extranjería",
      "En caso de requerimiento por UTEX: responder en plazo máximo de 10 días hábiles con documentación adicional solicitada o aclaraciones",
    ],
  },
};
