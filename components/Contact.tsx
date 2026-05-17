export default function Contact() {
  return (
    <div className="space-y-4 text-[var(--muted)] leading-relaxed">
      <p>
        I'm currently open to full-stack engineering roles.
        If you're hiring or want to collaborate, reach out directly.
      </p>
      <div className="flex flex-wrap gap-6 text-sm">
        <a href="mailto:prathiusharun2000@gmail.com" className="text-white hover:underline transition">
          prathiusharun2000@gmail.com
        </a>
        <a href="https://linkedin.com/in/prathiusharun" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition">
          LinkedIn
        </a>
        <a href="https://github.com/prathiusharun" target="_blank" rel="noopener noreferrer" className="text-white hover:underline transition">
          GitHub
        </a>
      </div>
    </div>
  )
}
