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

    document.documentElement.classList.toggle("dark")
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button
      onClick={toggle}
      className="fixed top-5 right-5 border px-3 py-1 rounded"
    >
      {dark ? 'Light' : 'Dark'}
    </button>
  )
}