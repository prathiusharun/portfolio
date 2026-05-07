import Card from './Card'

export default function Project() {
  return (
    <Card>

      <h3 className="text-lg font-semibold">
        Weather App
      </h3>

      <p className="text-[var(--muted)] mt-2 leading-relaxed">
        Real-time weather dashboard using API integration.
      </p>

      <div className="flex items-center gap-4 mt-4 text-sm">

        <a
          href="https://weather-app-zeta-ten-59.vercel.app/"
          target="_blank"
          className="text-[var(--text)] hover:opacity-70 transition"
        >
          Live Demo →
        </a>

        <a
          href="https://github.com/prathiusharun/Weather-app"
          target="_blank"
          className="text-[var(--muted)] hover:text-[var(--text)] transition"
        >
          GitHub
        </a>

      </div>

    </Card>
  )
}