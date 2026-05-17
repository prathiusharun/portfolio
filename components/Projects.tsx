export default function Project() {
  return (
    <div className="space-y-10">

      <div className="py-6 border-0">
        <h3 className="text-xl font-semibold">Weather App</h3>
        <p className="text-[var(--muted)] mt-2 leading-relaxed">
          Real-time weather dashboard built with React and a public weather API.
          Features city search, live temperature, humidity, and forecast data.
        </p>
        <div className="flex gap-6 mt-4 text-sm">
          <a href="https://weather-app-zeta-ten-59.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">Live</a>
          <a href="https://github.com/prathiusharun/Weather-app" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">GitHub</a>
        </div>
      </div>

      <div className="py-6 border-0">
        <h3 className="text-xl font-semibold">Job Tracker</h3>
        
        <p className="text-[var(--muted)] mt-2 leading-relaxed">
  Full-stack SaaS that centralizes job application tracking with status 
  management, notes, and deadline visibility. Built with Next.js 16, NextAuth v5, 
  Prisma 7, PostgreSQL, Docker, Nginx, and GitHub Actions CI/CD.
</p>
        <div className="flex gap-6 mt-4 text-sm">
          <a href="https://job-tracker-henna-gamma.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">Live</a>
          <a href="https://github.com/prathiusharun/job-tracker" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition">GitHub</a>
        </div>
      </div>

    </div>
  )
}