export default function AdminStats({ movies, reports }) {
  // Statystyki filmów
  const moviesCount = movies.length
  const avgRating = (movies.reduce((sum, m) => sum + m.rating, 0) / moviesCount).toFixed(1)
  
  // Statystyki zgłoszeń
  const openReports = reports.filter(r => r.status === 'open').length
  const closedReports = reports.filter(r => r.status === 'closed').length

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Statystyki systemowe</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Filmy i seriale</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Łączna liczba:</p>
              <p className="text-2xl font-bold">{moviesCount}</p>
            </div>
            <div>
              <p className="text-gray-600">Średnia ocena:</p>
              <p className="text-2xl font-bold">{avgRating}/5</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-medium mb-4">Zgłoszenia</h3>
          <div className="space-y-4">
            <div>
              <p className="text-gray-600">Otwarte:</p>
              <p className="text-2xl font-bold text-red-600">{openReports}</p>
            </div>
            <div>
              <p className="text-gray-600">Rozwiązane:</p>
              <p className="text-2xl font-bold text-green-600">{closedReports}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-medium mb-4">Ostatnia aktywność</h3>
        <div className="space-y-3">
          <div className="flex justify-between border-b pb-2">
            <span>Nowy film dodany</span>
            <span className="text-gray-500">2 godziny temu</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Zgłoszenie rozwiązane</span>
            <span className="text-gray-500">1 dzień temu</span>
          </div>
          <div className="flex justify-between border-b pb-2">
            <span>Nowe zgłoszenie</span>
            <span className="text-gray-500">3 dni temu</span>
          </div>
        </div>
      </div>
    </div>
  )
}
