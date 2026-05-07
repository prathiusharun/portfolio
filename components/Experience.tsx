import Card from './Card'

export default function Experience() {
  return (
    <div className="space-y-8">

      <Card>
        <h3 className="text-lg font-semibold">
          Intellive Digital
        </h3>

        <p className="text-sm text-[var(--muted)] mt-1">
          Database Developer
        </p>

        <p className="text-[var(--muted)] mt-3 leading-relaxed">
          Optimized backend systems and improved database workflows.
        </p>
      </Card>

      <Card>
        <h3 className="text-lg font-semibold">
          Brototype
        </h3>

        <p className="text-sm text-[var(--muted)] mt-1">
          Business Development
        </p>

        <p className="text-[var(--muted)] mt-3 leading-relaxed">
          Worked on communication, sales discussions, and client interaction.
        </p>
      </Card>

    </div>
  )
}