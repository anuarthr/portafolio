import { FiArrowDown, FiLayers, FiGitMerge, FiCheckCircle, FiCpu } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { caseStudy } from '../data/caseStudy'
import { useLang } from '../context/LangContext'

const blockIcons = [FiLayers, FiGitMerge, FiCheckCircle]

function Node({ children, accent = false, className = '' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border px-2 py-2.5 text-center text-xs font-medium leading-snug sm:text-sm lg:px-3 lg:py-3 ${
        accent
          ? 'border-accent/60 bg-accent/15 text-white shadow-lg shadow-accent/10'
          : 'border-white/10 bg-white/[0.04] text-slate-200'
      } ${className}`}
    >
      {children}
    </div>
  )
}

// Flecha hacia abajo, con una etiqueta opcional debajo.
function Down({ label }) {
  return (
    <div className="flex flex-col items-center gap-1 py-2">
      <FiArrowDown className="text-lg text-slate-500" />
      {label && (
        <span className="rounded-full border border-accent/40 bg-white/[0.04] px-2 py-0.5 text-center text-[10px] font-medium leading-tight text-accent-light sm:text-[11px]">
          {label}
        </span>
      )}
    </div>
  )
}

// Fila de flechas alineada con la fila de nodos de arriba. null deja la celda vacía.
// 'tall' iguala la altura de las dos columnas cuando se ven lado a lado (md en adelante).
function Arrows({ cols, cells, tall = false }) {
  return (
    <div className={`grid items-start gap-2 sm:gap-3 ${cols} ${tall ? 'md:min-h-[4.25rem]' : ''}`}>
      {cells.map((c, i) => (c === null ? <span key={i} /> : <Down key={i} label={c || undefined} />))}
    </div>
  )
}

function Note({ children }) {
  return <p className="mt-2 text-center text-xs text-slate-500">{children}</p>
}

function Column({ heading, children }) {
  return (
    <div>
      <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-500">
        {heading}
      </p>
      {children}
    </div>
  )
}

function Diagram({ d }) {
  return (
    <figure className="glass rounded-2xl p-6 sm:p-8">
      {/* El esquema es visual; su equivalente en texto está en el figcaption. */}
      <div aria-hidden="true" className="grid gap-10 md:grid-cols-2 md:gap-12">
        <Column heading={d.before}>
          {/* La app móvil solo usaba la web; el panel de entidades era una aplicación aparte. */}
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Node className="h-full">{d.mobile}</Node>
            <span />
          </div>
          <Arrows cols="grid-cols-2" cells={['', null]} tall />
          <div className="grid grid-cols-2 gap-2 sm:gap-3">
            <Node className="h-full">{d.legacyWeb}</Node>
            <Node className="h-full">{d.legacyPanel}</Node>
          </div>
          <Note>{d.legacyNote}</Note>
          <Arrows cols="grid-cols-2" cells={['', '']} />
          <Node>{d.database}</Node>
        </Column>

        <Column heading={d.after}>
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            <Node className="h-full">{d.mobile}</Node>
            <Node className="h-full">{d.web}</Node>
            <Node className="h-full">{d.panel}</Node>
          </div>
          <Arrows cols="grid-cols-3" cells={[d.unchanged, '', '']} tall />
          <Node accent>{d.service}</Node>
          <Note>{d.serviceNote}</Note>
          <Arrows cols="grid-cols-1" cells={['']} />
          <Node>{d.database}</Node>
        </Column>
      </div>
      <figcaption className="mt-6 text-center text-xs text-slate-500">
        {d.caption}
        <span className="sr-only"> {d.description}</span>
      </figcaption>
    </figure>
  )
}

export default function CaseStudy() {
  const { lang } = useLang()
  const c = caseStudy[lang]

  return (
    <section id="caso-quejate" className="section-pad">
      <SectionTitle kicker={c.kicker} title={c.title} />

      <Reveal>
        <p className="mx-auto -mt-6 mb-12 max-w-2xl text-center leading-relaxed text-slate-400">
          {c.lead}
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {c.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div className="glass h-full rounded-2xl p-5 sm:p-6">
              <div className="font-display text-3xl font-bold text-white sm:text-4xl">{s.value}</div>
              <div className="mt-1 text-sm text-slate-400">{s.label}</div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-8">
        <Diagram d={c.diagram} />
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {c.blocks.map((b, i) => {
          const Icon = blockIcons[i]
          return (
            <Reveal key={b.title} delay={i * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <Icon aria-hidden="true" className="mb-4 text-2xl text-accent-light" />
                <h3 className="text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{b.text}</p>
              </div>
            </Reveal>
          )
        })}
      </div>

      <Reveal className="mt-8">
        <div className="glass rounded-2xl bg-gradient-to-br from-accent/20 to-transparent p-6 sm:p-8">
          <div className="flex items-center gap-3">
            <FiCpu aria-hidden="true" className="text-2xl text-accent-light" />
            <h3 className="text-lg font-semibold">{c.ai.title}</h3>
          </div>
          <p className="mt-3 leading-relaxed text-slate-300">{c.ai.text}</p>
        </div>
      </Reveal>
    </section>
  )
}
