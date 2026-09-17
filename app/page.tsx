import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <main className="site-shell">
      <Hero />

      <Section
        id="services"
        eyebrow="What I build"
        title="Web systems built around how your business actually works."
      >
        <div className="service-grid">
          <article className="service-item">
            <span className="service-number">01</span>
            <h3>Lead capture & booking</h3>
            <p>
              Landing pages, forms, booking flows and customer journeys designed
              to make it easier for people to take the next step.
            </p>
          </article>

          <article className="service-item">
            <span className="service-number">02</span>
            <h3>Internal dashboards & automation</h3>
            <p>
              Tools that replace repetitive manual work with structured
              workflows, dashboards and reliable backend systems.
            </p>
          </article>

          <article className="service-item">
            <span className="service-number">03</span>
            <h3>Performance-focused web apps</h3>
            <p>
              Fast, responsive applications with attention to caching,
              rendering, database queries and measurable performance.
            </p>
          </article>

          <article className="service-item">
            <span className="service-number">04</span>
            <h3>Full-stack applications</h3>
            <p>
              From database design and authentication to the interface your
              customers and team actually use.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="work"
        eyebrow="Selected work"
        title="A few systems I've designed and built."
      >
        <Projects />
      </Section>

      <Section
        id="proof"
        eyebrow="Proof"
        title="No client reviews yet. Here's what I can show you instead."
      >
        <div className="proof-grid">
          <article className="proof-item">
            <span className="proof-number">01</span>
            <h3>Engineering decisions</h3>
            <p>
              I document why systems are designed the way they are, not just
              what technologies were used.
            </p>
          </article>

          <article className="proof-item">
            <span className="proof-number">02</span>
            <h3>Measured performance</h3>
            <p>
              My projects include real performance measurements rather than
              vague claims about being fast.
            </p>
          </article>

          <article className="proof-item">
            <span className="proof-number">03</span>
            <h3>Open source code</h3>
            <p>
              You can inspect the actual implementation behind the projects
              instead of taking a portfolio description on faith.
            </p>
          </article>

          <article className="proof-item">
            <span className="proof-number">04</span>
            <h3>Public writing</h3>
            <p>
              I write about the technical decisions, tradeoffs and systems
              behind the work.
            </p>
          </article>
        </div>
      </Section>

      <Section
        id="process"
        eyebrow="How I work"
        title="A straightforward process."
      >
        <div className="process-list">
          <div className="process-step">
            <span>01</span>
            <div>
              <h3>Understand the problem</h3>
              <p>
                Start with the business problem, users and workflow before
                deciding what needs to be built.
              </p>
            </div>
          </div>

          <div className="process-step">
            <span>02</span>
            <div>
              <h3>Design the solution</h3>
              <p>
                Define the architecture, user flow and technical approach
                before implementation.
              </p>
            </div>
          </div>

          <div className="process-step">
            <span>03</span>
            <div>
              <h3>Build and test</h3>
              <p>
                Build the system in small pieces, validate the important paths
                and measure where performance matters.
              </p>
            </div>
          </div>

          <div className="process-step">
            <span>04</span>
            <div>
              <h3>Ship and improve</h3>
              <p>
                Deploy the product, observe what needs improvement and keep the
                system maintainable as it grows.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="experience"
        eyebrow="Background"
        title="Engineering experience with a business perspective."
      >
        <Experience />
      </Section>

      <Section
        id="contact"
        eyebrow="Let's talk"
        title="Have a system that needs building?"
      >
        <Contact />
      </Section>

      <Footer />
    </main>
  )
}