import * as S from './styles'

import { Card, Header, Footer } from '../../../components'
import { GenresArray, ListMovies, Movie } from '../../../types'

import { useFetch } from '../../../hooks/useFetch'

export const Home = (): JSX.Element => {
  const { data: genresArrayResult } =
    useFetch<GenresArray>(`/3/genre/movie/list`)
  const { data: movies } = useFetch<ListMovies>(
    `/3/discover/movie?sort_by=popularity.desc`
  )

  return (
    <>
      <Header text="CinemaDX" />
      <aside>Aside</aside>
      <S.Main>
        <S.Title>Most Popular</S.Title>
        <S.Container>
          {movies?.results.map((movie: Movie, key) => {
            return (
              <Card
                key={key}
                movieObject={movie}
                genresArray={genresArrayResult}
              />
            )
          })}
        </S.Container>
      </S.Main>
      <Footer text="Footer" />
    </>
  )
}
