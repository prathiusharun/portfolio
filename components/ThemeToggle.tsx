'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')

    const isDark = saved === 'dark'

    document.documentElement.classList.toggle('dark', isDark)
    setDark(isDark)
  }, [])

  const toggle = () => {
    const next = !dark

    setDark(next)

    document.documentElement.classList.toggle('dark', next)

    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="
        fixed top-4 right-4 z-50
        px-3 py-1
        rounded-full
        border border-white/20
        backdrop-blur
        text-sm
      "
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}