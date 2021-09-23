import { ListMovies, Movie } from '../types'

export interface GeneralState {
  items: ListMovies
}

export const initialState: GeneralState = {
  items: { page: 1, results: Array<Movie>(), total_pages: 500 },
}
