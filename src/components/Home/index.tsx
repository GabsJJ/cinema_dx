import * as S from './styles'
import { useState, useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/context'

import ReactPaginate from 'react-paginate'
import { Card } from '..'
import { GenresArray, ListMovies, Movie } from '../../types'

import { useFetch } from '../../hooks/useFetch'
import { updateMoviesList } from '../../contexts/reducer'

const Home: React.FC = () => {
  const [actualPage, setActualPage] = useState<number>(1)
  const [title, setTitle] = useState<string>('Discover | Most popular')

  const { moviesList, dispatch } = useContext(MoviesContext)

  const { data: genresArrayResult } =
    useFetch<GenresArray>(`/3/genre/movie/list`)

  const { data: moviesResult } = useFetch<ListMovies>(
    `/3/discover/movie?sort_by=popularity.desc&page=${actualPage}`
  )

  const changePage = ({ selected }) => {
    setActualPage(selected + 1)
  }

  useEffect(() => {
    if (moviesResult) {
      dispatch(updateMoviesList({ ...moviesResult }))
    }
  }, [moviesResult, dispatch])

  return (
    <S.Grid>
      <S.LogoComponent text="CinemaDX" />
      <S.Header setTitle={setTitle} />
      <S.Main>
        <S.Title>{title}</S.Title>
        <S.ContainerCards>
          {moviesList.items.results.length !== 0 &&
            moviesList.items.results.map((movie: Movie, key) => {
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
            pageCount={moviesList.items.total_pages}
            onPageChange={changePage}
            marginPagesDisplayed={2}
            pageRangeDisplayed={1}
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

export default Home
