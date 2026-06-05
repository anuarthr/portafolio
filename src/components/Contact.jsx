import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend, FiInstagram, FiLoader } from 'react-icons/fi'
import Reveal from './Reveal'
import SectionTitle from './SectionTitle'
import { site } from '../data/site'
import { useLang } from '../context/LangContext'
import { t } from '../i18n/translations'

const FORMSPREE_URL = 'https://formspree.io/f/mbdedlnr'

const socials = [
  { icon: FiGithub, href: site.github, label: 'GitHub', color: 'hover:text-white' },
  { icon: FiLinkedin, href: site.linkedin, label: 'LinkedIn', color: 'hover:text-[#0a66c2]' },
  { icon: FiInstagram, href: site.instagram, label: 'Instagram', color: 'hover:text-[#e1306c]' },
  { icon: FiMail, href: `mailto:${site.email}`, label: 'Email', color: 'hover:text-accent-light' },
]

export default function Contact() {
  const { lang } = useLang()
  const tr = t[lang].contact
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | loading | sent | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      })
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contacto" className="section-pad">
      <SectionTitle kicker={tr.kicker} title={tr.title} />

      <div className="mx-auto max-w-2xl">
        <Reveal>
          <form onSubmit={handleSubmit} className="glass space-y-5 rounded-2xl p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">{tr.name}</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'sent'}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-accent-light disabled:opacity-50"
                  placeholder={tr.namePh}
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium text-slate-300">{tr.email}</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  disabled={status === 'loading' || status === 'sent'}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-accent-light disabled:opacity-50"
                  placeholder={tr.emailPh}
                />
              </div>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-slate-300">{tr.message}</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                disabled={status === 'loading' || status === 'sent'}
                className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-accent-light disabled:opacity-50"
                placeholder={tr.messagePh}
              />
            </div>

            {status === 'error' && (
              <p className="text-center text-sm text-red-400">{tr.error}</p>
            )}

            <button
              type="submit"
              disabled={status === 'loading' || status === 'sent'}
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:bg-accent-light hover:shadow-accent/40 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? (
                <>
                  <FiLoader className="animate-spin" />
                  {tr.sending}
                </>
              ) : status === 'sent' ? (
                tr.sent
              ) : (
                <>
                  <FiSend />
                  {tr.send}
                </>
              )}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 flex items-center justify-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                aria-label={s.label}
                className={`text-2xl text-slate-400 transition-all hover:-translate-y-1 ${s.color}`}
              >
                <s.icon />
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
