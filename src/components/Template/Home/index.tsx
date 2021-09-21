import Card from '../../Card'
import * as S from './styles'
import { useFetch } from '../../../hooks/useFetch'

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

interface ListMovies {
  page: number
  results: Array<Movie>
}

export const Home = (): JSX.Element => {
  const { data: genresArrayResult } =
    useFetch<GenresArray>(`/3/genre/movie/list`)
  const { data: movies } = useFetch<ListMovies>(
    `/3/discover/movie?sort_by=popularity.desc`
  )

  return (
    <>
      <S.Title>Most Popular</S.Title>
      <S.Main>
        {movies?.results.map((movie: Movie, key) => {
          return (
            <Card
              key={key}
              movieObject={movie}
              genresArray={genresArrayResult}
            />
          )
        })}
      </S.Main>
    </>
  )
}
