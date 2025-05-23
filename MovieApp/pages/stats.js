import { useMovies } from '@/context/MovieContext'

export default function StatsPage() {
  const { movies } = useMovies()

  // Oblicz statystyki
  const totalMovies = movies.filter(m => m.type === 'movie').length
  const totalSeries = movies.filter(m => m.type === 'series').length
  const averageRating = movies.length > 0 
    ? (movies.reduce((sum, movie) => sum + movie.rating, 0) / movies.length).toFixed(1)
    : 0

  // Grupowanie po gatunkach
  const genreStats = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1
    return acc
  }, {})

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">Statystyki</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Łącznie</h3>
          <p className="text-4xl font-bold text-blue-600">{movies.length}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Filmy</h3>
          <p className="text-4xl font-bold text-green-600">{totalMovies}</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-2">Seriale</h3>
          <p className="text-4xl font-bold text-purple-600">{totalSeries}</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Średnia ocena</h3>
        <div className="flex items-center space-x-4">
          <span className="text-4xl font-bold">{averageRating}</span>
          <span className="text-gray-500">/ 5</span>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Gatunki</h3>
        <div className="space-y-3">
          {Object.entries(genreStats).map(([genre, count]) => (
            <div key={genre}>
              <div className="flex justify-between mb-1">
                <span className="capitalize">{genre}</span>
                <span>{count}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: `${(count / movies.length) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
