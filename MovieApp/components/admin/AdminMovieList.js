import { useMovies } from '@/context/MovieContext'

export default function AdminMovieList({ movies }) {
  const { deleteAnyMovie } = useMovies()

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Wszystkie filmy w systemie</h2>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
          {movies.length} pozycji
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-100">
            <tr>
              <th className="py-3 px-4 text-left">Tytuł</th>
              <th className="py-3 px-4 text-left">Typ</th>
              <th className="py-3 px-4 text-left">Ocena</th>
              <th className="py-3 px-4 text-left">Użytkownik</th>
              <th className="py-3 px-4 text-left">Akcje</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{movie.title}</td>
                <td className="py-3 px-4 capitalize">{movie.type}</td>
                <td className="py-3 px-4">{movie.rating}/5</td>
                <td className="py-3 px-4">{movie.userId || 'current'}</td>
                <td className="py-3 px-4">
                  <button
                    onClick={() => deleteAnyMovie(movie.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Usuń
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
