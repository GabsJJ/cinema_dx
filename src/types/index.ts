export interface Movie {
  id: number
  poster_path: string
  title: string
  vote_average: number
  genre_ids: Array<number>
}

interface Genre {
  id: number
  name: string
}

export interface GenresArray {
  genres: Array<Genre>
}

export interface ListMovies {
  page: number
  results: Array<Movie>
}
