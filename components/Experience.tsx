import Card from './Card'

export default function Experience() {
  return (
    <section id="experience">
    <div className="space-y-8">

      <Card>
        <h3 className="text-lg font-semibold">Intellive Digital</h3>
        <p className="text-xs text-[var(--muted)]">2024 · Database Developer</p>
        <p className="text-[var(--muted)] mt-3 leading-relaxed">
          Designed and optimized PostgreSQL schemas and query performance for
          client-facing applications, reducing data retrieval bottlenecks and
          improving backend response times.
        </p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">Brototype</h3>
        <p className="text-xs text-[var(--muted)]">2023 · Business Development</p>
        <p className="text-[var(--muted)] mt-3 leading-relaxed">
          Drove business development for a developer-training platform - managing
          client communications, running sales discussions, and building relationships
          with prospective learners and partners.
        </p>
      </Card>

    </div>
    </section>
  )
}