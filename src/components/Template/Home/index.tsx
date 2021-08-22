import styles from '../../../../styles/Home.module.css'
import Image from 'next/image'
import { useFetch } from '../../../hooks/useFetch'

export interface Movie {
  poster_path: string
  title: string
  genres: Array<{
    id: string
    name: string
  }>
}

export const Home = (): JSX.Element => {
  const { data } = useFetch<Movie>(`/3/movie/557`)

  return (
    <div className={styles.container}>
      <main>
        <Image
          src={'https://image.tmdb.org/t/p/w500' + data?.poster_path}
          alt="movie poster"
          width={424}
          height={637}
        />
        <p style={{ fontWeight: 'bold', fontSize: 20 }}>{data?.title}</p>
        {data?.genres.map((genre) => {
          return <p key={genre.id}>{genre.name}</p>
        })}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}
