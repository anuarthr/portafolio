import { useState, useEffect } from 'react'

// Efecto typewriter que alterna entre varias frases.
export default function Typewriter({ words, typeSpeed = 90, deleteSpeed = 45, pause = 1400 }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[index % words.length]
    let timeout

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause)
    } else if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            deleting
              ? current.slice(0, prev.length - 1)
              : current.slice(0, prev.length + 1),
          )
        },
        deleting ? deleteSpeed : typeSpeed,
      )
    }

    return () => clearTimeout(timeout)
  }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause])

  return (
    <span className="text-accent-light">
      {text}
      <span className="ml-0.5 inline-block w-0.5 animate-blink bg-accent-light align-middle" style={{ height: '1em' }} />
    </span>
  )
}
