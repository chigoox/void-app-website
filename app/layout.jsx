import {
  Inter, Poppins, Roboto
} from 'next/font/google'
import './globals.css'
import NavBar from '@/app/Componets/Header/NavBar.jsx'

const inter = Roboto({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: 'Void Apps',
  description: 'Apps & Websites',
}



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
