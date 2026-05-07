export default function Card({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="group py-6 transition duration-300 hover:translate-x-2">
      {children}
    </div>
  )
}