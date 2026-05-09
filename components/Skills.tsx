export default function Skills() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "Framer Motion",
    "Docker",
    "Git & GitHub",
    "REST APIs",
    "JWT Auth",
    "System Design basics",
    "Linux",
    "Cloud basics",
    "Cybersecurity basics"
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {skills.map((skill) => (
        <span
          key={skill}
          className="px-3 py-1 rounded-full border border-white/10 text-sm text-[var(--muted)] hover:text-white transition"
        >
          {skill}
        </span>
      ))}
    </div>
  )
}