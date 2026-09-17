import './blog.css'
import { Navbar } from '@/components/blog/Navbar'
import { Footer } from '@/components/blog/Footer'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="blog-shell">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}