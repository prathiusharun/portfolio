export default function Footer() {
  return (
    <footer className="flex items-center justify-center text-center py-16 text-sm text-[var(--muted)]">
      © {new Date().getFullYear()} Prathiush Arun
    </footer>
  )
}