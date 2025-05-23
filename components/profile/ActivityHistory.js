export default function ActivityHistory({ activities }) {
  const getActivityIcon = (type) => {
    switch(type) {
      case 'add': return '➕'
      case 'rate': return '⭐'
      case 'watch': return '🎬'
      default: return '🔹'
    }
  }

  const getActivityText = (type) => {
    switch(type) {
      case 'add': return 'Dodałeś film'
      case 'rate': return 'Oceniłeś film'
      case 'watch': return 'Obejrzałeś film'
      default: return 'Aktywność'
    }
  }

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Historia aktywności</h3>
      
      {activities.length > 0 ? (
        <div className="space-y-4">
          {activities.map((activity, index) => (
            <div key={index} className="flex items-start">
              <div className="mr-3 text-xl">{getActivityIcon(activity.type)}</div>
              <div className="flex-1">
                <p>{getActivityText(activity.type)}</p>
                <p className="text-sm text-gray-500">
                  {new Date(activity.date).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Brak ostatniej aktywności</p>
      )}
    </div>
  )
}
