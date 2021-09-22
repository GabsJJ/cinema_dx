import * as S from './styles'
import { useState } from 'react'

import ReactPaginate from 'react-paginate'
import { Card } from '../../../components'
import { GenresArray, ListMovies, Movie } from '../../../types'

import { useFetch } from '../../../hooks/useFetch'

export const Home = (): JSX.Element => {
  const [actualPage, setActualPage] = useState<number>(1)
  const { data: genresArrayResult } =
    useFetch<GenresArray>(`/3/genre/movie/list`)
  const { data: movies } = useFetch<ListMovies>(
    `/3/discover/movie?sort_by=popularity.desc&page=${actualPage}`
  )

  const changePage = ({ selected }) => {
    setActualPage(selected + 1)
  }

  return (
    <S.Grid>
      <S.LogoComponent text="CinemaDX" />
      <S.Header />
      <S.Main>
        <S.Title>Most Popular</S.Title>
        <S.ContainerCards>
          {movies?.results.map((movie: Movie, key) => {
            return (
              <Card
                key={key}
                movieObject={movie}
                genresArray={genresArrayResult}
              />
            )
          })}
        </S.ContainerCards>
        <S.PaginateContainer>
          <ReactPaginate
            previousLabel={'<'}
            nextLabel={'>'}
            breakLabel={'...'}
            pageCount={movies?.total_pages}
            onPageChange={changePage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            containerClassName={'pagination'}
            activeClassName={'active'}
            nextClassName={'next'}
            previousClassName={'previous'}
          />
        </S.PaginateContainer>
      </S.Main>
      <S.Aside />
    </S.Grid>
  )
}
