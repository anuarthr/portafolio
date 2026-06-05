import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { FiGithub, FiExternalLink, FiCode, FiChevronLeft, FiChevronRight, FiX, FiMaximize2 } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { projects } from '../data/projects'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

function Lightbox({ images, startIdx, onClose }) {
  const [idx, setIdx] = useState(startIdx)

  const prev = useCallback(() => setIdx((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIdx((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
        aria-label="Cerrar"
      >
        <FiX size={20} />
      </button>

      {images.length > 1 && (
        <span className="absolute left-1/2 top-4 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-sm text-white/70">
          {idx + 1} / {images.length}
        </span>
      )}

      <img
        src={images[idx]}
        alt={`Captura ${idx + 1}`}
        className="max-h-[90vh] max-w-[90vw] rounded-xl object-contain shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Anterior"
          >
            <FiChevronLeft size={22} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
            aria-label="Siguiente"
          >
            <FiChevronRight size={22} />
          </button>
          <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i) }}
                className={`h-2 rounded-full transition-all ${i === idx ? 'w-6 bg-white' : 'w-2 bg-white/35'}`}
                aria-label={`Captura ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>,
    document.body
  )
}

function ProjectImage({ project }) {
  const images = project.images?.length ? project.images : project.image ? [project.image] : []
  const [idx, setIdx] = useState(0)
  const [lightbox, setLightbox] = useState(null)

  const prev = (e) => { e.stopPropagation(); setIdx((i) => (i - 1 + images.length) % images.length) }
  const next = (e) => { e.stopPropagation(); setIdx((i) => (i + 1) % images.length) }
  const openLightbox = () => setLightbox(idx)

  if (!images.length) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/15 via-surface to-base">
        <span className="font-display text-lg font-semibold text-slate-500">{project.title}</span>
      </div>
    )
  }

  return (
    <>
      <div className="group/img relative h-full w-full">
        <img
          src={images[idx]}
          alt={`${project.title} – ${idx + 1}`}
          className="h-full w-full cursor-zoom-in object-cover transition-transform duration-500 group-hover:scale-105"
          onClick={openLightbox}
        />
        <button
          onClick={openLightbox}
          className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-xs text-white/80 opacity-0 transition-opacity group-hover/img:opacity-100 hover:bg-black/80"
          aria-label="Ampliar imagen"
        >
          <FiMaximize2 size={11} /> ampliar
        </button>
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover/img:opacity-100 hover:bg-black/80" aria-label="Anterior">
              <FiChevronLeft size={16} />
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-1.5 text-white opacity-0 transition-opacity group-hover/img:opacity-100 hover:bg-black/80" aria-label="Siguiente">
              <FiChevronRight size={16} />
            </button>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1">
              {images.map((_, i) => (
                <button key={i} onClick={(e) => { e.stopPropagation(); setIdx(i) }} className={`h-1.5 rounded-full transition-all ${i === idx ? 'w-4 bg-white' : 'w-1.5 bg-white/40'}`} aria-label={`Captura ${i + 1}`} />
              ))}
            </div>
            <span className="absolute right-2 top-2 rounded-full bg-black/60 px-2 py-0.5 text-xs text-white/80">
              {idx + 1}/{images.length}
            </span>
          </>
        )}
      </div>

      {lightbox !== null && (
        <Lightbox images={images} startIdx={lightbox} onClose={() => setLightbox(null)} />
      )}
    </>
  )
}

function FeaturedCard({ project, index, tr }) {
  const { lang } = useLang()
  const title = lang === 'en' ? project.title_en : project.title
  const description = lang === 'en' ? project.description_en : project.description

  return (
    <Reveal delay={(index % 2) * 0.1}>
      <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
        <div className="relative aspect-video w-full overflow-hidden bg-surface">
          <ProjectImage project={project} />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-card to-transparent opacity-60" />
        </div>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="chip">{tag}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.github && (
              <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-accent-light hover:bg-white/5">
                <FiGithub /> {project.githubFrontend ? tr.backend : tr.viewCode}
              </a>
            )}
            {project.githubFrontend && (
              <a href={project.githubFrontend} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-accent-light hover:bg-white/5">
                <FiCode /> {tr.frontend}
              </a>
            )}
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-accent-light">
                <FiExternalLink /> {tr.viewDemo}
              </a>
            )}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function AcademicCard({ project, tr }) {
  const { lang } = useLang()
  const title = lang === 'en' ? project.title_en : project.title
  const description = lang === 'en' ? project.description_en : project.description

  return (
    <Reveal>
      <article className="glass flex h-full flex-col rounded-xl p-5 transition-all hover:-translate-y-1 hover:border-accent/30">
        <h4 className="font-semibold text-white">{title}</h4>
        <p className="mt-2 flex-1 text-xs leading-relaxed text-slate-400">{description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip text-[10px]">{tag}</span>
          ))}
        </div>
        {project.github && (
          <a href={project.github} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent-light transition-colors hover:text-white">
            <FiGithub size={13} /> {tr.viewCode}
          </a>
        )}
      </article>
    </Reveal>
  )
}

export default function Projects() {
  const { lang } = useLang()
  const tr = t[lang].projects
  const featured = projects.filter((p) => p.featured)
  const academic = projects.filter((p) => !p.featured)

  return (
    <section id="proyectos" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />
      <div className="grid gap-6 md:grid-cols-2">
        {featured.map((p, i) => (
          <FeaturedCard key={p.title} project={p} index={i} tr={tr} />
        ))}
      </div>

      {academic.length > 0 && (
        <div className="mt-16">
          <h3 className="mb-6 text-center font-display text-xl font-semibold text-slate-300">
            {tr.academicTitle}
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {academic.map((p) => (
              <AcademicCard key={p.title} project={p} tr={tr} />
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
