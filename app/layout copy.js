import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdulrazaq Portfolio ',
  description: 'As a full-stack website developer, I Abdulrazaq specialize in creating dynamic, responsive, and user-friendly websites. Leveraging modern technologies like Next.js, React, and Tailwind CSS, I craft seamless front-end experiences while ensuring robust back-end functionality.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


