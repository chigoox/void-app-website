import {
  Roboto
} from 'next/font/google'
import './globals.css'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Void Apps',
  description: 'Apps & Websites',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
