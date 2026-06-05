export const experiences = [
  {
    company: 'Plataforma de Quejas Ciudadana SAS',
    app: 'Quéjate',
    role: 'Desarrollador Mobile (React Native)',
    role_en: 'Mobile Developer (React Native)',
    period: '2025 – 2026',
    url: 'https://quejate.com.co',
    location: 'Colombia · Remoto',
    summary:
      'Plataforma ciudadana colombiana en producción para radicar y hacer seguimiento a PQRSDs ante entidades públicas. Desarrollé la app móvil de extremo a extremo.',
    summary_en:
      'Colombian civic platform in production for filing and tracking PQRSDs with public entities. Built the mobile app end-to-end.',
    highlights: [
      'Construí el módulo de autenticación completo: login con correo/contraseña y Google Sign-In (OAuth 2.0), sesión con tokens Bearer y almacenamiento seguro. Diagnostiqué y resolví un fallo sistémico de 401 por conflicto Cookie vs Bearer.',
      'Implementé el módulo de PQRSD: formulario de creación en 4 pasos con validación y reCAPTCHA, muro con scroll infinito, vista de detalle, likes y rediseño de tarjetas con multimedia.',
      'Desarrollé multimedia avanzada: galería con pinch-zoom y swipe, reproducción de video inline, generación de miniaturas en cliente con subida a S3, y caché de imágenes en disco/memoria.',
      'Integré geolocalización con selección en mapa, reverse geocoding, deep links a Google Maps y autodetección de ciudad/departamento.',
      'Configuré notificaciones push (FCM): canales Android, registro de tokens y resolución de FIS_AUTH_ERROR por configuración cruzada en Google Cloud.',
      'Gestioné el pipeline de release: EAS Build con perfiles preview/producción (AAB), variables de entorno por ambiente y preparación completa para Google Play.',
    ],
    highlights_en: [
      'Built the full authentication module: email/password and Google Sign-In (OAuth 2.0), Bearer token session with secure storage. Diagnosed and resolved a systemic 401 failure caused by a Cookie vs Bearer conflict.',
      'Implemented the PQRSD module: 4-step creation form with validation and reCAPTCHA, infinite scroll feed, detail view, likes, and card redesign with multimedia support.',
      'Developed advanced media handling: pinch-zoom and swipe gallery, inline video playback, client-side thumbnail generation with S3 upload, and disk/memory image caching.',
      'Integrated geolocation with map-based selection, reverse geocoding, Google Maps deep links, and automatic city/department detection.',
      'Configured push notifications (FCM): Android channels, token registration, and resolved a FIS_AUTH_ERROR caused by cross-project misconfiguration in Google Cloud.',
      'Managed the full release pipeline: EAS Build with preview/production profiles (AAB), per-environment variables, and complete Google Play submission.',
    ],
    tags: ['React Native', 'Expo SDK 54', 'TypeScript', 'TanStack Query', 'Zustand', 'EAS Build', 'FCM', 'AWS S3'],
  },
  {
    company: 'Plataforma de Quejas Ciudadana SAS',
    app: 'Quéjate',
    role: 'Desarrollador Backend (Next.js)',
    role_en: 'Backend Developer (Next.js)',
    period: '2025 – 2026',
    url: 'https://quejate.com.co',
    location: 'Colombia · Remoto',
    summary:
      'Contribuciones al backend web de la plataforma en producción, trabajando sobre la base existente en Next.js 15 con Prisma y Auth.js.',
    summary_en:
      'Contributions to the platform\'s web backend in production, building on the existing Next.js 15 stack with Prisma and Auth.js.',
    highlights: [
      'Construí el flujo completo de recuperación de contraseña: OTP de 6 dígitos con expiración de 15 min, hasheado con bcryptjs, rate limiting por usuario y patrón anti-enumeración.',
      'Diseñé el endpoint de restauración de sesión móvil (Bearer) para evitar re-login al abrir la app, y corregí bugs en currentUser() que bloqueaban campos críticos en autenticación por header.',
      'Construí endpoints de notificaciones con verificación de ownership (403/404) e integré eliminación optimista en la UI web con reversión ante error vía Zustand.',
      'Implementé migraciones de esquema en producción sin downtime usando patrones seguros de Prisma (db execute + migrate resolve --applied).',
      'Construí getOverdueInfo() como fuente de verdad del backend para vencimiento de PQRSDs, eliminando discrepancias con el cliente móvil. Extendí festivos colombianos a 2026 con reglas de Ley Emiliani.',
      'Construí rutas OpenGraph para rich preview al compartir PQRSDs en WhatsApp, Facebook y Twitter. Resolví bug de logo en correos OTP implementando inline base64.',
    ],
    highlights_en: [
      'Built the full password recovery flow: 6-digit OTP with 15-min expiry, bcryptjs hashing, per-user rate limiting, and anti-enumeration pattern.',
      'Designed the mobile session restore endpoint (Bearer auth) to prevent re-login on app open, and fixed bugs in currentUser() that blocked critical fields when authenticating via header.',
      'Built notification endpoints with ownership verification (403/404) and integrated optimistic deletion in the web UI with error rollback via Zustand.',
      'Implemented production schema migrations with zero downtime using safe Prisma patterns (db execute + migrate resolve --applied).',
      'Built getOverdueInfo() as the backend source of truth for PQRSD overdue calculation, eliminating client-side discrepancies. Extended Colombian holidays to 2026 with Ley Emiliani rules.',
      'Built OpenGraph routes for rich previews on WhatsApp, Facebook, and Twitter. Fixed an OTP email logo bug by implementing inline base64 encoding.',
    ],
    tags: ['Next.js 15', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Auth.js v5', 'AWS S3', 'Resend', 'Zod'],
  },
]
