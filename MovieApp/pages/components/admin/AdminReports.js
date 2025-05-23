import { useMovies } from '@/context/MovieContext'

export default function AdminReports({ reports }) {
  const { updateReportStatus } = useMovies()

  return (
    <div>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Zgłoszenia użytkowników</h2>
        <div className="flex space-x-2">
          <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
            Rozwiązane: {reports.filter(r => r.status === 'closed').length}
          </span>
          <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full">
            Otwarte: {reports.filter(r => r.status === 'open').length}
          </span>
        </div>
      </div>
      
      <div className="space-y-4">
        {reports.length > 0 ? (
          reports.map(report => (
            <div key={report.id} className="bg-gray-50 p-4 rounded-lg border">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{report.type === 'problem' ? 'Problem' : 'Inne'}</h3>
                  <p className="text-gray-600 mt-1">{report.message}</p>
                  <div className="mt-2 text-sm text-gray-500">
                    Zgłoszono: {new Date(report.date).toLocaleDateString()} przez użytkownika: {report.userId}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {report.status === 'open' ? (
                    <button
                      onClick={() => updateReportStatus(report.id, 'closed')}
                      className="bg-green-500 text-white px-3 py-1 rounded text-sm"
                    >
                      Oznacz jako rozwiązane
                    </button>
                  ) : (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">
                      Rozwiązane
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            Brak zgłoszeń
          </div>
        )}
      </div>
    </div>
  )
}
