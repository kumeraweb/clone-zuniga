// src/data/seo.ts
import type { Executive } from './data'

export type SeoIntent = 'brand' | 'nonbrand' | 'contact' | 'pricing' | 'city'

export const UCM_SEO_ATTACK = {
  // 1) Entidades (para consistencia semántica)
  entities: {
    brand: 'Unidad Coronaria Móvil',
    shortBrand: 'UCM',
    offering: 'Planes UCM',
    role: 'Ejecutiva Autorizada UCM',
    language: 'es-CL',
    country: 'CL'
  },

  // 2) Keyword clusters: SEO y Ads (separados)
  keywords: {
    primary: [
      'unidad coronaria móvil',
      'planes ucm',
      'atención médica a domicilio',
      'atención médica 24/7',
      'rescate médico',
      'ambulancia ucm',
      'salud extrahospitalaria'
    ],
    transactional: [
      'contratar plan ucm',
      'cotizar plan ucm',
      'planes ucm precios',
      'whatsapp ucm',
      'teléfono unidad coronaria móvil',
      'contacto ucm',
      'afiliación ucm'
    ],
    local: (city: string) => [
      `ejecutiva ucm ${city}`,
      `planes ucm ${city}`,
      `contratar plan ucm ${city}`,
      `teléfono ucm ${city}`
    ]
  },

  // 3) Matriz para Ads (esto te sirve como “brief” de anuncios)
  adsMatrix: [
    {
      intent: 'contact' as SeoIntent,
      focus: ['whatsapp', 'teléfono', 'contacto directo'],
      exampleQueries: ['whatsapp ucm', 'teléfono unidad coronaria móvil', 'contacto ucm'],
      landingGoal: 'Click a WhatsApp o Llamar'
    },
    {
      intent: 'pricing' as SeoIntent,
      focus: ['cotizar', 'precios', 'planes'],
      exampleQueries: ['planes ucm precios', 'cotizar plan ucm', 'valor plan ucm'],
      landingGoal: 'Cotización rápida + CTA'
    },
    {
      intent: 'city' as SeoIntent,
      focus: ['cobertura', 'comunas', 'ciudad'],
      exampleQueries: ['ejecutiva ucm santiago', 'planes ucm valparaíso'],
      landingGoal: 'Relevancia local + CTA'
    }
  ],

  // 4) Titles & descriptions (alineados al roadmap)
  title: (exec: Executive) => `Contrata tu Plan UCM | ${exec.fullName} | Atención 24/7`,

  description: (exec: Executive) =>
    `Afíliate a UCM con ejecutiva autorizada. Atención médica a domicilio 24/7 en ${exec.cityPrimary}. Cotiza hoy por WhatsApp o llamada directa.`,

  // 5) Headings (estructura recomendada)
  headings: {
    H1: 'Contrata tu Plan UCM con Ejecutiva Autorizada',
    H2: [
      'Atención médica a domicilio 24/7',
      'Planes UCM para familias y adultos mayores',
      'Unidad Coronaria Móvil – Contacto Directo',
      'Cotiza tu Plan UCM hoy',
      'Cobertura en Región Metropolitana y Valparaíso'
    ],
    H3: [
      'Afiliación directa y rápida',
      'Asesoría personalizada',
      'Telemedicina y atención extrahospitalaria',
      'Contacto inmediato por WhatsApp o llamada'
    ]
  },

  // 6) Bloques de contenido (orientado a conversión)
  contentBlocks: {
    whyHere: [
      'Respuesta directa con ejecutiva autorizada.',
      'Cotización rápida por WhatsApp o llamada.',
      'Orientación según familia, senior o empresa.',
      'Proceso de afiliación claro y seguro.'
    ],
    benefits: [
      'Atención médica extrahospitalaria 24/7.',
      'Rescate y apoyo ante urgencias según plan.',
      'Planes familiares, senior y empresa.',
      'Cobertura principal RM y Valparaíso (según zona).'
    ]
  },

  // 7) FAQs (para SEO y para objeciones de Ads)
  faqs: [
    {
      q: '¿Cómo contrato un Plan UCM?',
      a: 'Puedes contratar directamente con la ejecutiva autorizada vía WhatsApp o llamada. El proceso es guiado y rápido.'
    },
    {
      q: '¿Qué incluye un Plan UCM?',
      a: 'Incluye atención extrahospitalaria 24/7 y beneficios según el plan contratado (familiar, senior o empresa).'
    },
    {
      q: '¿En qué zonas hay cobertura?',
      a: 'La cobertura depende de tu comuna y el plan. La cobertura principal se concentra en RM y Valparaíso. Confírmalo con la ejecutiva.'
    },
    {
      q: '¿Cuánto demora en activarse?',
      a: 'Depende de la validación y el proceso de afiliación. En muchos casos se gestiona el mismo día.'
    }
  ],

  // 8) Schema (versión base para inyectar en layout)
  schema: (exec: Executive, canonical: string) => ({
    '@context': 'https://schema.org',
    '@type': 'MedicalOrganization',
    name: `Unidad Coronaria Móvil - ${exec.fullName} (${UCM_SEO_ATTACK.entities.role})`,
    url: canonical,
    logo: `${canonical}/favicon.png`,
    image: `${canonical}${exec.ogImage}`,
    description: `Ejecutiva autorizada para contratación de planes UCM en ${exec.cityPrimary}.`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+569${exec.phone}`,
      contactType: 'sales',
      availableLanguage: ['Spanish']
    },
    areaServed: exec.cityCoverage
  })
} as const
