export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="group py-6">

      <div className="space-y-3">
        {children}
      </div>

    </div>
  )
}