import Link from 'next/link'
import { format } from 'date-fns'
import type { Post } from '@/lib/types'

interface PostCardProps {
  post: Post
  featured?: boolean
  index?: number
}

export function PostCard({
  post,
  featured = false,
  index,
}: PostCardProps) {
  return (
    <article className={`post-card ${featured ? 'post-card-featured' : ''}`}>
      <Link
        href={`/blog/${post.slug}`}
        className="post-card-link"
      >
        <div className="post-card-number">
          {featured ? '★' : String(index ?? 1).padStart(2, '0')}
        </div>

        <div className="post-card-content">
          {post.tags?.length > 0 && (
            <div className="post-card-tags">
              {post.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="post-card-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}

          <h2 className="post-card-title">
            {post.title}
          </h2>

          <p className="post-card-description">
            {post.description}
          </p>

          <div className="post-card-meta">
            <time dateTime={post.date}>
              {format(new Date(post.date), 'MMM d, yyyy')}
            </time>

            <span>/</span>

            <span>{post.readingTime}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
