import styles from '../../../../styles/Home.module.css'
import Image from 'next/image'
import { getMovieByID } from '../../../services/MovieService'
import { useEffect, useState } from 'react'

type Movie = {
  poster_path: string
  title: string
  genres: Array<{
    id: string
    name: string
  }>
}

export const Home = (): JSX.Element => {
  const [movie, setMovie] = useState<Movie>()

  const loadData = async () => {
    setMovie(await getMovieByID(490))
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div className={styles.container}>
      <main>
        <Image
          src={'https://image.tmdb.org/t/p/w500' + movie?.poster_path}
          alt="movie poster"
          width={424}
          height={637}
        />
        <p style={{ fontWeight: 'bold', fontSize: 20 }}>{movie?.title}</p>
        {movie?.genres.map((genre) => {
          return <p key={genre.id}>{genre.name}</p>
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
