import Link from 'next/link'

export default function Hero() {
  return (
    <header className="site-header">
      <nav className="nav">
        <Link href="/" className="brand">
          Prathiush Arun
        </Link>

        <div className="nav-links">
  <a href="#work">Work</a>
  <a href="#process">How I work</a>
  <a href="https://prathiush-blog.vercel.app/">Writing</a>
  <Link href="/blog">Blog</Link>
  <a href="#contact">Contact</a>
</div>
      </nav>

      <div className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Full-stack engineer · Kerala, India</p>

          <h1>
            I build web systems that turn visitors into customers.
          </h1>

          <p className="hero-description">
            I design and build booking flows, dashboards, automation and
            full-stack web applications for businesses that need more than a
            brochure website.
          </p>

          <div className="hero-actions">
            <a
              href="https://cal.com/prathiush-arun-eiew4p/project-consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="button button-primary"
            >
              Book a call
            </a>

            <a href="#work" className="button button-secondary">
              See the work
            </a>
          </div>
        </div>

        <div className="hero-note">
          <p>
            Next.js · TypeScript · Node.js · PostgreSQL
          </p>
        </div>
      </div>
    </header>
  )
}