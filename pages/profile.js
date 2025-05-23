import { useMovies } from '@/context/MovieContext'
import UserProfile from '@/components/profile/UserProfile'
import UserStats from '@/components/profile/UserStats'
import ActivityHistory from '@/components/profile/ActivityHistory'
import { useState } from 'react'

export default function ProfilePage() {
  const { user, movies, userActivity } = useMovies()
  const [activeTab, setActiveTab] = useState('profile')

  // Oblicz statystyki użytkownika
  const userMovies = movies.filter(m => !m.userId || m.userId === user.id)
  const totalMovies = userMovies.filter(m => m.type === 'movie').length
  const totalSeries = userMovies.filter(m => m.type === 'series').length
  const avgRating = userMovies.length > 0 
    ? (userMovies.reduce((sum, m) => sum + m.rating, 0) / userMovies.length).toFixed(1)
    : 0

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Lewa kolumna - informacje o użytkowniku */}
        <div className="md:w-1/3">
          <UserProfile 
            user={user} 
            stats={{
              total: userMovies.length,
              movies: totalMovies,
              series: totalSeries,
              avgRating
            }}
          />
        </div>
        
        {/* Prawa kolumna - zawartość profilu */}
        <div className="md:w-2/3">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'profile' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('profile')}
              >
                O mnie
              </button>
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'stats' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('stats')}
              >
                Statystyki
              </button>
              <button
                className={`px-6 py-3 font-medium ${activeTab === 'activity' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('activity')}
              >
                Aktywność
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-xl font-semibold mb-4">Edytuj profil</h2>
                  <ProfileEditForm user={user} />
                </div>
              )}
              {activeTab === 'stats' && <UserStats movies={userMovies} />}
              {activeTab === 'activity' && <ActivityHistory activities={userActivity} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
