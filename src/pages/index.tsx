import React from 'react'
import Head from 'next/head'
import { Heading, Grid, Flex, Link, Button, Text } from '@chakra-ui/core'

import Aykotechlogo from '../assets/ayko-logo.svg'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Aykotechlogo />
      <h1>Bem Vindo!</h1>


    </Container>
  )
}

export default Home
