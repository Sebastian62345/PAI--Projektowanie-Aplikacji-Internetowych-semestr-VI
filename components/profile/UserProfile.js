import Image from 'next/image'

export default function UserProfile({ user, stats }) {
  const joinDate = new Date(user.joinDate).toLocaleDateString('pl-PL', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center text-center">
        <div className="relative w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-100">
          <Image 
            src={user.avatar} 
            alt={`${user.name} avatar`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p className="text-gray-600 mb-2">{user.email}</p>
        <p className="text-sm text-gray-500">Dołączył: {joinDate}</p>
      </div>
      
      <div className="mt-6 pt-6 border-t">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div className="bg-blue-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Filmy</p>
            <p className="text-xl font-bold">{stats.movies}</p>
          </div>
          <div className="bg-purple-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Seriale</p>
            <p className="text-xl font-bold">{stats.series}</p>
          </div>
          <div className="bg-green-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Średnia ocena</p>
            <p className="text-xl font-bold">{stats.avgRating}/5</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded-lg">
            <p className="text-sm text-gray-600">Łącznie</p>
            <p className="text-xl font-bold">{stats.total}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
