import { FiArrowDown, FiLayers, FiGitMerge, FiCheckCircle, FiCpu } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { caseStudy } from '../data/caseStudy'
import { useLang } from '../context/LangContext'

const blockIcons = [FiLayers, FiGitMerge, FiCheckCircle]

function Node({ children, accent = false }) {
  return (
    <div
      className={`rounded-xl border px-4 py-3 text-center text-sm font-medium ${
        accent
          ? 'border-accent/60 bg-accent/15 text-white shadow-lg shadow-accent/10'
          : 'border-white/10 bg-white/[0.04] text-slate-200'
      }`}
    >
      {children}
    </div>
  )
}

function Arrow({ label }) {
  return (
    <div className="grid min-h-10 grid-cols-[1fr_auto_1fr] items-center gap-3 py-2">
      <span />
      <FiArrowDown aria-hidden="true" className="text-lg text-slate-500" />
      {label ? (
        <span className="chip justify-self-start border-accent/40 text-[11px] leading-tight text-accent-light">
          {label}
        </span>
      ) : (
        <span />
      )}
    </div>
  )
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
      <div className="grid gap-10 md:grid-cols-2 md:gap-12">
        <Column heading={d.before}>
          <Node>{d.mobile}</Node>
          <Arrow />
          <div className="grid grid-cols-2 gap-3">
            <Node>{d.legacyA}</Node>
            <Node>{d.legacyB}</Node>
          </div>
          <p className="mt-2 text-center text-xs text-slate-500">{d.legacyNote}</p>
          <Arrow />
          <Node>{d.database}</Node>
        </Column>

        <Column heading={d.after}>
          <Node>{d.mobile}</Node>
          <Arrow label={d.unchanged} />
          <Node accent>{d.service}</Node>
          <p className="mt-2 text-center text-xs text-slate-500">{d.serviceNote}</p>
          <Arrow />
          <Node>{d.database}</Node>
        </Column>
      </div>
      <figcaption className="mt-6 text-center text-xs text-slate-500">{d.caption}</figcaption>
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
