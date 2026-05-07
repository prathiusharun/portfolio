export default function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mt-6">

      {['React', 'Next.js', 'Node.js', 'MongoDB', 'TypeScript'].map(
        (skill) => (
          <span
            key={skill}
            className="px-4 py-2 border rounded-full text-sm hover:scale-105 transition duration-200"
          >
            {skill}
          </span>
        )
      )}

    </div>
  )
}