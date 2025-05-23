import { useState } from 'react'
import { useMovies } from '@/context/MovieContext'

export default function ProfileEditForm({ user }) {
  const { updateProfile } = useMovies()
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    preferences: {...user.preferences}
  })

  const genres = [
    'action', 'comedy', 'drama', 'horror', 'sci-fi', 
    'thriller', 'romance', 'documentary', 'animation'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    updateProfile(formData)
  }

  const toggleGenre = (genre) => {
    const newGenres = formData.preferences.favoriteGenres.includes(genre)
      ? formData.preferences.favoriteGenres.filter(g => g !== genre)
      : [...formData.preferences.favoriteGenres, genre]
    
    setFormData({
      ...formData,
      preferences: {
        ...formData.preferences,
        favoriteGenres: newGenres
      }
    })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Imię i nazwisko</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Ulubione gatunki</label>
        <div className="flex flex-wrap gap-2">
          {genres.map(genre => (
            <button
              key={genre}
              type="button"
              onClick={() => toggleGenre(genre)}
              className={`px-3 py-1 rounded-full text-sm ${
                formData.preferences.favoriteGenres.includes(genre)
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-800'
              }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      
      <div className="flex items-center">
        <input
          type="checkbox"
          id="notifications"
          checked={formData.preferences.notifications}
          onChange={(e) => setFormData({
            ...formData,
            preferences: {
              ...formData.preferences,
              notifications: e.target.checked
            }
          })}
          className="h-4 w-4 text-blue-600 focus:ring-blue-500"
        />
        <label htmlFor="notifications" className="ml-2 text-sm text-gray-700">
          Powiadomienia email
        </label>
      </div>
      
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Zapisz zmiany
      </button>
    </form>
  )
}
