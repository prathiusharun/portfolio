import Link from 'next/link'
import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import { PostCard } from '@/components/blog/PostCard'

export const metadata: Metadata = {
  title: 'Writing | Prathiush Arun',
  description:
    'Engineering notes on full-stack development, performance, architecture, debugging and building web systems.',
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogPage() {
  const posts = getAllPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <section className="blog-container blog-hero">
        <div className="blog-hero-copy">
          <p className="eyebrow">Engineering journal</p>

          <h1 className="blog-page-title">
            Notes on building
            <br />
            <span>real systems.</span>
          </h1>

          <p className="blog-hero-description">
            I write about full-stack engineering, performance, architecture,
            debugging and the lessons that come from actually building
            software.
          </p>
        </div>
      </section>

      {featured && (
        <section className="blog-container blog-featured">
          <div className="editorial-rule" />

          <div className="blog-section-label">
            <p className="eyebrow">Featured</p>

            <span className="font-mono blog-index">
              01
            </span>
          </div>

          <PostCard post={featured} featured />
        </section>
      )}

      <section
        id="writing"
        className="blog-container blog-writing"
      >
        <div className="blog-section-label">
          <p className="eyebrow">All writing</p>

          <span className="font-mono blog-index">
            {String(posts.length).padStart(2, '0')} posts
          </span>
        </div>

        {rest.length > 0 ? (
          <div>
            {rest.map((post, index) => (
              <PostCard
                key={post.slug}
                post={post}
                index={index + 2}
              />
            ))}
          </div>
        ) : (
          <div className="blog-empty">
            <p className="font-mono">
              More writing coming soon.
            </p>
          </div>
        )}
      </section>

      <section className="blog-about">
        <div className="blog-container">
          <div className="blog-about-grid">
            <p className="eyebrow">About the writing</p>

            <div className="blog-about-copy">
              <h2>
                I write about the engineering decisions behind the systems I
                build.
              </h2>

              <p>
                The useful parts of software engineering are often hidden
                behind the final interface. These notes document the decisions,
                tradeoffs, bugs and experiments that happen along the way.
              </p>

              <Link href="/">
                About Prathiush Arun ↗
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}