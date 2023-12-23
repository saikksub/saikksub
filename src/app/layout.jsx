import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Kiran Sai K',
    default:
      'Kiran Sai K - Full-stack engineer, Freelancer, Founder',
  },
  description:
    `I’m Kiran Sai, a full-stack software engineer and a freelancer from India. I'm known for professionalism and a positive attitude. I really get what clients need and work hard to deliver more than they expect. I've helped a lot of people with their website and app needs, making sure everything is easy to use and works well.`,
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
