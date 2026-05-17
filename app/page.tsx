import Hero from '@/components/Hero'
import Section from '@/components/Section'
import Project from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Footer from '@/components/Footer'

import Contact from '@/components/Contact'

export default function Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 flex flex-col gap-24 py-16">

      <Hero />

     

      <Section title="Experience">
        <Experience />
      </Section>

      <Section title="Projects">
        <Project />
      </Section>

      <Section title="Skills">
        <Skills />
      </Section>
      <Section title="Contact">
  <Contact />
</Section>

   <div className="pb-8">
  <Footer />
</div>

    </main>
  )
}