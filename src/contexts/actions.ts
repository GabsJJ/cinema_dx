import { ListMovies, SearchMovies } from '../types'

export enum ActionType {
  UpdateMovies,
  UpdateSearchMovies,
}

export interface UpdateMovies {
  type: ActionType.UpdateMovies
  payload: { movies: ListMovies }
}

export interface UpdateSearchMovies {
  type: ActionType.UpdateSearchMovies
  payload: { search: SearchMovies }
}

export type Actions = UpdateMovies | UpdateSearchMovies
