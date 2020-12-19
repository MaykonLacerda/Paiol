import React from 'react'

import Aykotechlogo from '../assets/logo/ayko-logo.svg'

import { Container } from '../styles/pages/Home'
import { useRouter } from 'next/dist/client/router'

const Home: React.FC = () => {

    const router = useRouter()
  return (

        <Container>

        <Aykotechlogo />
        <h1>Bem Vindo!</h1>

        <button  onClick={() => router.replace('/platform')}>ENTRAR</button>

        </Container>
    )
  }

  export default Home
