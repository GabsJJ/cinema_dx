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
      <style>
        @import
        url(&apos;https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400&display=swap&apos;);
      </style>
      <Index />
    </>
  )
}
