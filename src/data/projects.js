// featured: true → grid principal de 2 columnas con imagen
// featured: false → grid compacto de académicos/colaborativos
// images: { src, alt, alt_en }. 'src' es la ruta sin sufijo: se sirven src-640.webp y src-1280.webp
// (ver ProjectImage en components/Projects.jsx).

export const projects = [
  {
    title: 'FindMyWorker: Marketplace de Servicios',
    title_en: 'FindMyWorker: Services Marketplace',
    description:
      'Marketplace de producción que conecta clientes con trabajadores de oficios del hogar. Motor de recomendación semántico propio (TF-IDF, similitud coseno y PostGIS), chat WebSocket en tiempo real y sistema de escrow de pagos. MRR 0,75 · CTR 42 % · búsqueda en menos de 50 ms · cobertura de pruebas superior al 85 %.',
    description_en:
      'Production marketplace connecting clients with home service workers. Custom semantic recommendation engine (TF-IDF + cosine similarity + PostGIS), real-time WebSocket chat, and payment escrow system. MRR 0.75 · 42% CTR · sub-50 ms search · test coverage >85%.',
    images: [
      {
        src: '/Projects/FindMyWorker/Logo',
        alt: 'Logotipo de FindMyWorker: una lupa sobre la silueta de ladrillos de un trabajador con casco, y el nombre findmyworker debajo',
        alt_en: 'FindMyWorker logo: a magnifying glass over the brick silhouette of a worker in a hard hat, with the name findmyworker below',
      },
    ],
    tags: ['Python', 'Django', 'React', 'WebSocket', 'PostGIS', 'AWS S3', 'TF-IDF', 'Redis'],
    github: 'https://github.com/anuarthr/FindMyWorkerBackend',
    githubFrontend: 'https://github.com/anuarthr/FindMyWorkerFrontend',
    demo: 'https://find-my-worker-frontend.vercel.app',
    featured: true,
  },
  {
    title: 'AeroMagdalena: Aerolínea Regional',
    title_en: 'AeroMagdalena: Regional Airline',
    description:
      'Sistema full stack para una aerolínea regional colombiana. API REST en Spring Boot 3.3 con JWT, autorización por roles, documentación OpenAPI y Docker. SPA en React + TypeScript con arquitectura por dominio, caché con TanStack Query, panel admin y flujo completo de reserva de vuelos.',
    description_en:
      'Full stack system for a Colombian regional airline. REST API in Spring Boot 3.3 with JWT, role-based authorization, OpenAPI documentation, and Docker. SPA in React + TypeScript with domain-driven architecture, TanStack Query caching, admin panel, and complete flight booking flow.',
    images: [
      {
        src: '/Projects/AeroMagdalena/HomePage',
        alt: 'Página de inicio de AeroMagdalena con el lema «Vuela con Aero Magdalena», la foto de un avión, rutas populares entre ciudades colombianas y los tres pasos para reservar',
        alt_en: 'AeroMagdalena home page with the headline "Vuela con Aero Magdalena", a photo of a plane, popular routes between Colombian cities and the three steps to book',
      },
      {
        src: '/Projects/AeroMagdalena/DashboardAdministrador',
        alt: 'Panel administrativo con accesos a los módulos de vuelos, reservas, aerolíneas, clientes y aeropuertos',
        alt_en: 'Admin panel with shortcuts to the flights, bookings, airlines, customers and airports modules',
      },
      {
        src: '/Projects/AeroMagdalena/DashboardUsuario',
        alt: 'Panel de control del cliente con accesos para hacer una reserva, explorar vuelos y editar el perfil',
        alt_en: 'Customer dashboard with shortcuts to make a booking, browse flights and edit the profile',
      },
      {
        src: '/Projects/AeroMagdalena/Vuelos',
        alt: 'Lista de vuelos disponibles con buscador y una tabla de origen, destino, fecha, duración, capacidad, aerolínea y aeropuerto, con un botón para reservar cada vuelo',
        alt_en: 'List of available flights with a search box and a table of origin, destination, date, duration, capacity, airline and airport, with a button to book each flight',
      },
      {
        src: '/Projects/AeroMagdalena/Reservas',
        alt: 'Página «Vuelos y reservas» con la tabla de vuelos disponibles y, debajo, las reservas del usuario con su estado',
        alt_en: '"Vuelos y reservas" page with the table of available flights and, below it, the user\'s bookings with their status',
      },
      {
        src: '/Projects/AeroMagdalena/ConfirmaReserva',
        alt: 'Ventana para confirmar la reserva del vuelo de Bogotá a Medellín, con la fecha de reserva y el número de pasajeros',
        alt_en: 'Dialog to confirm the booking of the Bogotá to Medellín flight, with the booking date and the number of passengers',
      },
      {
        src: '/Projects/AeroMagdalena/VuelosAdministrador',
        alt: 'Gestión de vuelos del administrador: formulario para crear un vuelo y tabla de vuelos programados con botones para editar y eliminar',
        alt_en: 'Admin flight management: a form to create a flight and a table of scheduled flights with edit and delete buttons',
      },
      {
        src: '/Projects/AeroMagdalena/AeropuertosAdministrador',
        alt: 'Gestión de aeropuertos: formulario con nombre, ciudad y país, y tabla de aeropuertos colombianos con opciones para editar y eliminar',
        alt_en: 'Airport management: a form with name, city and country, and a table of Colombian airports with edit and delete options',
      },
    ],
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'React', 'TypeScript', 'Docker', 'OpenAPI'],
    github: 'https://github.com/anuarthr/aeromagdalena-backend-v2',
    githubFrontend: 'https://github.com/anuarthr/aeromagdalena-frontend-v2',
    demo: '',
    featured: true,
  },
  {
    title: 'SafeHaven: Clínica de Psicología',
    title_en: 'SafeHaven: Psychology Clinic',
    description:
      'Sistema full stack de gestión para una clínica de psicología. API REST con Spring Boot 3.3, Spring Security + JWT y PostgreSQL. SPA en React + TypeScript con roles diferenciados (Administrador, Psicólogo, Paciente), agenda de citas, facturación e historial clínico.',
    description_en:
      'Full stack management system for a psychology clinic. REST API with Spring Boot 3.3, Spring Security + JWT, and PostgreSQL. SPA in React + TypeScript with differentiated roles (Administrator, Psychologist, Patient), appointment scheduling, billing, and clinical history.',
    images: [
      {
        src: '/Projects/SafeHaven/Login',
        alt: 'Pantalla de inicio de sesión de SafeHaven con un personaje animado de médico y el formulario de correo y contraseña',
        alt_en: 'SafeHaven sign-in screen with an animated doctor character and the email and password form',
      },
      {
        src: '/Projects/SafeHaven/AdminDashboard',
        alt: 'Panel del psicólogo con accesos a su agenda de citas, sus pacientes y su perfil profesional',
        alt_en: 'Psychologist panel with shortcuts to their appointment schedule, their patients and their professional profile',
      },
      {
        src: '/Projects/SafeHaven/DashboardPsicologo',
        alt: 'Panel de gestión del administrador con accesos a pacientes, psicólogos, citas y consultorios',
        alt_en: 'Admin management panel with shortcuts to patients, psychologists, appointments and consulting rooms',
      },
      {
        src: '/Projects/SafeHaven/DashboardPaciente',
        alt: 'Panel del paciente con accesos a sus citas, al directorio de psicólogos y a su perfil',
        alt_en: 'Patient panel with shortcuts to their appointments, the psychologist directory and their profile',
      },
      {
        src: '/Projects/SafeHaven/Citas',
        alt: 'Tabla de citas con motivo, tipo presencial o virtual, estado, fecha, hora, duración, paciente, psicólogo y consultorio',
        alt_en: 'Appointments table with reason, in-person or virtual type, status, date, time, duration, patient, psychologist and consulting room',
      },
      {
        src: '/Projects/SafeHaven/CreacionCita',
        alt: 'Formulario «Nueva cita» con motivo, duración, tipo de cita, fecha, hora, paciente, psicólogo y consultorio',
        alt_en: '"Nueva cita" form with reason, duration, appointment type, date, time, patient, psychologist and consulting room',
      },
      {
        src: '/Projects/SafeHaven/Pacientes',
        alt: 'Tabla de pacientes con nombre, correo, teléfono, aseguradora y estado de salud, con botones para editar y eliminar',
        alt_en: 'Patients table with name, email, phone, insurer and health status, with edit and delete buttons',
      },
      {
        src: '/Projects/SafeHaven/Psicologos',
        alt: 'Directorio de psicólogos con especialidad, años de experiencia y horario de atención',
        alt_en: 'Psychologist directory with specialty, years of experience and office hours',
      },
      {
        src: '/Projects/SafeHaven/PerfilPaciente',
        alt: 'Perfil de un paciente con el formulario para editar sus datos personales, su aseguradora y su estado de salud',
        alt_en: 'Patient profile with the form to edit personal details, insurer and health status',
      },
      {
        src: '/Projects/SafeHaven/CursosSaludMental',
        alt: 'Catálogo de cursos de salud mental con la duración, los cupos y el nivel de cada curso',
        alt_en: 'Mental health course catalog showing the duration, seats and level of each course',
      },
      {
        src: '/Projects/SafeHaven/Contacto',
        alt: 'Página de contacto con formulario de mensaje, datos de la clínica y un recuadro con la línea de crisis',
        alt_en: "Contact page with a message form, the clinic's details and a box with the crisis line",
      },
    ],
    tags: ['Spring Boot', 'Java', 'PostgreSQL', 'React', 'TypeScript', 'JWT'],
    github: 'https://github.com/anuarthr/safehaven-backend-v2',
    githubFrontend: 'https://github.com/anuarthr/safehaven-frontend-v2',
    demo: '',
    featured: true,
  },

  // Proyectos académicos / colaborativos
  {
    title: 'Dígitos Manuscritos: Machine Learning',
    title_en: 'Handwritten Digits: Machine Learning',
    description:
      'Proyecto en equipo de la materia de Inteligencia Artificial. Clasificación de unas 21 600 imágenes de dígitos manuscritos de estilo europeo: manejo de datos con pandas, reducción de dimensionalidad con PCA y comparación de Random Forest, árbol de decisión, regresión logística y MLP con scikit-learn. La mejor exactitud (accuracy) fue del 78,5 %, con MLP.',
    description_en:
      'Team project for the Artificial Intelligence course. Classification of about 21,600 European-style handwritten digit images: data handling with pandas, dimensionality reduction with PCA, and a comparison of Random Forest, Decision Tree, Logistic Regression and MLP with scikit-learn. Best accuracy: 78.5%, with MLP.',
    images: [],
    tags: ['Python', 'pandas', 'NumPy', 'scikit-learn', 'PCA', 'Jupyter'],
    github: 'https://github.com/anuarthr/digits-classification-ML',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
  {
    title: 'Seguridad en APIs: Hacking Ético',
    title_en: 'API Security: Ethical Hacking',
    description:
      'Proyecto individual de la materia de Hacking Ético. Análisis de una API REST deliberadamente vulnerable (FastAPI, PostgreSQL, Docker) según OWASP API Security Top 10 (2023): exploté tres vulnerabilidades, diseñé un nivel nuevo que encadena otras dos y apliqué mitigaciones validadas antes y después con scripts de explotación en Python.',
    description_en:
      'Individual project for the Ethical Hacking course. Analysis of a deliberately vulnerable REST API (FastAPI, PostgreSQL, Docker) against the OWASP API Security Top 10 (2023): exploited three vulnerabilities, designed a new level that chains two more, and applied mitigations validated before and after with Python exploit scripts.',
    images: [],
    tags: ['Python', 'FastAPI', 'OWASP API Top 10', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/anuarthr/api-security-project',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
  {
    title: 'SenseAble: Accesibilidad Visual',
    title_en: 'SenseAble: Visual Accessibility',
    description:
      'App Android de accesibilidad que convierte texto de imágenes a audio para personas con discapacidad visual. Arquitectura Clean/MVVM con Kotlin, OCR automático con Google ML Kit (cámara) y narración por Text-to-Speech.',
    description_en:
      'Android accessibility app converting text from images to audio for visually impaired users. Clean/MVVM architecture in Kotlin, automatic OCR via Google ML Kit (camera), and Text-to-Speech narration.',
    images: [],
    tags: ['Kotlin', 'Android Studio', 'Google ML Kit', 'TTS', 'MVVM'],
    github: 'https://github.com/anuarthr/SenseAble',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
  {
    title: 'Pokémon Team: DevOps & Full-Stack',
    title_en: 'Pokémon Team: DevOps & Full-Stack',
    description:
      'Proyecto colaborativo de consumo de APIs bajo metodologías ágiles. Gestioné ramas, pull requests y code reviews con Azure DevOps. Implementé consumo de datos externos y manejo de estado en React.',
    description_en:
      'Collaborative API consumption project under agile methodologies. Managed branches, pull requests, and code reviews with Azure DevOps. Implemented external data consumption and state management in React.',
    images: [],
    tags: ['React', 'Azure DevOps', 'REST APIs', 'Git'],
    github: '',
    githubFrontend: '',
    demo: '',
    featured: false,
  },
]
