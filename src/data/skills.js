// Habilidades por categoría, alineadas con «Habilidades técnicas» de las hojas de vida
// de noviembre de 2026. Cada habilidad es un texto o, si cambia según el idioma, { es, en }.

export const skillCategories = [
  {
    es: 'Lenguajes',
    en: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'Kotlin', 'SQL'],
  },
  {
    es: 'Backend',
    en: 'Backend',
    skills: [
      'Node.js',
      'NestJS',
      'Next.js',
      'Django',
      'Django REST Framework',
      'Spring Boot',
      'Prisma',
      'REST',
      'OpenAPI/Swagger',
      'JWT',
      'OAuth 2.0',
      'Auth.js',
      'WebSockets',
    ],
  },
  {
    es: 'Frontend y móvil',
    en: 'Frontend & Mobile',
    skills: [
      'React',
      'Next.js (App Router)',
      'Tailwind CSS',
      'TanStack Query',
      'Zustand',
      'React Native',
      'Expo',
      'EAS Build',
      'FCM',
      'Android',
    ],
  },
  {
    es: 'Bases de datos',
    en: 'Databases',
    skills: ['PostgreSQL', 'PostGIS', 'MySQL', 'SQL Server', 'Redis', 'DynamoDB'],
  },
  {
    es: 'Datos y ML',
    en: 'Data & ML',
    skills: [
      'pandas',
      'NumPy',
      'scikit-learn',
      'NLTK',
      'TF-IDF',
      { es: 'Similitud coseno', en: 'Cosine similarity' },
      { es: 'Sistemas de recomendación', en: 'Recommender systems' },
    ],
  },
  {
    es: 'Nube y DevOps',
    en: 'Cloud & DevOps',
    skills: [
      'AWS (S3, Lambda, IAM)',
      'Docker',
      'GitHub Actions',
      'CI/CD',
      'Render',
      'Vercel',
      'Neon',
      'Git',
      'Azure DevOps',
    ],
  },
  {
    es: 'Pruebas',
    en: 'Testing',
    skills: [
      'Jest',
      'Supertest',
      { es: 'Pruebas unitarias y end-to-end', en: 'Unit and end-to-end testing' },
      { es: 'Cobertura de código', en: 'Code coverage' },
    ],
  },
  {
    es: 'Seguridad',
    en: 'Security',
    skills: [
      'OWASP API Top 10',
      { es: 'Auditoría de seguridad', en: 'Security review' },
      'Kali Linux',
      'Burp Suite',
    ],
  },
]
