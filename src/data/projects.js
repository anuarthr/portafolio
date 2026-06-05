// featured: true → grid principal de 2 columnas con imagen
// featured: false → grid compacto de académicos/colaborativos

export const projects = [
  {
    title: 'FindMyWorker — Marketplace de Servicios',
    title_en: 'FindMyWorker — Services Marketplace',
    description:
      'Marketplace de producción que conecta clientes con trabajadores de oficios del hogar. Motor de recomendación semántico propio (TF-IDF + cosine similarity + PostGIS), chat WebSocket en tiempo real, sistema de escrow de pagos. MRR 0.75 · CTR 42% · búsqueda <50ms · cobertura de tests >85%.',
    description_en:
      'Production marketplace connecting clients with home service workers. Custom semantic recommendation engine (TF-IDF + cosine similarity + PostGIS), real-time WebSocket chat, and payment escrow system. MRR 0.75 · CTR 42% · search <50ms · test coverage >85%.',
    image: '/FindMyWorkerLogo.png',
    images: [],
    tags: ['Python', 'Django', 'React', 'WebSocket', 'PostGIS', 'AWS S3', 'TF-IDF', 'Redis'],
    github: 'https://github.com/anuarthr/FindMyWorkerBackend',
    githubFrontend: 'https://github.com/anuarthr/FindMyWorkerFrontend',
    demo: 'https://find-my-worker-frontend.vercel.app',
    featured: true,
  },
  {
    title: 'AeroMagdalena — Aerolínea Regional',
    title_en: 'AeroMagdalena — Regional Airline',
    description:
      'Sistema full stack para una aerolínea regional colombiana. API REST en Spring Boot 3.3 con JWT, autorización por roles, documentación OpenAPI y Docker. SPA en React + TypeScript con arquitectura por dominio, caché con TanStack Query, panel admin y flujo completo de reserva de vuelos.',
    description_en:
      'Full stack system for a Colombian regional airline. REST API in Spring Boot 3.3 with JWT, role-based authorization, OpenAPI documentation, and Docker. SPA in React + TypeScript with domain-driven architecture, TanStack Query caching, admin panel, and complete flight booking flow.',
    image: '/Projects/AeroMagdalena/HomePage.png',
    images: [
      '/Projects/AeroMagdalena/HomePage.png',
      '/Projects/AeroMagdalena/DahsboardAdministrador.jpg',
      '/Projects/AeroMagdalena/DashboardUsuario.jpg',
      '/Projects/AeroMagdalena/Vuelos.png',
      '/Projects/AeroMagdalena/Reservas.png',
      '/Projects/AeroMagdalena/ConfirmaReserva.jpg',
      '/Projects/AeroMagdalena/VuelosAdministrador.png',
      '/Projects/AeroMagdalena/AeropuertosAdministrador.png',
    ],
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'OpenAPI'],
    github: 'https://github.com/anuarthr/aeromagdalena-backend-v2',
    githubFrontend: 'https://github.com/anuarthr/aeromagdalena-frontend-v2',
    demo: '',
    featured: true,
  },
  {
    title: 'SafeHaven — Clínica de Psicología',
    title_en: 'SafeHaven — Psychology Clinic',
    description:
      'Sistema full stack de gestión para una clínica de psicología. API REST con Spring Boot 3.3, Spring Security + JWT y PostgreSQL. SPA en React + TypeScript con roles diferenciados (Administrador, Psicólogo, Paciente), agenda de citas, facturación e historial clínico.',
    description_en:
      'Full stack management system for a psychology clinic. REST API with Spring Boot 3.3, Spring Security + JWT, and PostgreSQL. SPA in React + TypeScript with differentiated roles (Administrator, Psychologist, Patient), appointment scheduling, billing, and clinical history.',
    image: '/Projects/SafeHaven/Login.jpg',
    images: [
      '/Projects/SafeHaven/Login.jpg',
      '/Projects/SafeHaven/AdminDashboard.jpg',
      '/Projects/SafeHaven/DashboardPsicologo.jpg',
      '/Projects/SafeHaven/DashboardPaciente.jpg',
      '/Projects/SafeHaven/Citas.jpg',
      '/Projects/SafeHaven/CreacionCita.jpg',
      '/Projects/SafeHaven/Pacientes.jpg',
      '/Projects/SafeHaven/Psicologos.jpg',
      '/Projects/SafeHaven/PerfilPaciente.jpg',
      '/Projects/SafeHaven/CursosSaludMental.jpg',
      '/Projects/SafeHaven/Contacto.jpg',
    ],
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'React', 'TypeScript', 'JWT'],
    github: 'https://github.com/anuarthr/safehaven-backend-v2',
    githubFrontend: 'https://github.com/anuarthr/safehaven-frontend-v2',
    demo: '',
    featured: true,
  },

  // Proyectos académicos / colaborativos
  {
    title: 'SenseAble — Accesibilidad Visual',
    title_en: 'SenseAble — Visual Accessibility',
    description:
      'App Android de accesibilidad que convierte texto de imágenes a audio para personas con discapacidad visual. Arquitectura Clean/MVVM con Kotlin, OCR automático con Google ML Kit (cámara) y narración por Text-to-Speech.',
    description_en:
      'Android accessibility app converting text from images to audio for visually impaired users. Clean/MVVM architecture in Kotlin, automatic OCR via Google ML Kit (camera), and Text-to-Speech narration.',
    image: '',
    images: [],
    tags: ['Kotlin', 'Android Studio', 'Google ML Kit', 'TTS', 'MVVM'],
    github: 'https://github.com/anuarthr/SenseAble',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
  {
    title: 'Pokémon Team — DevOps & Full-Stack',
    title_en: 'Pokémon Team — DevOps & Full-Stack',
    description:
      'Proyecto colaborativo de consumo de APIs bajo metodologías ágiles. Gestioné ramas, pull requests y code reviews con Azure DevOps. Implementé consumo de datos externos y manejo de estado en React.',
    description_en:
      'Collaborative API consumption project under agile methodologies. Managed branches, pull requests, and code reviews with Azure DevOps. Implemented external data consumption and state management in React.',
    image: '',
    images: [],
    tags: ['React', 'Azure DevOps', 'REST APIs', 'Git'],
    github: '',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
]
