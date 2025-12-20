// src/data/data.ts
export type Executive = {
  slug: string // para rutas: /ejecutiva/maria-ines
  fullName: string // "María Inés Pérez"
  phone: string // "912345678" (solo números)
  email: string // "ejecutiva@ucmchile.cl"
  cityPrimary: string // "Santiago"
  cityCoverage: string[] // ["Santiago", "Región Metropolitana", "Valparaíso"]
  domain: string // "https://www.contratarucm.cl"
  whatsappMsg: string // texto base WA
  ogImage: string // "/images/og-default.jpg"
  heroImage?: string // opcional
  officialUcmProfileUrl?: string // URL donde aparece listada como oficial (si existe)
}

export const EXECUTIVES: Executive[] = [
  {
    slug: 'ejecutivam',
    fullName: 'Ejecutiva Oficial',
    phone: '983589813',
    email: 'mmora@ucmchile.cl',
    cityPrimary: 'Santiago',
    cityCoverage: ['Santiago', 'Región Metropolitana', 'Valparaíso'],
    domain: 'https://www.planeatencionhogar.cl',
    whatsappMsg: 'Hola, quiero cotizar un plan UCM',
    ogImage: '/images/og-default.jpg',
    heroImage: '/images/hero.jpg',
    officialUcmProfileUrl: 'https://www.ucmchile.cl/'
  },
  {
    slug: 'ejecutivae',
    fullName: 'Ejecutiva Oficial',
    phone: '942874934',
    email: 'ezuniga@ucmchile.cl',
    cityPrimary: 'Valparaíso',
    cityCoverage: ['Valparaíso', 'Viña del Mar', 'Quilpué', 'Villa Alemana', 'Santiago'],
    domain: 'https://www.planesdeasistenciaprivada.cl',
    whatsappMsg: 'Hola, quiero cotizar un plan UCM',
    ogImage: '/images/og-default.jpg',
    heroImage: '/images/hero.jpg',
    officialUcmProfileUrl: 'https://www.ucmchile.cl/'
  }
]

// Helpers (links CTA)
export const buildLinks = (exec: Executive) => {
  const wa = `https://wa.me/56${exec.phone}?text=${encodeURIComponent(exec.whatsappMsg)}`
  const call = `tel:+56${exec.phone}`
  const mail = `mailto:${exec.email}`
  return { wa, call, mail }
}
