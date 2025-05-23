import { useState } from 'react'
import RatingSystem from './RatingSystem'

export default function MovieCard({ movie, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editData, setEditData] = useState({ ...movie })

  const handleUpdate = () => {
    onUpdate(editData)
    setIsEditing(false)
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <div className="p-4">
        {isEditing ? (
          <div className="space-y-3">
            <input
              type="text"
              value={editData.title}
              onChange={(e) => setEditData({...editData, title: e.target.value})}
              className="w-full px-3 py-2 border rounded"
            />
            <select
              value={editData.type}
              onChange={(e) => setEditData({...editData, type: e.target.value})}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="movie">Film</option>
              <option value="series">Serial</option>
            </select>
            <div className="flex justify-between">
              <button 
                onClick={handleUpdate}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Zapisz
              </button>
              <button 
                onClick={() => setIsEditing(false)}
                className="bg-gray-500 text-white px-3 py-1 rounded"
              >
                Anuluj
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-semibold">{movie.title}</h3>
              <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                {movie.type === 'movie' ? 'Film' : 'Serial'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              <RatingSystem 
                rating={movie.rating} 
                onRate={(newRating) => onUpdate({...movie, rating: newRating})}
              />
              <span className="text-gray-600">{movie.rating}/5</span>
            </div>
            
            <p className="text-gray-500 text-sm">
              Obejrzane: {new Date(movie.watchedDate).toLocaleDateString()}
            </p>
            
            <div className="flex space-x-2 mt-3">
              <button 
                onClick={() => setIsEditing(true)}
                className="text-blue-500 hover:text-blue-700 text-sm"
              >
                Edytuj
              </button>
              <button 
                onClick={() => onDelete(movie.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Usuń
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
