export const ACCESS_URLS = {
  portal: 'https://arcas-io.vercel.app',
  api: 'https://arcas-io.onrender.com',
  hn: 'https://hn.arcas-io.workers.dev',
} as const;

export const DEMO_CREDENTIALS = {
  usuario: 'demo',
  contraseña: 'demo123',
} as const;

export const ACCESS_SERVICES = [
  { label: 'Portal (Vercel)', url: ACCESS_URLS.portal },
  { label: 'API (Render)', url: ACCESS_URLS.api },
  { label: 'HN (Cloudflare Workers)', url: ACCESS_URLS.hn },
] as const;

/** Datos de contacto en un solo lugar (nav, formulario y pie de página). */
export const CONTACT = {
  whatsapp: '50494809806',
  whatsappLabel: '+504 9480-9806',
  email: 'arcas.io@yahoo.com',
} as const;
