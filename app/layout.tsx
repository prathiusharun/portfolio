import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'

export const metadata = {
  title: 'Prathiush Arun | Full Stack Engineer',
  description:
    'Prathiush Arun is a Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
      verification: {
    google: 'E-kw7kK2M4qXtmsyQ7NDmwuY75OM7Y4XadGFu6YHKCw',
  metadataBase: new URL('https://portfolio-682g.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prathiush Arun | Full Stack Engineer',
    description:
      'Prathiush Arun is a Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
    url: 'https://portfolio-682g.vercel.app',
    siteName: 'Prathiush Arun',
    images: [
      {
        url: '/images/ai.jpg',
        width: 1200,
        height: 630,
        alt: 'Prathiush Arun - Full Stack Engineer',
      },
    ],
    type: 'profile',
    firstName: 'Prathiush',
    lastName: 'Arun',
  },
  
  twitter: {
    card: 'summary_large_image',
    title: 'Prathiush Arun | Full Stack Engineer',
    description:
      'Prathiush Arun is a Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
    images: ['/images/ai.jpg'],
    creator: '@prathiusharun_',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prathiush Arun',
  url: 'https://portfolio-682g.vercel.app',
  jobTitle: 'Full Stack Engineer',
  description:
    'Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
  image: 'https://portfolio-682g.vercel.app/images/ai.jpg',
  sameAs: [
    'https://github.com/prathiusharun',
    'https://linkedin.com/in/prathiusharun',
    'https://medium.com/@prathiusharun',
    'https://x.com/prathiusharun_',
    'https://substack.com/@prathiusharun',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Theme init — runs before paint to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (!theme) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    return;
                  }
                  if (theme === 'dark') document.documentElement.classList.add('dark');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  )
}