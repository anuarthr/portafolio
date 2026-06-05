# Portafolio Personal · Anuarth Rincón

Single Page Application en **React + Vite + Tailwind CSS** con modo oscuro, diseño responsive y animaciones sutiles con **Framer Motion**. Pensado para un estudiante de Ingeniería de Sistemas en busca de prácticas.

## Stack

- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion (animaciones)
- react-icons (íconos / devicons)

## Empezar

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera /dist
npm run preview  # previsualiza el build
```

## Personalizar

Toda tu información vive en archivos de datos editables, no hay que tocar los componentes:

- `src/data/site.js` — nombre, iniciales, intro, stats, email, GitHub, LinkedIn, ruta del CV.
- `src/data/projects.js` — tus proyectos (título, descripción, tags, links, `featured: true` para el destacado ⭐).
- `src/data/skills.js` — skills por categoría con su ícono y nivel (0-100).

### Assets a reemplazar (carpeta `public/`)

- `profile.jpg` — tu foto de perfil (cuadrada). Si falla, el Hero muestra tus iniciales.
- `cv.pdf` — tu CV real (el botón "Descargar CV" lo descarga).
- `og-image.png` — imagen para redes sociales (1200×630).
- `favicon.svg` — ícono del sitio.

### SEO

Edita los meta tags (`title`, `description`, `og:*`) en `index.html`.

### Color de acento

Definido en `tailwind.config.js` bajo `colors.accent` (azul oscuro `#2563eb`). Cámbialo ahí para reflejarlo en todo el sitio.

## Estructura

```
src/
├── components/   Navbar, Hero, About, Projects, Skills, Contact, Footer, etc.
├── data/         site.js, projects.js, skills.js
├── App.jsx
├── main.jsx
└── index.css
public/           profile.jpg, cv.pdf, og-image.png, favicon.svg
```

## Deploy en Vercel

1. Sube el proyecto a un repositorio de GitHub.
2. En [vercel.com](https://vercel.com) → **Add New Project** → importa el repo.
3. Vercel detecta Vite automáticamente (build `npm run build`, output `dist`). Deploy.
4. Obtendrás un dominio `tu-proyecto.vercel.app`.

O por CLI:

```bash
npm i -g vercel
vercel
```

## Formulario de contacto

Por defecto abre el cliente de correo del visitante (`mailto:`). Para envío real sin abrir el correo, integra [Formspree](https://formspree.io) o [EmailJS](https://www.emailjs.com) en `src/components/Contact.jsx`.
