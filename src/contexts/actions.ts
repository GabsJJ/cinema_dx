import { ListMovies } from '../types'

export enum ActionType {
  UpdateMovies,
}

export interface UpdateMovies {
  type: ActionType.UpdateMovies
  payload: { movies: ListMovies }
}

export type Actions = UpdateMovies
