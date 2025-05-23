import { createContext, useState, useContext } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: 'Incepcja',
      type: 'movie',
      rating: 5,
      watchedDate: '2023-05-15',
      genre: 'Sci-Fi',
    },
    {
      id: 2,
      title: 'Breaking Bad',
      type: 'series',
      rating: 5,
      watchedDate: '2023-06-20',
      genre: 'Drama',
    },
  ])

  const addMovie = (newMovie) => {
    setMovies([...movies, { ...newMovie, id: Date.now() }])
  }

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id))
  }

  const updateMovie = (updatedMovie) => {
    setMovies(movies.map(movie => 
      movie.id === updatedMovie.id ? updatedMovie : movie
    ))
  }

  return (
    <MovieContext.Provider value={{ movies, addMovie, deleteMovie, updateMovie }}>
      {children}
    </MovieContext.Provider>
  )
}

export function useMovies() {
  return useContext(MovieContext)
}
