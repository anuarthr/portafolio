export const experiences = [
  {
    company: 'Plataforma de Quejas Ciudadana SAS',
    app: 'Quéjate',
    role: 'Desarrollador Backend & Móvil',
    role_en: 'Backend & Mobile Developer',
    period: '2025 (3m) · 2026 (3–4m)',
    url: 'https://quejate.com.co',
    location: 'Colombia · Remoto',
    summary:
      'Plataforma ciudadana colombiana en producción para radicar y hacer seguimiento a PQRSDs (Peticiones, Quejas, Reclamos, Sugerencias, Denuncias) ante entidades públicas, con funciones legales asistidas por IA.',
    summary_en:
      'Colombian civic platform in production for filing and tracking PQRSDs (Petitions, Complaints, Claims, Suggestions, Reports) with public entities, featuring AI-assisted legal functions.',
    highlights: [
      'Construí los endpoints de autenticación móvil: flujo OTP con expiración, rate limiting en BD y patrón anti-enumeración (siempre 200 para no revelar si el correo existe); sesión Bearer para restaurar sesión sin re-login.',
      'Diseñé e implementé los endpoints de notificaciones con verificación de ownership (403/404) y los conecté a la UI web con actualizaciones optimistas y reversión ante error.',
      'Desarrollé la app Android de extremo a extremo con React Native + Expo: autenticación Google OAuth 2.0, galería con pinch-zoom y reproducción de video inline, carga de adjuntos a S3 con generación de miniaturas y notificaciones push FCM.',
      'Construí la ruta pública OpenGraph (Next.js) para compartir PQRSDs en redes sociales con rich preview (WhatsApp, Facebook, Twitter); PQRSDs privadas devuelven 404 sin filtrar metadatos.',
      'Implementé migraciones de esquema en producción sin downtime usando patrones seguros de Prisma (db execute + migrate resolve --applied).',
      'Corregí un bug de renderizado de adjuntos cuya causa raíz era una comparación MIME vs. extensión; refactoricé la detección por prefijo MIME con fallback a extensión.',
      'Configuré EAS Build (perfiles preview/producción AAB), OAuth multi-proyecto en Google Cloud (Android/Web, huellas SHA-1, App Signing) y preparé el paquete de publicación para Google Play.',
    ],
    highlights_en: [
      'Built the mobile authentication endpoints: OTP flow with expiration, DB-level rate limiting, and anti-enumeration pattern (always 200 to avoid revealing whether an email exists); Bearer session to restore session without re-login.',
      'Designed and implemented notification endpoints with ownership verification (403/404) and connected them to the web UI with optimistic updates and error rollback.',
      'Developed the Android app end-to-end with React Native + Expo: Google OAuth 2.0 auth, pinch-zoom gallery and inline video playback, S3 attachment upload with thumbnail generation, and FCM push notifications.',
      'Built the public OpenGraph route (Next.js) for sharing PQRSDs on social media with rich previews (WhatsApp, Facebook, Twitter); private PQRSDs return 404 without leaking metadata.',
      'Implemented production schema migrations with zero downtime using safe Prisma patterns (db execute + migrate resolve --applied).',
      'Fixed an attachment rendering bug whose root cause was a MIME vs. extension comparison; refactored detection to use MIME prefix with extension fallback.',
      'Configured EAS Build (preview/production AAB profiles), multi-project OAuth in Google Cloud (Android/Web, SHA-1 fingerprints, App Signing), and prepared the publishing package for Google Play.',
    ],
    tags: ['Next.js', 'React Native', 'Expo', 'TypeScript', 'PostgreSQL', 'AWS S3', 'Auth.js', 'FCM', 'Prisma'],
  },
]
