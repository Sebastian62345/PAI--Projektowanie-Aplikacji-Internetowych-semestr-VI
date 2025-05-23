import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useMovies } from '@/context/MovieContext'

export default function AdminPanel() {
  const router = useRouter()
  const { isAdmin } = useMovies() // W rzeczywistej aplikacji dodaj isAdmin do kontekstu

  useEffect(() => {
    // W rzeczywistej aplikacji sprawdź autentykację
    const isAdmin = false // Tymczasowe - zawsze przekierowuje
    if (!isAdmin) {
      router.push('/')
    }
  }, [])

  if (!isAdmin) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p className="text-red-500">Brak uprawnień administratora</p>
      </div>
    )
  }

  // ... reszta komponentu ...
}
