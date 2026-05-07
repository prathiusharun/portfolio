import './globals.css'

export const metadata = {
  title: 'Prathiush Arun | Full Stack Engineer',
  description:
    'Full Stack Engineer building SaaS products and modern web applications.',
  openGraph: {
    title: 'Prathiush Arun',
    description:
      'Full Stack Engineer building SaaS products and modern web applications.',
    images: ['/images/ai.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  const theme = localStorage.getItem('theme');
                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body>{children}</body>
    </html>
  )
}