import AddMovieForm from './components/AddMovieForm';

function App() {
  const [movies, setMovies] = useState([]);

  const handleAddMovie = async (newMovie) => {
    // Tutaj dodaj logikę zapisu do API/localStorage
    setMovies(prev => [...prev, { ...newMovie, id: Date.now() }]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home movies={movies} />} />
        <Route path="/add" element={<AddMovieForm onAddMovie={handleAddMovie} />} />
      </Routes>
    </Router>
  );
}
