import type { AppProps } from 'next/app'
import { global as GlobalStyle } from '../styles'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
