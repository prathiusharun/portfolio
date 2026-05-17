const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'React', color: '#61DAFB' },
      { name: 'Next.js', color: '#000000' },
      { name: 'TypeScript', color: '#3178C6' },
      { name: 'Tailwind CSS', color: '#06B6D4' },
      { name: 'shadcn/ui', color: '#7C3AED' },
      { name: 'Framer Motion', color: '#BB4B96' },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', color: '#539E43' },
      { name: 'Express', color: '#888' },
      { name: 'REST APIs', color: '#378ADD' },
      { name: 'JWT Auth', color: '#F7B731' },
      { name: 'NextAuth', color: '#21C55D' },
    ],
  },
  // ... and so on
]

export default function Skills() {
  return (
    <div className="space-y-8">
      {skillGroups.map((group) => (
        <div key={group.label}>
          <p className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)] mb-3 after:flex-1 after:h-px after:bg-white/10">
            {group.label}
          </p>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill.name}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-white/10 text-sm text-[var(--muted)] hover:text-white hover:border-white/25 hover:bg-white/5 transition"
              >
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: skill.color }}
                />
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}