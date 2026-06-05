// Skills agrupadas por categoría.
// 'level' (0-100) controla la barra de progreso.
// 'icon' es un componente de react-icons (Simple Icons / Font Awesome).

import {
  SiReact,
  SiNextdotjs,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiExpress,
  SiSpring,
  SiDjango,
  SiExpo,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiKalilinux,
} from 'react-icons/si'
import { FaShieldHalved, FaBug, FaDatabase, FaJava, FaMobileScreenButton, FaAws } from 'react-icons/fa6'

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', icon: SiReact, level: 90 },
      { name: 'Next.js', icon: SiNextdotjs, level: 80 },
      { name: 'TypeScript', icon: SiTypescript, level: 80 },
      { name: 'HTML5', icon: SiHtml5, level: 95 },
      { name: 'CSS3', icon: SiCss, level: 90 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    category: 'Mobile',
    skills: [
      { name: 'React Native', icon: FaMobileScreenButton, level: 78 },
      { name: 'Expo', icon: SiExpo, level: 75 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Java', icon: FaJava, level: 82 },
      { name: 'Spring Boot', icon: SiSpring, level: 78 },
      { name: 'Python', icon: SiPython, level: 82 },
      { name: 'Django / DRF', icon: SiDjango, level: 80 },
      { name: 'Node.js', icon: SiNodedotjs, level: 85 },
      { name: 'Express / REST APIs', icon: SiExpress, level: 82 },
    ],
  },
  {
    category: 'Base de datos',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 82 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
      { name: 'DynamoDB', icon: FaDatabase, level: 75 },
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      { name: 'AWS S3 / Lambda', icon: FaAws, level: 78 },
      { name: 'Git', icon: SiGit, level: 88 },
      { name: 'GitHub', icon: SiGithub, level: 88 },
    ],
  },
  {
    category: 'Seguridad',
    skills: [
      { name: 'OWASP', icon: FaShieldHalved, level: 70 },
      { name: 'Kali Linux', icon: SiKalilinux, level: 65 },
      { name: 'Burp Suite', icon: FaBug, level: 60 },
    ],
  },
]
