'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.header
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-[75vh] flex flex-col items-center justify-center text-center"
    >

      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src="/images/ai.jpg"
          alt="Prathiush Arun"
          width={140}
          height={140}
          style={{ objectFit: 'cover' }}
          className="rounded-full border border-white/10 shadow-2xl"
          priority
        />
      </motion.div>

      <h1 className="text-5xl md:text-7xl font-bold tracking-tight mt-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
        Prathiush Arun
      </h1>

      <p className="text-[var(--muted)] mt-4 text-lg">
        Full Stack Engineer • SaaS Builder
      </p>

      <p className="max-w-2xl mt-6 text-[var(--muted)] leading-relaxed text-lg">
        Building scalable applications, automation systems, and modern digital products.
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 mt-10 text-sm">

  <a
    className="text-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5"
    href="https://github.com/prathiusharun"
  >
    GitHub
  </a>

  <a
    className="text-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5"
    href="https://www.linkedin.com/in/prathiusharun/"
  >
    LinkedIn
  </a>

  <a
    className="text-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5"
    href="https://x.com/prathiusharun_"
  >
    Twitter
  </a>

  <a
    className="text-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5"
    href="https://substack.com/@prathiusharun"
  >
    Substack
  </a>

  <a
    className="text-blue-500 hover:text-blue-400 transition duration-200 hover:-translate-y-0.5"
    href="https://medium.com/@prathiusharun"
  >
    Medium
  </a>

</div>

    </motion.header>
  )
}