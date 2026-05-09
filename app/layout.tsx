import './globals.css'
import ThemeToggle from '@/components/ThemeToggle'


export const metadata = {
  title: 'Prathiush Arun | Full Stack Engineer',
  description:
    'Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
  openGraph: {
    title: 'Prathiush Arun',
    description:
      'Full Stack Engineer building modern SaaS products, AI tools, and scalable digital experiences.',
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

                  // DEFAULT = dark
                  if (!theme) {
                    document.documentElement.classList.add('dark');
                    localStorage.setItem('theme', 'dark');
                    return;
                  }

                  if (theme === 'dark') {
                    document.documentElement.classList.add('dark');
                  }

                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  }

                } catch (e) {}
              })();
            `,
          }}
        />
      </head>

      <body>
  <ThemeToggle />
  {children}
</body>
    </html>
  )
}