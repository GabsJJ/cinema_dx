import React from 'react'
import {
  Container,
  Title,
  Subtitle,
  Details,
  ContainerFigure,
  Genres,
  VoteAverage,
} from './style'
import Figure from '../Figure'
import { Movie, GenresArray } from '../Template/Home'

interface CardProps {
  movieObject: Movie
  genresArray: GenresArray
}

const Card: React.FC<CardProps> = ({ movieObject, genresArray }) => {
  return (
    <Container>
      <VoteAverage>{movieObject.vote_average}</VoteAverage>
      <ContainerFigure>
        <Figure
          src={'https://image.tmdb.org/t/p/w500' + movieObject.poster_path}
          alt="movie poster"
          width={176}
          height={264}
        />
      </ContainerFigure>
      <Details>
        <Title>{movieObject.title}</Title>
        <Genres>
          {movieObject.genre_ids.map((genreFromMovies, key) => {
            const genre = genresArray.genres.find(
              (element) => element.id === genreFromMovies
            )
            return <Subtitle key={key}>{genre.name}</Subtitle>
          })}
        </Genres>
      </Details>
    </Container>
  )
}

export default Card
