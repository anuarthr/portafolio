import { motion } from 'framer-motion'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { skillCategories } from '../data/skills'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

function SkillBar({ skill, delay }) {
  const Icon = skill.icon
  return (
    <div>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-slate-200">
          <Icon className="text-lg text-accent-light" />
          {skill.name}
        </span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-white/[0.06]">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-light"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const { lang } = useLang()
  const tr = t[lang].skills

  return (
    <section id="skills" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((cat, i) => {
          const categoryLabel = tr.categories[cat.category] ?? cat.category
          return (
            <Reveal key={cat.category} delay={(i % 3) * 0.1}>
              <div className="glass h-full rounded-2xl p-6">
                <h3 className="mb-5 font-display text-lg font-semibold text-white">
                  {categoryLabel}
                </h3>
                <div className="space-y-4">
                  {cat.skills.map((s, j) => (
                    <SkillBar key={s.name} skill={s} delay={j * 0.08} />
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
