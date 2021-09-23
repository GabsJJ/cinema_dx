import { useReducer } from 'react'
import { MoviesContext } from './context'
import { moviesReducer } from './reducer'
import { initialState } from './state'

const Provider: React.FC = ({ children }) => {
  const [moviesList, dispatch] = useReducer(moviesReducer, initialState)

  return (
    <MoviesContext.Provider value={{ moviesList, dispatch }}>
      {children}
    </MoviesContext.Provider>
  )
}

export default Provider
