export default function Project() {
  return (
    <div className="space-y-10">

      <div className="py-6 border-0">

        <h3 className="text-xl font-semibold">
          Weather App
        </h3>

        <p className="text-[var(--muted)] mt-2 leading-relaxed">
          Real-time weather dashboard using API integration.
        </p>

        <div className="flex gap-6 mt-4 text-sm">

          <a
            href="https://weather-app-zeta-ten-59.vercel.app/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Live
          </a>

          <a
            href="https://github.com/prathiusharun/Weather-app"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            GitHub
          </a>

        </div>

      </div>

      <div className="py-6 border-0">

        <h3 className="text-xl font-semibold">
          Job Tracker
        </h3>

        <p className="text-[var(--muted)] mt-2 leading-relaxed">
          Full-stack SaaS for tracking job applications. Built with Next.js 16,
          NextAuth v5, Prisma 7, PostgreSQL, Tailwind CSS v4, shadcn/ui, Docker,
          Nginx, GitHub Actions CI.
        </p>

        <div className="flex gap-6 mt-4 text-sm">

          <a
            href="https://job-tracker-henna-gamma.vercel.app/"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Live
          </a>

          <a
            href="https://github.com/prathiusharun/job-tracker"
            target="_blank"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            GitHub
          </a>

        </div>

      </div>

    </div>
  )
}
