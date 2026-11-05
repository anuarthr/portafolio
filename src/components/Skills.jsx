import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { skillCategories } from '../data/skills'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const label = (skill, lang) => (typeof skill === 'string' ? skill : skill[lang])

export default function Skills() {
  const { lang } = useLang()
  const tr = t[lang].skills

  return (
    <section id="skills" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat, i) => (
          <Reveal key={cat.en} delay={(i % 4) * 0.08}>
            <div className="glass h-full rounded-2xl p-6">
              <h3 className="mb-4 font-display text-lg font-semibold text-white">{cat[lang]}</h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <li key={label(s, 'en')} className="chip">
                    {label(s, lang)}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
