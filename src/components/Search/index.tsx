import * as S from './styles'
import { ListMovies } from '../../types'
import { useContext, useEffect, useState } from 'react'
import { MoviesContext } from '../../contexts/context'

import { useFetch } from '../../hooks/useFetch'
import { updateMoviesList } from '../../contexts/reducer'

interface SearchProps {
  setTitle?: (value: string) => void
  className?: string
}

const Search: React.FC<SearchProps> = ({ setTitle, className }) => {
  const { dispatch } = useContext(MoviesContext)
  const [query, setQuery] = useState<string>()
  const { data: movies } = useFetch<ListMovies>(
    `/3/search/movie?query=${query}`
  )

  const onSearchClick = (moviesProps: ListMovies) => {
    if (query !== '') {
      dispatch(updateMoviesList(moviesProps))
    }
    setTitle('Search result')
  }

  useEffect(() => {
    if (movies && query != undefined) {
      if (query != '') {
        dispatch(updateMoviesList(movies))
        setTitle('Search result')
      }
    }
  }, [query, dispatch, movies, setTitle])

  return (
    <S.Container className={className}>
      <S.Button
        onClick={() => {
          onSearchClick(movies)
        }}
      >
        <S.Search size="20" />
      </S.Button>
      <S.Input
        type="text"
        placeholder="Search movies"
        onChange={(evt) => setQuery(evt.target.value)}
      />
    </S.Container>
  )
}

export default Search
