import Head from 'next/head'
import { Home as Index } from '../src/components/Template'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Cinema DX</title>
        <meta name="description" content="TMZ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Index />
    </>
  )
}
