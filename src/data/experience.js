// Experiencia laboral. Cargo, fechas, descripción y viñetas copiadas literalmente
// de las hojas de vida (CV_Anuarth_ES_2026-11 y CV_Anuarth_EN_2026-11).

export const experiences = [
  {
    company: 'Plataforma de Quejas Ciudadana SAS',
    app: 'Quéjate',
    role: 'Desarrollador de Software Full-Stack',
    role_en: 'Full-Stack Software Developer',
    period: 'mar. 2026 – oct. 2026',
    period_en: 'Mar 2026 – Oct 2026',
    location: 'Colombia · Remoto',
    location_en: 'Colombia · Remote',
    summary:
      'Plataforma colombiana para radicar PQRSD ante entidades públicas. Práctica profesional desde jul. 2026.',
    summary_en:
      'Colombian civic-tech platform for filing complaints with public entities. Professional internship from Jul 2026.',
    highlights: [
      'Migré el backend de una plataforma en producción, de dos aplicaciones Next.js a un servicio NestJS (TypeScript, Prisma, PostgreSQL), de forma incremental y sin cambiar los 43 endpoints que usa la app móvil publicada.',
      'Desarrollé y publiqué en Google Play la app Android (React Native, Expo), con inicio de sesión con Google (OAuth 2.0), formulario de PQRSD, mapa y notificaciones push (FCM).',
      'Audité la seguridad según OWASP API Top 10 en cuatro repositorios: documenté 28 hallazgos y corregí en producción, entre otros, rutas sin autenticación y una escalada de privilegios. Añadí límites de peticiones.',
      'Dejé el servidor con 3861 pruebas automatizadas (Jest, unitarias y end-to-end), 99 % de cobertura de líneas y CI/CD en GitHub Actions con auditoría de dependencias y detección de secretos.',
      'Implementé el envío de cada PQRSD por correo con constancia de entrega (webhooks de Resend) y su línea de tiempo, a partir de una reunión con una gobernación departamental.',
      'Operé la infraestructura (Docker en Render, Neon, AWS S3 con permisos mínimos, Vercel) y coordiné agentes de IA (Claude Code), con las decisiones, la integración y las pruebas en producción a mi cargo, en 158 pull requests.',
    ],
    highlights_en: [
      "Migrated a live platform's backend from two Next.js apps to a single NestJS service (TypeScript, Prisma, PostgreSQL), incrementally and without changing the 43 endpoints used by the published mobile app.",
      'Built and shipped the Android app on Google Play (React Native, Expo), with Google sign-in (OAuth 2.0), a multi-step complaint form, map location and push notifications (FCM).',
      'Ran an OWASP API Security Top 10 audit across four repositories: documented 28 findings and fixed in production, among others, unauthenticated routes and a privilege escalation. Added rate limiting.',
      'Brought the backend to 3,861 automated tests (Jest, unit and end-to-end) with 99% line coverage, and set up CI/CD in GitHub Actions with dependency auditing and secret scanning.',
      'Delivered email submission of complaints with proof of delivery (Resend webhooks) and a delivery timeline, based on feedback from a regional government.',
      'Ran the infrastructure (Docker on Render, Neon, AWS S3 with least-privilege IAM, Vercel) and coordinated AI coding agents (Claude Code), owning decisions, merges and production testing across 158 pull requests.',
    ],
    tags: [
      'NestJS',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Next.js',
      'React Native',
      'Expo',
      'Jest',
      'GitHub Actions',
      'Docker',
      'AWS S3',
      'Resend',
    ],
  },
]
