export default function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string
  eyebrow?: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="site-section" aria-label={title}>
      <div className="section-heading">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}

        <h2>{title}</h2>
      </div>

      {children}
    </section>
  )
}