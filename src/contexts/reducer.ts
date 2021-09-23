import { ListMovies } from '../types'
import { Actions, ActionType, UpdateMovies } from './actions'
import { GeneralState } from './state'

export const moviesReducer = (
  state: GeneralState,
  action: Actions
): GeneralState => {
  switch (action.type) {
    case ActionType.UpdateMovies:
      const newState: GeneralState = {
        ...state,
        items: action.payload.movies,
      }
      return { ...newState }

    default:
      return state
  }
}

export const updateMoviesList = (movies: ListMovies): UpdateMovies => ({
  type: ActionType.UpdateMovies,
  payload: { movies: movies },
})
