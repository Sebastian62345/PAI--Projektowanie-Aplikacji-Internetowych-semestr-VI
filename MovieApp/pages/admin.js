import { useMovies } from '@/context/MovieContext'
import AdminMovieList from '@/components/admin/AdminMovieList'
import AdminReports from '@/components/admin/AdminReports'
import AdminStats from '@/components/admin/AdminStats'
import { useState } from 'react'

export default function AdminPanel() {
  const { allMovies, reports } = useMovies()
  const [activeTab, setActiveTab] = useState('movies')

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Panel Administratora</h1>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
        <div className="flex border-b">
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'movies' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('movies')}
          >
            Wszystkie Filmy
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'reports' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('reports')}
          >
            Zgłoszenia ({reports.filter(r => r.status === 'open').length})
          </button>
          <button
            className={`px-6 py-3 font-medium ${activeTab === 'stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
            onClick={() => setActiveTab('stats')}
          >
            Statystyki
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'movies' && <AdminMovieList movies={allMovies} />}
          {activeTab === 'reports' && <AdminReports reports={reports} />}
          {activeTab === 'stats' && <AdminStats movies={allMovies} reports={reports} />}
        </div>
      </div>
    </div>
  )
}
