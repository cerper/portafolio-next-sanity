import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Link from 'next/link'
import { getPages } from '@/sanity/sanity-utils'
import page from '@/sanity/schemas/page-schema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portafolio David',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages()
  return (
    <html lang="en">
      <body className="text-center max-w-full min-h-[70vh] mx-auto py-10 bg-gradient-to-r from-blue-600/70 via-blue-400 to-blue-300">
        <header className="flex justify-center gap-8  text-lg font-bold ">
          <Link href="/" className="text-lg font-bold ">
            Home
          </Link>

          <div className="flex justify-evenly gap-8">
            {pages.map((page) => (
              <Link
                key={page._id}
                href={`/${page.slug}`}
                className=" hover:bg-green-400 transition"
              >
                {page.title}
              </Link>
            ))}
          </div>
        </header>
        <main className="py-8">{children}</main>
      </body>
    </html>
  )
}
