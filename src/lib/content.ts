import type { Lang } from '../types';

type BiString = { en: string; es: string };

export function t(obj: BiString, lang: Lang): string {
  return obj[lang];
}

export const content = {
  nav: {
    brand: { en: 'IN2ME', es: 'IN2ME' },
    passportLabel: { en: 'Digital Product Passport', es: 'Pasaporte Digital del Producto' },
    identity: { en: 'Identity', es: 'Identidad' },
    manifesto: { en: 'Manifesto', es: 'Manifiesto' },
    traceability: { en: 'Traceability', es: 'Trazabilidad' },
    materials: { en: 'Materials', es: 'Materiales' },
    manufacturing: { en: 'Manufacturing', es: 'Fabricación' },
    localProduction: { en: 'Local', es: 'Local' },
    longevity: { en: 'Longevity', es: 'Longevidad' },
    care: { en: 'Care', es: 'Cuidado' },
    social: { en: 'Social', es: 'Social' },
    circularity: { en: 'Circularity', es: 'Circularidad' },
  },

  hero: {
    eyebrow: { en: 'Digital Product Passport', es: 'Pasaporte Digital del Producto' },
    collection: { en: 'Collection', es: 'Colección' },
    season: { en: 'Season', es: 'Temporada' },
    passportId: { en: 'Passport ID', es: 'ID de Pasaporte' },
    scrollHint: { en: 'Scroll to explore', es: 'Desplaza para explorar' },
    switchLabel: { en: 'Also in this collection', es: 'También en esta colección' },
    viewBack: { en: 'Back', es: 'Trasera' },
    viewFront: { en: 'Front', es: 'Frontal' },
  },

  identity: {
    sectionNum: { en: '01', es: '01' },
    sectionLabel: { en: 'Product Identity', es: 'Identidad del Producto' },
    sku: { en: 'Reference', es: 'Referencia' },
    passportId: { en: 'Passport ID', es: 'ID de Pasaporte' },
    collection: { en: 'Collection', es: 'Colección' },
    season: { en: 'Season', es: 'Temporada' },
    origin: { en: 'Origin', es: 'Origen' },
    originVal: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    design: { en: 'Design', es: 'Diseño' },
    production: { en: 'Production', es: 'Producción' },
    localVal: { en: 'Santiago Metropolitan Region', es: 'Región Metropolitana de Santiago' },
    genderless: { en: 'Genderless', es: 'Sin género' },
    smallBatch: { en: 'Small batch', es: 'Pequeña producción' },
    materialsTitle: { en: 'Materials', es: 'Materiales' },
  },

  manifesto: {
    sectionNum: { en: '02', es: '02' },
    sectionLabel: { en: 'Design Manifesto', es: 'Manifiesto de Diseño' },
    title: { en: 'Designed\nto persist', es: 'Diseñado\npara persistir' },
    body1: {
      en: 'IN2ME designs garments with long-term relevance rather than short-term trend cycles. Each piece is the result of decisions made at the level of construction, material and silhouette — choices that determine how a garment ages, adapts and continues.',
      es: 'IN2ME diseña prendas con relevancia a largo plazo en lugar de ciclos de tendencias cortos. Cada pieza es el resultado de decisiones tomadas a nivel de construcción, material y silueta — elecciones que determinan cómo una prenda envejece, se adapta y continúa.',
    },
    body2: {
      en: 'This garment belongs to the Structures collection. It is defined by architectural volume, functional hardware and a design language that crosses conventional gender boundaries.',
      es: 'Esta prenda pertenece a la colección Estructuras. Está definida por el volumen arquitectónico, el herraje funcional y un lenguaje de diseño que cruza los límites convencionales del género.',
    },
    principlesTitle: { en: 'Design Principles', es: 'Principios de Diseño' },
    principles: [
      {
        title: { en: 'Purposeful design', es: 'Diseño con propósito' },
        text: {
          en: 'Each formal decision serves the garment\'s longevity and adaptability, not current taste.',
          es: 'Cada decisión formal sirve a la longevidad y adaptabilidad de la prenda, no al gusto actual.',
        },
      },
      {
        title: { en: 'Genderless pattern', es: 'Patrón sin género' },
        text: {
          en: 'Pattern development prioritises flexibility of form over traditional body segmentation.',
          es: 'El desarrollo de patrones prioriza la flexibilidad de forma sobre la segmentación corporal tradicional.',
        },
      },
      {
        title: { en: 'Multifunctionality', es: 'Multifuncionalidad' },
        text: {
          en: 'Garments adapt to different bodies, contexts and uses — widening the range of relevant occasions.',
          es: 'Las prendas se adaptan a diferentes cuerpos, contextos y usos, ampliando el rango de ocasiones relevantes.',
        },
      },
      {
        title: { en: 'Material responsibility', es: 'Responsabilidad material' },
        text: {
          en: 'Fabric selection is made with durability and the end of the garment\'s life in mind.',
          es: 'La selección de telas se hace teniendo en cuenta la durabilidad y el fin de vida de la prenda.',
        },
      },
    ],
  },

  traceability: {
    sectionNum: { en: '02', es: '02' },
    sectionLabel: { en: 'Traceability', es: 'Trazabilidad' },
    title: { en: 'Production\njourney', es: 'Recorrido\nde producción' },
    subtitle: {
      en: 'A documented record of every stage in the making of this garment, from raw material to finished piece.',
      es: 'Un registro documentado de cada etapa en la confección de esta prenda, desde la materia prima hasta la pieza terminada.',
    },
    stages: { en: 'Stages', es: 'Etapas' },
    verified: { en: 'Documented', es: 'Documentado' },
    location: { en: 'Location', es: 'Ubicación' },
    date: { en: 'Date', es: 'Fecha' },
    detail: { en: 'Detail', es: 'Detalle' },
    collapse: { en: 'Close', es: 'Cerrar' },
  },

  materials: {
    sectionNum: { en: '03', es: '03' },
    sectionLabel: { en: 'Materials', es: 'Materiales' },
    title: { en: 'Composition', es: 'Composición' },
    subtitle: {
      en: 'This garment is made from two distinct fabrics, each selected for their structural contribution and longevity.',
      es: 'Esta prenda está confeccionada con dos telas distintas, cada una seleccionada por su contribución estructural y longevidad.',
    },
    fabricType: { en: 'Fabric type', es: 'Tipo de tela' },
    origin: { en: 'Origin', es: 'Origen' },
    role: { en: 'Role in garment', es: 'Función en la prenda' },
    composition: { en: 'Composition', es: 'Composición' },
    supplier: { en: 'Supplier location', es: 'Ubicación del proveedor' },
  },

  manufacturing: {
    sectionNum: { en: '04', es: '04' },
    sectionLabel: { en: 'Manufacturing Process', es: 'Proceso de Fabricación' },
    title: { en: 'Made at the\nIN2ME atelier', es: 'Confeccionado en el\natelier IN2ME' },
    subtitle: {
      en: 'Every garment is produced at the IN2ME atelier in Santiago. Cutting, sewing and finishing are carried out by hand by a small team of skilled artisans.',
      es: 'Cada prenda se produce en el atelier IN2ME en Santiago. El corte, la costura y los acabados son realizados a mano por un pequeño equipo de artesanos calificados.',
    },
    workshopLabel: { en: 'Atelier', es: 'Atelier' },
    workshopName: { en: 'IN2ME Atelier', es: 'Atelier IN2ME' },
    workshopLocation: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    smallBatch: { en: 'Small batch production', es: 'Producción en pequeñas partidas' },
    smallBatchDetail: {
      en: 'Garments are produced in limited quantities to avoid overproduction and unnecessary stock accumulation.',
      es: 'Las prendas se producen en cantidades limitadas para evitar la sobreproducción y la acumulación innecesaria de stock.',
    },
    stepsTitle: { en: 'Production stages', es: 'Etapas de producción' },
    steps: [
      { en: 'Pattern design', es: 'Diseño de patrones' },
      { en: 'Fabric cutting', es: 'Corte de tela' },
      { en: 'Assembly', es: 'Ensamble' },
      { en: 'Hardware fitting', es: 'Colocación de herrajes' },
      { en: 'Finishing', es: 'Acabados' },
      { en: 'Quality review', es: 'Revisión de calidad' },
    ],
  },

  localProduction: {
    sectionNum: { en: '05', es: '05' },
    sectionLabel: { en: 'Local Production', es: 'Producción Local' },
    title: { en: 'Within the\nsame region', es: 'Dentro de la\nmisma región' },
    body1: {
      en: 'Design, material sourcing and garment manufacturing are developed within the Santiago Metropolitan Region whenever possible. This keeps the supply chain short, traceable and connected to a specific place.',
      es: 'El diseño, la obtención de materiales y la fabricación de prendas se desarrollan dentro de la Región Metropolitana de Santiago siempre que es posible. Esto mantiene la cadena de suministro corta, trazable y conectada a un lugar específico.',
    },
    body2: {
      en: 'Local production is not a marketing position. It is a practical decision that reduces transport distances, supports the regional textile industry and allows for direct quality oversight at every stage.',
      es: 'La producción local no es una posición de marketing. Es una decisión práctica que reduce las distancias de transporte, apoya la industria textil regional y permite una supervisión directa de la calidad en cada etapa.',
    },
    designLabel: { en: 'Design', es: 'Diseño' },
    designVal: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    sourcingLabel: { en: 'Material sourcing', es: 'Obtención de materiales' },
    sourcingVal: { en: 'Santiago Metropolitan Region', es: 'Región Metropolitana de Santiago' },
    manufacturingLabel: { en: 'Manufacturing', es: 'Fabricación' },
    manufacturingVal: { en: 'Santiago, Chile', es: 'Santiago, Chile' },
    networkLabel: { en: 'Supply chain', es: 'Cadena de suministro' },
    networkVal: { en: 'Regional', es: 'Regional' },
  },

  longevity: {
    sectionNum: { en: '06', es: '06' },
    sectionLabel: { en: 'Longevity & Multifunctionality', es: 'Longevidad y Multifuncionalidad' },
    title: { en: 'A garment\ndesigned to last', es: 'Una prenda\ndiseñada para durar' },
    body1: {
      en: 'Construction, material selection and design decisions in this garment aim to encourage prolonged use. It is not designed for a season. It is designed to remain relevant across different contexts, bodies and years of use.',
      es: 'La construcción, la selección de materiales y las decisiones de diseño en esta prenda apuntan a fomentar un uso prolongado. No está diseñada para una temporada. Está diseñada para mantenerse relevante en diferentes contextos, cuerpos y años de uso.',
    },
    body2: {
      en: 'The genderless pattern, the flexible silhouette and the durable construction are not aesthetic choices alone — they are decisions that extend the useful life of the piece beyond conventional fashion cycles.',
      es: 'El patrón sin género, la silueta flexible y la construcción duradera no son solo elecciones estéticas — son decisiones que extienden la vida útil de la pieza más allá de los ciclos convencionales de la moda.',
    },
    traitsTitle: { en: 'Designed for longevity', es: 'Diseñado para la longevidad' },
    traits: [
      {
        label: { en: 'Genderless fit', es: 'Ajuste sin género' },
        text: {
          en: 'Pattern cut for a wide range of bodies without gender-based restriction.',
          es: 'Patrón cortado para una amplia variedad de cuerpos sin restricción basada en género.',
        },
      },
      {
        label: { en: 'Multi-use silhouette', es: 'Silueta multiuso' },
        text: {
          en: 'Designed to function across different contexts — formal, casual, transitional.',
          es: 'Diseñada para funcionar en diferentes contextos: formal, casual, de transición.',
        },
      },
      {
        label: { en: 'Reinforced construction', es: 'Construcción reforzada' },
        text: {
          en: 'Double-needle stitching and structural seams built for extended wear.',
          es: 'Costura de doble aguja y costuras estructurales construidas para un uso prolongado.',
        },
      },
      {
        label: { en: 'Hardware durability', es: 'Durabilidad del herraje' },
        text: {
          en: 'Metal hardware selected for mechanical reliability over repeated use cycles.',
          es: 'Herraje metálico seleccionado por su confiabilidad mecánica a lo largo de ciclos de uso repetidos.',
        },
      },
    ],
  },

  care: {
    sectionNum: { en: '07', es: '07' },
    sectionLabel: { en: 'Care Instructions', es: 'Instrucciones de Cuidado' },
    title: { en: 'How to\ncare for it', es: 'Cómo\ncuidarla' },
    intro: {
      en: 'Proper care extends the usable life of this garment. The following instructions are specific to the fabric composition of this piece.',
      es: 'El cuidado adecuado extiende la vida útil de esta prenda. Las siguientes instrucciones son específicas a la composición de telas de esta pieza.',
    },
    storageTitle: { en: 'Storage', es: 'Almacenamiento' },
    storageText: {
      en: 'Hang on a padded or wide hanger to preserve the shape of the shoulders and waistband. Store away from direct sunlight.',
      es: 'Cuelga en un gancho acolchado o ancho para preservar la forma de los hombros y la pretina. Almacena lejos de la luz solar directa.',
    },
    instructions: [
      {
        symbol: 'W',
        label: { en: 'Hand wash cold', es: 'Lavar a mano en frío' },
        detail: { en: 'Cold water, mild detergent. Do not wring.', es: 'Agua fría, detergente suave. No retorcer.' },
      },
      {
        symbol: '30°',
        label: { en: 'Max 30°C', es: 'Máx 30°C' },
        detail: { en: 'Do not exceed 30°C / 86°F at any stage.', es: 'No superar 30°C / 86°F en ninguna etapa.' },
      },
      {
        symbol: '⊘T',
        label: { en: 'No tumble dry', es: 'No secadora' },
        detail: { en: 'Lay flat or hang to dry away from heat sources.', es: 'Secar en plano o colgada, lejos de fuentes de calor.' },
      },
      {
        symbol: '↗',
        label: { en: 'Low iron', es: 'Plancha baja' },
        detail: { en: 'Iron inside-out on a low setting. No steam on hardware.', es: 'Planchar al revés en temperatura baja. Sin vapor en herrajes.' },
      },
      {
        symbol: 'DC',
        label: { en: 'Dry clean accepted', es: 'Lavado en seco aceptado' },
        detail: { en: 'Professional dry cleaning is safe for all components.', es: 'La limpieza en seco profesional es segura para todos los componentes.' },
      },
      {
        symbol: '⊘',
        label: { en: 'No bleach', es: 'Sin blanqueadores' },
        detail: { en: 'No bleach or harsh chemical treatments.', es: 'Sin blanqueadores ni tratamientos químicos agresivos.' },
      },
    ],
  },

  social: {
    sectionNum: { en: '09', es: '09' },
    sectionLabel: { en: 'Social Impact', es: 'Impacto Social' },
    title: { en: 'Supporting\nFundación Iguales', es: 'Apoyando a\nFundación Iguales' },
    body1: {
      en: 'Part of the proceeds generated by IN2ME support Fundación Iguales and its work promoting LGBTQIA+ inclusion and diversity in Chile.',
      es: 'Parte de los ingresos generados por IN2ME apoyan a Fundación Iguales y su labor de promoción de la inclusión y diversidad LGBTQIA+ en Chile.',
    },
    body2: {
      en: 'Fundación Iguales is a Chilean civil society organisation that works through advocacy, education and community programs to advance equal rights for LGBTQIA+ people in Chile.',
      es: 'Fundación Iguales es una organización chilena de la sociedad civil que trabaja a través de la incidencia, la educación y los programas comunitarios para promover la igualdad de derechos de las personas LGBTQIA+ en Chile.',
    },
    foundationLabel: { en: 'Foundation', es: 'Fundación' },
    foundationName: { en: 'Fundación Iguales', es: 'Fundación Iguales' },
    workLabel: { en: 'Focus', es: 'Enfoque' },
    workVal: { en: 'LGBTQIA+ inclusion & equal rights, Chile', es: 'Inclusión LGBTQIA+ e igualdad de derechos, Chile' },
    modelLabel: { en: 'Support model', es: 'Modelo de apoyo' },
    modelVal: { en: 'Percentage of proceeds per garment sold', es: 'Porcentaje de ingresos por prenda vendida' },
    learnMore: { en: 'iguales.cl', es: 'iguales.cl' },
    genderlessNote: {
      en: 'IN2ME\'s genderless design practice aligns directly with this commitment — the garments we produce reflect the plurality of the people who wear them.',
      es: 'La práctica de diseño sin género de IN2ME se alinea directamente con este compromiso — las prendas que producimos reflejan la pluralidad de las personas que las usan.',
    },
  },

  circularity: {
    sectionNum: { en: '10', es: '10' },
    sectionLabel: { en: 'Circularity & End of Life', es: 'Circularidad y Fin de Vida' },
    title: { en: 'What happens\nafter use', es: 'Qué ocurre\ndespués del uso' },
    subtitle: {
      en: 'IN2ME approaches the end of a garment\'s life as a design problem. These are the pathways available for this piece.',
      es: 'IN2ME aborda el fin de vida de una prenda como un problema de diseño. Estos son los caminos disponibles para esta pieza.',
    },
    packagingTitle: { en: 'Packaging', es: 'Empaque' },
    packagingText: {
      en: 'All IN2ME packaging uses recyclable paper materials. No single-use plastic is used in the delivery of this garment.',
      es: 'Todo el empaque de IN2ME utiliza materiales de papel reciclable. No se utiliza plástico de un solo uso en la entrega de esta prenda.',
    },
    remnantsTitle: { en: 'Production remnants', es: 'Restos de producción' },
    remnantsText: {
      en: 'Textile remnants and production leftovers from the making of this garment are reused whenever possible — repurposed into smaller accessories or returned to the material supply chain.',
      es: 'Los restos textiles y sobrantes de producción de la confección de esta prenda se reutilizan siempre que es posible — reconvertidos en accesorios más pequeños o devueltos a la cadena de suministro de materiales.',
    },
    returnTitle: { en: 'Return programme', es: 'Programa de devolución' },
    returnText: {
      en: 'When this garment has reached the end of its use with you, contact IN2ME to arrange a return. We will assess the piece for repair, resale or material recovery.',
      es: 'Cuando esta prenda haya llegado al final de su uso contigo, contacta a IN2ME para coordinar una devolución. Evaluaremos la pieza para su reparación, reventa o recuperación de material.',
    },
    repairTitle: { en: 'Repair & restoration', es: 'Reparación y restauración' },
    repairText: {
      en: 'The IN2ME atelier accepts garments for repair. Common services include zipper replacement, seam re-stitching, waistband re-attachment and hem adjustment.',
      es: 'El atelier IN2ME acepta prendas para reparación. Los servicios comunes incluyen reemplazo de cierre, re-costura de costuras, recolocación de pretina y ajuste de dobladillo.',
    },
    ctaText: { en: 'Contact the atelier', es: 'Contactar el atelier' },
    ctaEmail: { en: 'atelier@in2me.cl', es: 'atelier@in2me.cl' },
  },

  footer: {
    tagline: {
      en: 'Transparent by design. Chilean by origin.',
      es: 'Transparente por diseño. Chileno por origen.',
    },
    passportNote: {
      en: 'This Digital Product Passport is a verifiable record issued by IN2ME for this specific garment.',
      es: 'Este Pasaporte Digital del Producto es un registro verificable emitido por IN2ME para esta prenda específica.',
    },
    contact: { en: 'Contact', es: 'Contacto' },
    contactVal: { en: 'atelier@in2me.cl', es: 'atelier@in2me.cl' },
    rights: { en: '© 2025 IN2ME. All rights reserved.', es: '© 2025 IN2ME. Todos los derechos reservados.' },
  },
} as const;
