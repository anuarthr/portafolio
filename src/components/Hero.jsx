import { motion } from 'framer-motion'
import { FiArrowRight, FiMail } from 'react-icons/fi'
import {
  SiReact, SiTypescript, SiSpring, SiDjango,
  SiPostgresql, SiNextdotjs, SiExpo,
} from 'react-icons/si'
import { FaJava, FaAws } from 'react-icons/fa6'
import Typewriter from './Typewriter'
import { site } from '../data/site'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const stack = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Spring Boot', icon: SiSpring },
  { name: 'Django', icon: SiDjango },
  { name: 'Java', icon: FaJava },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'React Native', icon: SiExpo },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'AWS', icon: FaAws },
]

export default function Hero() {
  const { lang } = useLang()
  const tr = t[lang].hero
  const data = site[lang]

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 70% 50% at 50% -10%, rgba(37,99,235,0.18) 0%, transparent 70%)',
      }}
    >
      <div className="section-pad grid w-full items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="chip mb-5">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            {tr.badge}
          </span>

          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {tr.greeting} <span className="text-accent-light">{site.name}</span>
          </h1>

          <p className="mt-4 h-8 text-xl font-medium text-slate-300 sm:text-2xl">
            <Typewriter words={data.roles} />
          </p>

          {/* Stack principal */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-wider text-slate-500">
              {tr.stack}
            </span>
            {stack.map(({ name, icon: Icon }) => (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs font-medium text-slate-300 transition-colors hover:border-accent/40 hover:text-white"
              >
                <Icon className="text-accent-light" />
                {name}
              </span>
            ))}
          </div>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">
            {data.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#proyectos"
              className="group flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40"
            >
              {tr.viewProjects}
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-accent-light hover:bg-white/5"
            >
              <FiMail />
              {tr.contactMe}
            </a>
          </div>
        </motion.div>

        {/* Imagen de perfil */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative animate-float" style={{ willChange: 'transform' }}>
            <div
              className="absolute -inset-1 animate-spin-slow rounded-full bg-gradient-to-tr from-accent via-accent-light to-cyan-400 blur-[2px]"
              style={{ willChange: 'transform' }}
            />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-4 border-base sm:h-72 sm:w-72">
              <img
                src="/Fotoperfilpp.PNG"
                alt={site.name}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextSibling.style.display = 'flex'
                }}
              />
              <div
                className="hidden h-full w-full items-center justify-center bg-surface font-display text-6xl font-bold text-accent-light"
                style={{ display: 'none' }}
              >
                {site.initials}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
