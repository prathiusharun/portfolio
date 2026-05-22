import Image from 'next/image'
import Link from 'next/link'
export default function Hero() {
  return (
    <header className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden px-6">

      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-500/20 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-purple-500/10 blur-3xl rounded-full" />
      </div>

      <div className="container-width text-center fade-in">
       <nav className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-[var(--muted)]">
  <Link href="/" className="hover:text-white transition">
    Home
  </Link>

  <a
    href="#about"
    className="hover:text-white transition"
  >
    About
  </a>

  <a
    href="#skills"
    className="hover:text-white transition"
  >
    Skills
  </a>

  <a
    href="#experience"
    className="hover:text-white transition"
  >
    Experience
  </a>

  <a
    href="#projects"
    className="hover:text-white transition"
  >
    Projects
  </a>

  <a
    href="#contact"
    className="hover:text-white transition"
  >
    Contact
  </a>

  <a
    href="https://prathiush-blog.vercel.app/"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-white transition"
  >
    Blog
  </a>
</nav>
        {/* Profile */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-2xl scale-125" />
            <Image
              src="/images/ai.jpg"
              alt="Prathiush Arun - Full Stack Engineer"
              width={150}
              height={150}
              priority
              className="relative rounded-full border border-white/10 shadow-2xl object-cover"
            />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-6 text-5xl md:text-7xl font-bold tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-zinc-500 bg-clip-text text-transparent">
            Prathiush Arun
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-5 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
          Full Stack Engineer building modern SaaS products,
          AI tools, automation systems, and scalable digital experiences.
        </p>
        {/* Bio — SEO body text */}
<p className="mt-4 text-sm text-[var(--muted)] max-w-xl mx-auto leading-relaxed">
I'm Prathiush Arun, a Full Stack Engineer from Kerala, India specializing in Next.js, React, TypeScript, Node.js, scalable backend systems, and modern web applications.
</p>

    

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 mt-6 text-sm text-[var(--muted)]">
          <a href="https://github.com/prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
          <a href="https://www.linkedin.com/in/prathiusharun/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
          <a href="https://x.com/prathiusharun_" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Twitter</a>
          <a href="https://substack.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Substack</a>
          <a href="https://medium.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Medium</a>
          </div>

        <div className="mt-16 text-[var(--muted)] text-sm animate-pulse">
          Scroll to explore
        </div>

      </div>
    </header>
  )
}