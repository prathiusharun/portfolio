import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Project from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'
import ThemeToggle from '@/components/ThemeToggle'

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6">

      <ThemeToggle />

      <Hero />

      <Section title="Work">
        <Project />
      </Section>

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Skills">
        <Skills />
      </Section>

      <Footer />

    </main>
  )
}