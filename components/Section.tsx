export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="max-w-4xl mx-auto px-6 py-10">

      <h2 className="text-xl font-semibold mb-6 tracking-tight">
        {title}
      </h2>

      {children}

    </section>
  )
}