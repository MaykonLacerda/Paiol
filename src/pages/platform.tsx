import React from 'react'

import { Container } from '../styles/pages/Platform'
import { useRouter } from 'next/dist/client/router'

const Platform: React.FC = () => {

  const router = useRouter()
    return (

      <Container>

        <div className="container">
            <div className="topnav" id="myTopnav">
            <a onClick={() => router.replace('/')} className="active">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onClick={() => router.replace('/')}>
            <i className="fa fa-bars"></i>
                </a>
            </div>

            <h1>Web Paiol</h1>
        </div>

      </Container>
    )
  }

  export default Platform
