import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug } from '@/lib/posts'
import { format } from 'date-fns'
import Link from 'next/link'

interface Params {
  slug: string
}

export function generateStaticParams() {
  return getAllPosts()
    .filter((post) => post.slug)
    .map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      tags: post.tags,
    },
  }
}

export default async function PostPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const mdxModule = await import(`@/content/posts/${slug}.mdx`)
  const MDXContent = mdxModule.default

  return (
    <article>
      <header className="blog-container">
        <Link href="/blog" className="article-back-link">
          <span aria-hidden="true">←</span>
          Back to writing
        </Link>

        <div className="article-header-copy">
          <div className="article-tags">
            {post.tags?.map((tag) => (
              <span key={tag} className="article-tag">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="article-title">{post.title}</h1>

          <p className="article-description">{post.description}</p>

          <div className="article-meta">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMMM d, yyyy')}
            </time>
            <span>/</span>
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      <div className="article-divider">
        <div className="blog-container">
          <div className="article-content">
            <div className="article-body">
              <MDXContent />
            </div>
          </div>
        </div>
      </div>

      <footer className="article-footer">
        <div className="blog-container">
          <div className="article-footer-content">
            <p className="eyebrow">Keep reading</p>

            <Link href="/blog" className="article-more-link">
              <span>More engineering notes</span>
              <small>Browse all writing ↗</small>
            </Link>
          </div>
        </div>
      </footer>
    </article>
  )
}
