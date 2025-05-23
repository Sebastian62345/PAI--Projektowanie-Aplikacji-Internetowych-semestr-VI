// ... importy ...

export default function ResponsiveNavbar() {
  const [isOpen, setIsOpen] = useState(false)
  const isAdmin = true // W rzeczywistej aplikacji sprawdzaj z autentykacji

  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* ... istniejący kod ... */}
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="hover:text-blue-200 transition">
              Moje filmy
            </Link>
            <Link href="/stats" className="hover:text-blue-200 transition">
              Statystyki
            </Link>
            {isAdmin && (
              <Link href="/admin" className="hover:text-blue-200 transition">
                Admin
              </Link>
            )}
          </div>
          
          {/* ... reszta kodu ... */}
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {/* ... istniejące linki ... */}
            {isAdmin && (
              <Link 
                href="/admin" 
                className="block px-3 py-2 rounded hover:bg-blue-500"
                onClick={() => setIsOpen(false)}
              >
                Admin
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}
