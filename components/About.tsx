export default function About() {
  return (
    <div className="space-y-4 text-[var(--muted)] leading-relaxed max-w-2xl">
      <p>
        I'm a self-taught Full Stack Engineer from Kerala, India, with a background 
        spanning frontend, backend, databases, networking, and DevOps. 
      </p>
      <p>
        My focus is on production-grade engineering: CI/CD pipelines, containerized 
        deployments, auth systems, and scalable APIs - not just making things work, 
        but making them work the right way. I write about what I learn on{' '}
        <a href="https://medium.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Medium</a>
        {' '}and{' '}
        <a href="https://substack.com/@prathiusharun" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Substack</a>.
      </p>
      <p>
        Currently open to full-stack or backend engineering roles - remote or US/Canada based.
      </p>
    </div>
  )
}