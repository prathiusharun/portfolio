const projects = [
  {
    number: '01',
    title: 'Job Tracker',
    description:
      'A full-stack application for managing job applications, status changes and hiring activity in one place.',
    detail:
      'Built with Next.js, NextAuth, Prisma and PostgreSQL. Key decisions included Server Actions instead of unnecessary API routes, database sessions for immediate invalidation, centralized route protection and a single Prisma groupBy query for dashboard statistics.',
    result: '100 desktop · 99 mobile PageSpeed',
    live: 'https://job-tracker-henna-gamma.vercel.app/',
    github: 'https://github.com/prathiusharun/job-tracker',
    tags: ['Next.js 16', 'PostgreSQL', 'Prisma', 'NextAuth'],
  },
  {
    number: '02',
    title: 'Weather App',
    description:
      'A weather application designed around minimizing unnecessary API and database work while keeping data fresh.',
    detail:
      'Uses a cache-first architecture with memory caching, conditional database writes and ISR. The result was fast rendering with no layout shift and significantly less unnecessary external data fetching.',
    result: '0.2s FCP · 0.4s LCP · zero layout shift',
    live: 'https://weather-app-zeta-ten-59.vercel.app/',
    github: 'https://github.com/prathiusharun/Weather-app',
    tags: ['React', 'Caching', 'ISR', 'Performance'],
  },
]

export default function Projects() {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <article className="project" key={project.title}>
          <div className="project-meta">
            <span>{project.number}</span>
            <span>{project.result}</span>
          </div>

          <div className="project-main">
            <h3>{project.title}</h3>

            <p className="project-description">
              {project.description}
            </p>

            <p className="project-detail">
              {project.detail}
            </p>

            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="project-links">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live demo ↗
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Source code ↗
              </a>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}