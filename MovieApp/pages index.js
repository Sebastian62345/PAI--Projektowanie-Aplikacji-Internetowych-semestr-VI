import { useState } from 'react'
import AddMovieForm from '@/components/AddMovieForm'
import MovieList from '@/components/MovieList'
import FilterBar from '@/components/FilterBar'
import { useMovies } from '@/context/MovieContext'

export default function Home() {
  const { movies, addMovie } = useMovies()
  const [filters, setFilters] = useState({
    search: '',
    type: 'all',
    minRating: 0,
  })

  const filteredMovies = movies.filter(movie => {
    return (
      movie.title.toLowerCase().includes(filters.search.toLowerCase()) &&
      (filters.type === 'all' || movie.type === filters.type) &&
      movie.rating >= filters.minRating
    )
  })

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Moja Wirtualna Biblioteczka</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <AddMovieForm onAddMovie={addMovie} />
        </div>
        
        <div className="lg:col-span-2 space-y-4">
          <FilterBar filters={filters} setFilters={setFilters} />
          <MovieList movies={filteredMovies} />
        </div>
      </div>
    </div>
  )
}
