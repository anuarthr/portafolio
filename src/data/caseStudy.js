// Caso destacado: Quéjate. Cifras y hechos tomados de las hojas de vida de noviembre de 2026.
// Sin código, rutas, enlaces a repositorios, tipos de fallo ni nombres de servidores.

export const caseStudy = {
  es: {
    kicker: 'Backend en producción',
    title: 'Caso destacado: Quéjate',
    lead: 'Cómo migré el backend de una plataforma ciudadana en producción sin romper la app móvil publicada en Google Play.',
    stats: [
      { value: '43', label: 'endpoints que usa la app, sin cambios' },
      { value: '3861', label: 'pruebas automatizadas' },
      { value: '28', label: 'hallazgos de seguridad documentados' },
      { value: '158', label: 'pull requests' },
    ],
    diagram: {
      before: 'Antes',
      after: 'Después',
      mobile: 'App móvil',
      legacyA: 'App Next.js 1',
      legacyB: 'App Next.js 2',
      legacyNote: 'Lógica repartida entre dos aplicaciones',
      unchanged: '43 endpoints sin cambios',
      service: 'Servicio NestJS',
      serviceNote: 'Un solo servicio, con pruebas y CI',
      database: 'PostgreSQL',
      caption: 'Esquema simplificado de la arquitectura antes y después de la migración.',
    },
    blocks: [
      {
        title: 'El problema',
        text: 'La lógica del backend estaba repartida entre dos aplicaciones Next.js, y la app Android publicada en Google Play dependía de 43 de sus endpoints. Cualquier cambio en el backend tenía que mantenerlos intactos.',
      },
      {
        title: 'Cómo lo resolví',
        text: 'Migré el backend a un único servicio NestJS (TypeScript, Prisma, PostgreSQL) de forma incremental, sin romper la app publicada. Cada paso quedó cubierto por pruebas automatizadas con Jest, unitarias y end-to-end, y por CI/CD en GitHub Actions con auditoría de dependencias y detección de secretos.',
      },
      {
        title: 'El resultado',
        text: 'Un solo servicio con 3861 pruebas y 99 % de cobertura de líneas, y la app móvil funcionando con los mismos 43 endpoints. Además, una auditoría según OWASP API Top 10 en cuatro repositorios dejó 28 hallazgos documentados, correcciones en producción y límites de peticiones.',
      },
    ],
    ai: {
      title: 'Cómo trabajé con agentes de IA',
      text: 'En el proyecto coordiné agentes de IA (Claude Code). Las decisiones, la integración de cada cambio y las pruebas en producción quedaron a mi cargo, a lo largo de 158 pull requests. Los agentes aceleraron el trabajo, y la responsabilidad sobre lo que llegaba a producción siguió siendo mía.',
    },
  },

  en: {
    kicker: 'Production backend',
    title: 'Case study: Quéjate',
    lead: 'How I migrated the backend of a live civic-tech platform without breaking the mobile app published on Google Play.',
    stats: [
      { value: '43', label: 'endpoints used by the app, unchanged' },
      { value: '3,861', label: 'automated tests' },
      { value: '28', label: 'security findings documented' },
      { value: '158', label: 'pull requests' },
    ],
    diagram: {
      before: 'Before',
      after: 'After',
      mobile: 'Mobile app',
      legacyA: 'Next.js app 1',
      legacyB: 'Next.js app 2',
      legacyNote: 'Logic split across two apps',
      unchanged: '43 endpoints unchanged',
      service: 'NestJS service',
      serviceNote: 'A single service, with tests and CI',
      database: 'PostgreSQL',
      caption: 'Simplified architecture before and after the migration.',
    },
    blocks: [
      {
        title: 'The problem',
        text: 'The backend logic was split across two Next.js apps, and the Android app published on Google Play depended on 43 of their endpoints. Any backend change had to keep them intact.',
      },
      {
        title: 'How I solved it',
        text: 'I migrated the backend to a single NestJS service (TypeScript, Prisma, PostgreSQL) incrementally, without breaking the published app. Every step was covered by automated Jest tests, unit and end-to-end, and by CI/CD in GitHub Actions with dependency auditing and secret scanning.',
      },
      {
        title: 'The outcome',
        text: 'One service with 3,861 tests and 99% line coverage, and the mobile app running on the same 43 endpoints. An OWASP API Security Top 10 audit across four repositories also produced 28 documented findings, fixes in production and rate limiting.',
      },
    ],
    ai: {
      title: 'How I worked with AI agents',
      text: 'I coordinated AI coding agents (Claude Code) on this project. I owned the decisions, the merges and the production testing across 158 pull requests. The agents sped up the work, and responsibility for what reached production stayed with me.',
    },
  },
}
