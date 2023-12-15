import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from "@/components/theme-provider"
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Trouvaille',
  description: 'AI platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body > <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >{children}</ThemeProvider></body>
    </html>
    </ClerkProvider>
  )
}
