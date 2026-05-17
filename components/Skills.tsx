const skillGroups = [
  {
    label: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion'],
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express', 'REST APIs', 'JWT Auth', 'NextAuth'],
  },
  {
    label: 'Databases',
    skills: ['PostgreSQL', 'MongoDB', 'Prisma'],
  },
  {
    label: 'DevOps & Infra',
    skills: ['Docker', 'Nginx', 'GitHub Actions', 'Git & GitHub', 'Linux'],
  },
  {
    label: 'Fundamentals',
    skills: ['System Design', 'Cloud basics', 'Cybersecurity basics'],
  },
]

export default function Skills() {
  return (
    <div className="space-y-6">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="text-xs text-[var(--muted)] uppercase tracking-widest mb-3">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-white/10 text-sm text-[var(--muted)] hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}