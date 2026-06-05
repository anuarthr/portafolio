import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiDownload, FiMenu, FiX } from 'react-icons/fi'
import { site } from '../data/site'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, toggleLang } = useLang()
  const tr = t[lang].nav

  const links = [
    { label: tr.about, href: '#sobre-mi' },
    { label: tr.experience, href: '#experiencia' },
    { label: tr.projects, href: '#proyectos' },
    { label: tr.skills, href: '#skills' },
    { label: tr.contact, href: '#contacto' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav shadow-lg shadow-black/30' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          {site.initials.split('.').map((c, i) =>
            c ? (
              <span key={i}>
                {c}
                <span className="text-accent-light">.</span>
              </span>
            ) : null,
          )}
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          {/* Toggle de idioma */}
          <button
            onClick={toggleLang}
            className="hidden rounded-lg border border-white/15 px-3 py-1.5 text-xs font-bold tracking-wider text-slate-300 transition-all hover:border-accent-light hover:text-white sm:block"
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>

          <a
            href={lang === 'es' ? '/CV_Anuarth_ES.pdf' : '/CV_Anuarth_EN.pdf'}
            download
            className="hidden items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 sm:flex"
          >
            <FiDownload className="text-base" />
            {tr.downloadCV}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-lg p-2 text-slate-200 md:hidden"
            aria-label="Menú"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="glass-nav overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-300 hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="flex gap-2 pt-2">
                <button
                  onClick={toggleLang}
                  className="flex-1 rounded-xl border border-white/15 py-2 text-xs font-bold tracking-wider text-slate-300"
                >
                  {lang === 'es' ? 'EN' : 'ES'}
                </button>
                <a
                  href={lang === 'es' ? '/CV_Anuarth_ES.pdf' : '/CV_Anuarth_EN.pdf'}
                  download
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white"
                >
                  <FiDownload /> {tr.downloadCV}
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
