import '@/styles/globals.css'
import { MovieProvider } from '@/context/MovieContext'
import ResponsiveNavbar from '@/components/ResponsiveNavbar'

export default function App({ Component, pageProps }) {
  return (
    <MovieProvider>
      <div className="min-h-screen bg-gray-100">
        <ResponsiveNavbar />
        <main className="container mx-auto px-4 py-8">
          <Component {...pageProps} />
        </main>
      </div>
    </MovieProvider>
  )
}
