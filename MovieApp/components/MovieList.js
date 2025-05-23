import MovieCard from './MovieCard'
import { useMovies } from '@/context/MovieContext'

export default function MovieList({ movies }) {
  const { deleteMovie, updateMovie } = useMovies()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {movies.length > 0 ? (
        movies.map(movie => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onDelete={deleteMovie}
            onUpdate={updateMovie}
          />
        ))
      ) : (
        <div className="col-span-full text-center py-8 text-gray-500">
          Brak filmów w biblioteczce. Dodaj pierwszy film!
        </div>
      )}
    </div>
  )
}
