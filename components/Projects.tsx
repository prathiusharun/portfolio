const projects = [
  {
    title: 'Prathiush.dev - Developer Blog',
    description:
      'Built a production-grade personal blog from scratch - solved SEO, monetization (AdSense), and deployment as an integrated system rather than afterthoughts. MDX authoring, RSS, sitemap, Docker multi-stage builds, and a full GitHub Actions pipeline (lint → type-check → test → push → SSH deploy) running on every push to main.',
    live: 'https://prathiush-blog.vercel.app/',
    github: 'https://github.com/prathiusharun/blog',
    tags: ['Next.js 14', 'TypeScript', 'Docker', 'GitHub Actions', 'AdSense'],
  },
  {
    title: 'Job Tracker',
    description:
      'Job hunting is chaotic - applications pile up with no structure. Built a full-stack SaaS to fix that: Google OAuth, real-time status updates, a stats dashboard, and a pro upgrade flow. Key engineering decisions: Server Actions over API routes to cut network overhead, database sessions over JWT for instant invalidation, middleware route protection in one place, and Prisma groupBy to hit the dashboard stats in a single query instead of multiple round-trips. PageSpeed 100 desktop, 99 mobile.',
    live: 'https://job-tracker-henna-gamma.vercel.app/',
    github: 'https://github.com/prathiusharun/job-tracker',
    tags: ['Next.js 16', 'NextAuth v5', 'Prisma 7', 'PostgreSQL', 'Docker', 'Nginx', 'GitHub Actions'],
  },
  {
    title: 'Weather App',
    description:
      'Treated weather data as a system design problem, not a UI problem. Built a cache-first architecture: memory cache checked first, external API called only on miss, conditional database writes so unchanged data never hits PostgreSQL, and ISR to keep the UI fresh without constant fetching. Result: 0.2s FCP and 0.4s LCP on desktop with zero layout shift.',
    live: 'https://weather-app-zeta-ten-59.vercel.app/',
    github: 'https://github.com/prathiusharun/Weather-app',
    tags: ['React', 'Weather API'],
  },
]

export default function Projects() {
  return (
    <section id="projects">
    <div className="space-y-10">
      {projects.map((project) => (
        <div
          key={project.title}
          className="group relative py-6 transition hover:translate-x-1"
        >
          {/* Header */}
          <div className="flex flex-col gap-3 mb-4">
            <h3 className="text-lg font-semibold text-white group-hover:text-white/90 transition">
              {project.title}
            </h3>

            {/* Action links */}
            <div className="flex gap-3">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full text-xs border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition"
              >
                Live Demo →
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-1.5 rounded-full text-xs border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition"
              >
                GitHub →
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-5 max-w-2xl">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-3 py-1 rounded-full bg-white/0 text-[var(--muted)] border border-white/10 hover:border-white/20 transition"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
    </section>
  )
}
