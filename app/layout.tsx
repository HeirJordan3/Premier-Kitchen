import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'
import ClientStyles from './components/ClientStyles'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Premier Kitchen Food Services',
  description: 'Elevating Culinary Experiences Across Pennsylvania',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ClientStyles />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
