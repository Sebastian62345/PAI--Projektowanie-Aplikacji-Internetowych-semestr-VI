export default function UserStats({ movies }) {
  // Statystyki gatunków
  const genreStats = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1
    return acc
  }, {})

  // Najwyżej oceniane
  const topRated = [...movies]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)

  // Ostatnio dodane
  const recentlyAdded = [...movies]
    .sort((a, b) => new Date(b.watchedDate) - new Date(a.watchedDate))
    .slice(0, 3)

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-medium mb-3">Ulubione gatunki</h3>
        <div className="bg-gray-50 p-4 rounded-lg">
          {Object.entries(genreStats).length > 0 ? (
            <div className="space-y-3">
              {Object.entries(genreStats)
                .sort((a, b) => b[1] - a[1])
                .map(([genre, count]) => (
                  <div key={genre}>
                    <div className="flex justify-between mb-1">
                      <span className="capitalize">{genre}</span>
                      <span>{count}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ 
                          width: `${(count / movies.length) * 100}%`,
                          maxWidth: '100%'
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="text-gray-500">Brak danych</p>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-medium mb-3">Najwyżej oceniane</h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            {topRated.map(movie => (
              <div key={movie.id} className="flex justify-between items-center py-2 border-b">
                <span>{movie.title}</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                  {movie.rating}/5
                </span>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium mb-3">Ostatnio dodane</h3>
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            {recentlyAdded.map(movie => (
              <div key={movie.id} className="flex justify-between items-center py-2 border-b">
                <span>{movie.title}</span>
                <span className="text-gray-500 text-sm">
                  {new Date(movie.watchedDate).toLocaleDateString()}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
