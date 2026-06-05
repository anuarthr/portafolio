import Reveal from './Reveal'

export default function SectionTitle({ kicker, title }) {
  return (
    <Reveal className="mb-14 text-center">
      {kicker && (
        <span className="text-sm font-semibold uppercase tracking-widest text-accent-light">
          {kicker}
        </span>
      )}
      <h2 className="mt-2 text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-accent to-accent-light" />
    </Reveal>
  )
}
