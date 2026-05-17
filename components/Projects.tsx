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
    <div className="space-y-4">
      {projects.map((project) => (
        <div
          key={project.title}
          className="border border-white/10 rounded-xl px-6 py-5 hover:border-white/20 transition"
        >
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-sm font-medium text-white">{project.title}</h3>
            <div className="flex gap-2 flex-shrink-0">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] px-3 py-1 rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/25 transition"
              >
                Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-[11px] px-3 py-1 rounded-full border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/25 transition"
              >
                GitHub
              </a>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)] leading-relaxed mb-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] px-2 py-0.5 rounded bg-white/5 text-[var(--muted)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}