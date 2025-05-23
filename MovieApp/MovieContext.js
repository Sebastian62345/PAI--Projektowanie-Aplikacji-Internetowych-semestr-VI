import { createContext, useState, useContext } from 'react'

const MovieContext = createContext()

export function MovieProvider({ children }) {
  // ... istniejący stan ...
  
  const [allMovies, setAllMovies] = useState([
    // Przykładowe dane wszystkich użytkowników
    ...movies,
    {
      id: 3,
      title: 'Interstellar',
      type: 'movie',
      rating: 5,
      watchedDate: '2023-07-10',
      genre: 'sci-fi',
      userId: 'user2'
    },
    {
      id: 4,
      title: 'Stranger Things',
      type: 'series',
      rating: 4,
      watchedDate: '2023-08-05',
      genre: 'horror',
      userId: 'user3'
    }
  ])

  const [reports, setReports] = useState([
    {
      id: 1,
      type: 'problem',
      message: 'Nie mogę dodać nowego filmu',
      status: 'open',
      userId: 'user2',
      date: '2023-09-01'
    }
  ])

  // Funkcje admina
  const deleteAnyMovie = (id) => {
    setAllMovies(allMovies.filter(movie => movie.id !== id))
  }

  const updateReportStatus = (id, status) => {
    setReports(reports.map(report => 
      report.id === id ? {...report, status} : report
    ))
  }

  return (
    <MovieContext.Provider value={{ 
      movies, addMovie, deleteMovie, updateMovie,
      allMovies, deleteAnyMovie,
      reports, updateReportStatus
    }}>
      {children}
    </MovieContext.Provider>
  )
}
