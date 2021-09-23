import React from 'react'
import * as S from './styles'

import { Figure } from '../Figure'

import { GenresArray, Movie } from '../../types'

interface CardProps {
  movieObject: Movie
  genresArray: GenresArray
  className?: string
}

const Card: React.FC<CardProps> = ({ movieObject, genresArray, className }) => {
  return (
    <S.Container className={className}>
      <S.VoteAverage>{movieObject.vote_average}</S.VoteAverage>
      <S.ContainerFigure>
        <Figure
          src={
            movieObject.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movieObject.poster_path
              : '/images/noimg.jpg'
          }
          alt="movie poster"
          width={176}
          height={264}
        />
      </S.ContainerFigure>
      <S.Details>
        <S.Title>{movieObject.title}</S.Title>
        <S.Genres>
          {movieObject.genre_ids.map((genreFromMovies, key) => {
            if (key < 3) {
              const genre = genresArray.genres.find(
                (element) => element.id === genreFromMovies
              )
              if (
                (key === 0 && movieObject.genre_ids.length > 1) ||
                (key === 1 && movieObject.genre_ids.length > 2)
              )
                return <S.Subtitle key={key}>{genre.name} | </S.Subtitle>
              return <S.Subtitle key={key}>{genre.name}</S.Subtitle>
            }
          })}
        </S.Genres>
      </S.Details>
    </S.Container>
  )
}

export default Card
