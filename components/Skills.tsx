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
    <div className="space-y-10">
      {skillGroups.map((group) => (
        <div key={group.label} className="space-y-4">
          {/* Section Header */}
          <p className="flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
            {group.label}
            <span className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
          </p>

          {/* Skills Grid */}
          <div className="flex flex-wrap gap-3">
            {group.skills.map((skill) => (
              <span
                key={skill.name}
                className="relative px-4 py-1.5 rounded-full text-sm text-[var(--muted)] border border-white/10
                           bg-white/[0.02] backdrop-blur-md
                           hover:text-white hover:border-white/25 hover:bg-white/10
                           transition duration-200 shadow-sm"
              >
                {/* subtle glow (NOT a dot anymore) */}
                <span
                  className="absolute inset-0 rounded-full opacity-0 hover:opacity-100 transition"
                  style={{
                    boxShadow: `0 0 20px ${skill.color}33`,
                  }}
                />

                {/* text only (no circle) */}
                <span className="relative z-10">{skill.name}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}