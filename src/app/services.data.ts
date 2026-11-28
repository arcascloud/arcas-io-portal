export type Service = {
  id: string;
  name: string;
  stack: string;
  summary: string;
  points: string[];
};

/** Arcas ERP ofrecido como servicio en la nube. */
export const saasService: Service = {
  id: 'erp-saas',
  name: 'Arcas ERP en la nube (SaaS)',
  stack: 'Software como servicio',
  summary:
    'Usá Arcas ERP desde el navegador, sin comprar ni administrar servidores. Activás solo los módulos que tu empresa necesita.',
  points: [
    'Acceso desde escritorio, tablet y móvil',
    'Módulos a la carta: ventas, inventarios, finanzas, contabilidad y RRHH',
    'Alojamiento, actualizaciones y soporte a cargo de Arcas-IO',
    'Con o sin automatización contable (asiento automático)',
  ],
};

/** Servicios de desarrollo de software a la medida. */
export const devServices: Service[] = [
  {
    id: 'angular',
    name: 'Aplicaciones web con Angular',
    stack: 'Angular 21+ · TypeScript · Tailwind CSS',
    summary: 'Portales, tableros y sistemas de gestión rápidos, accesibles y fáciles de mantener.',
    points: [
      'Componentes standalone y signals',
      'Diseño responsive para escritorio, tablet y móvil',
      'Formularios, tablas y reportes de uso diario',
      'Integración con tus APIs REST',
    ],
  },
  {
    id: 'jakarta-ee',
    name: 'Sistemas empresariales con Jakarta EE',
    stack: 'Java 21 · Jakarta EE · JPA',
    summary: 'Aplicaciones robustas para operaciones críticas y sistemas que ya están en producción.',
    points: [
      'Servicios transaccionales y persistencia con JPA',
      'Seguridad, auditoría y control de roles',
      'Integración con sistemas existentes',
      'Migración de Java EE a Jakarta EE',
    ],
  },
  {
    id: 'spring-boot',
    name: 'APIs REST con Spring Boot 4',
    stack: 'Spring Boot 4 · Spring Framework 7 · Java 21',
    summary: 'Back-ends claros y seguros que alimentan tus aplicaciones web y móviles.',
    points: [
      'Diseño de APIs REST documentadas (OpenAPI)',
      'Autenticación y autorización con JWT',
      'Acceso a datos con JPA',
      'Pruebas automatizadas y listo para desplegar',
    ],
  },
  {
    id: 'microservicios',
    name: 'Arquitectura de microservicios',
    stack: 'Spring Boot · Contenedores · Nube',
    summary:
      'Dividimos tu sistema por dominios cuando de verdad conviene. Si un monolito bien hecho te sirve más, te lo decimos.',
    points: [
      'Diseño de servicios por dominio de negocio',
      'Comunicación entre servicios (REST y mensajería)',
      'Empaquetado en contenedores y despliegue en la nube',
      'Monitoreo y registro de eventos',
    ],
  },
];
