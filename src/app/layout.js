import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Learn Next js',
  description: 'Learn Next js',
}
 const RootLayout =({ children })=> {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <a href="">Home</a>
        </nav>
        {children}
        <footer>
          <h1>footer</h1>
        </footer>
        </body>
    </html>
  )
}


export default RootLayout;
