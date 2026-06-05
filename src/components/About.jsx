import { FiFolder, FiCpu, FiZap } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { site } from '../data/site'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

export default function About() {
  const { lang } = useLang()
  const tr = t[lang].about
  const data = site[lang]

  const stats = [
    { icon: FiFolder, label: lang === 'es' ? 'Proyectos construidos' : 'Projects built', value: site.stats.projects },
    { icon: FiCpu, label: lang === 'es' ? 'Tecnologías dominadas' : 'Technologies mastered', value: site.stats.technologies },
    { icon: FiZap, label: lang === 'es' ? 'Apps en producción' : 'Apps in production', value: site.stats.production },
  ]

  return (
    <section id="sobre-mi" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />

      <div className="grid items-center gap-12 md:grid-cols-2">
        <Reveal>
          <p className="text-lg leading-relaxed text-slate-300">{data.about}</p>
          <p className="mt-5 leading-relaxed text-slate-400">{tr.secondary}</p>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <div className="glass group h-full rounded-2xl p-6 transition-all hover:-translate-y-1 hover:border-accent/40">
                <s.icon className="mb-4 text-2xl text-accent-light" />
                <div className="font-display text-3xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-slate-400">{s.label}</div>
              </div>
            </Reveal>
          ))}
          <Reveal delay={0.3}>
            <div className="glass flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-accent/20 to-transparent p-6 text-center">
              <p className="font-display text-sm font-semibold text-white">
                {tr.seeking}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
