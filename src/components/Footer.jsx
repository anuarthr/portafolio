import { FiGithub, FiLinkedin, FiMail, FiInstagram } from 'react-icons/fi'
import { site } from '../data/site'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const socials = [
  { icon: FiGithub, href: site.github, label: 'GitHub' },
  { icon: FiLinkedin, href: site.linkedin, label: 'LinkedIn' },
  { icon: FiInstagram, href: site.instagram, label: 'Instagram' },
  { icon: FiMail, href: `mailto:${site.email}`, label: 'Email' },
]

export default function Footer() {
  const { lang } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-slate-500">
          {t[lang].footer.made}{' '}
          <span className="font-medium text-slate-300">{site.name}</span> · {year}
        </p>
        <div className="flex items-center gap-5">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="text-lg text-slate-500 transition-colors hover:text-accent-light"
            >
              <s.icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
