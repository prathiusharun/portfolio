export default function Footer() {
  return (
    <footer className="pt-10 border-t border-white/10 text-center text-sm text-[var(--muted)]">
      <p>© {new Date().getFullYear()} Prathiush Arun · Full Stack Engineer</p>
      <p className="mt-1">
        <a href="https://github.com/prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
        {' · '}
        <a href="https://linkedin.com/in/prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
        {' · '}
        <a href="https://medium.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Medium</a>
      </p>
    </footer>
  )
}