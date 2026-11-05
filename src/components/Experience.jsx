import { FiMapPin, FiCalendar } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { experiences } from '../data/experience'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

function ExperienceCard({ exp, index }) {
  const { lang } = useLang()
  const en = lang === 'en'
  const role = en ? exp.role_en : exp.role
  const period = en ? exp.period_en : exp.period
  const location = en ? exp.location_en : exp.location
  const summary = en ? exp.summary_en : exp.summary
  const highlights = en ? exp.highlights_en : exp.highlights
  const name = exp.app ?? exp.company

  return (
    <Reveal delay={index * 0.1}>
      <article className="relative flex gap-6">
        <div className="flex flex-col items-center">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-base font-display text-sm font-bold text-accent-light">
            {name.charAt(0)}
          </div>
          <div className="mt-2 w-px flex-1 bg-white/10" />
        </div>

        <div className="glass mb-8 flex-1 rounded-2xl p-6">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <h3 className="text-lg font-bold text-white">{role}</h3>
              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span className="text-sm font-medium text-slate-300">{name}</span>
                {exp.app && (
                  <>
                    <span className="text-slate-500">·</span>
                    <span className="text-sm text-slate-400">{exp.company}</span>
                  </>
                )}
              </div>
            </div>

            <div className="flex flex-col items-end gap-1 text-xs text-slate-500">
              <span className="flex items-center gap-1">
                <FiCalendar className="text-[11px]" />
                {period}
              </span>
              <span className="flex items-center gap-1">
                <FiMapPin className="text-[11px]" />
                {location}
              </span>
            </div>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-400">{summary}</p>

          <ul className="mt-4 space-y-2">
            {highlights.map((h, i) => (
              <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-300">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-2">
            {exp.tags.map((tag) => (
              <span key={tag} className="chip">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Experience() {
  const { lang } = useLang()
  const tr = t[lang].experience

  return (
    <section id="experiencia" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />
      <div className="mx-auto max-w-3xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.company + exp.role} exp={exp} index={i} />
        ))}
      </div>
    </section>
  )
}
