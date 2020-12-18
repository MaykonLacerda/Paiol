import React from 'react'
import Head from 'next/head'

import AykotechLogo from '../assets/logo.png'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Homepage</title>
      </Head>

      <main>
        <h1>Hello World</h1>
      </main>
    </div>
  )
}

export default Home
