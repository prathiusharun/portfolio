export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="flex flex-col">

      <h2 className="text-xl md:text-2xl font-medium mb-6">
        {title}
      </h2>

      {children}

    </section>
  )
}