import { createContext } from 'react'
import { GeneralState, initialState } from './state'
import { Actions } from './actions'

interface ContextProps {
  moviesList: GeneralState
  dispatch: React.Dispatch<Actions>
}

export const MoviesContext = createContext<ContextProps>({
  moviesList: initialState,
  dispatch: () => undefined,
})
