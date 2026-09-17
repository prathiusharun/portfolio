export default function Footer() {
  return (
    <footer className="site-footer">
      <p>© {new Date().getFullYear()} Prathiush Arun</p>

      <div className="footer-links">
        <a
          href="https://github.com/prathiusharun"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/prathiusharun/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

        <a
  href="https://prathiush-blog.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
>
  Writing
</a>
      </div>
    </footer>
  )
}