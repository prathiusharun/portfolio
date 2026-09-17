import './globals.css'
import { Fraunces, IBM_Plex_Sans } from 'next/font/google'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
})

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  variable: '--font-plex-sans',
})

export const metadata = {
  title: 'Prathiush Arun | Full-Stack Engineer',
  description:
    'I build web systems that help businesses capture leads, manage operations, and turn visitors into customers.',
  verification: {
    google: 'E-kw7kK2M4qXtmsyQ7NDmwuY75OM7Y4XadGFu6YHKCw',
  },
  metadataBase: new URL('https://prathiusharun.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Prathiush Arun | Full-Stack Engineer',
    description:
      'I build web systems that help businesses capture leads, manage operations, and turn visitors into customers.',
    url: 'https://prathiusharun.vercel.app',
    siteName: 'Prathiush Arun',
    images: [
      {
        url: '/images/ai.jpg',
        width: 1200,
        height: 630,
        alt: 'Prathiush Arun | Full-Stack Engineer',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prathiush Arun | Full-Stack Engineer',
    description:
      'I build web systems that help businesses capture leads, manage operations, and turn visitors into customers.',
    images: ['/images/ai.jpg'],
    creator: '@prathiusharun_',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Prathiush Arun',
  jobTitle: 'Full-Stack Engineer',
  description:
    'I build web systems that help businesses capture leads, manage operations, and turn visitors into customers.',
  image: 'https://prathiusharun.vercel.app/images/ai.jpg',
  sameAs: [
    'https://github.com/prathiusharun',
    'https://linkedin.com/in/prathiusharun',
    'https://medium.com/@prathiusharun',
    'https://x.com/prathiusharun_',
    'https://substack.com/@prathiusharun',
    'https://prathiusharun.vercel.app/',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plexSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}