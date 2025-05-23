import { useState } from 'react'
import RatingSystem from './RatingSystem'

export default function AddMovieForm({ onAddMovie }) {
  const [formData, setFormData] = useState({
    title: '',
    type: 'movie',
    rating: 3,
    watchedDate: new Date().toISOString().split('T')[0],
    genre: 'action',
  })

  const genres = [
    'action', 'comedy', 'drama', 'horror', 'sci-fi', 
    'thriller', 'romance', 'documentary', 'animation'
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.title.trim()) {
      onAddMovie(formData)
      setFormData({
        title: '',
        type: 'movie',
        rating: 3,
        watchedDate: new Date().toISOString().split('T')[0],
        genre: 'action',
      })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Dodaj nowy film/serial</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tytuł</label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Typ</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="movie"
                checked={formData.type === 'movie'}
                onChange={() => setFormData({...formData, type: 'movie'})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Film</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                value="series"
                checked={formData.type === 'series'}
                onChange={() => setFormData({...formData, type: 'series'})}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500"
              />
              <span className="ml-2">Serial</span>
            </label>
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Gatunek</label>
          <select
            value={formData.genre}
            onChange={(e) => setFormData({...formData, genre: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {genres.map(genre => (
              <option key={genre} value={genre}>
                {genre.charAt(0).toUpperCase() + genre.slice(1)}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Ocena</label>
          <RatingSystem
            rating={formData.rating}
            onRate={(rating) => setFormData({...formData, rating})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Data obejrzenia</label>
          <input
            type="date"
            value={formData.watchedDate}
            onChange={(e) => setFormData({...formData, watchedDate: e.target.value})}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Dodaj do biblioteczki
        </button>
      </div>
    </form>
  )
}
