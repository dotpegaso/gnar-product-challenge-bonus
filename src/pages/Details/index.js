import React from 'react'
import Header from '../../components/Header'
import CatDetails from '../../components/CatDetails'
import { Container } from './styles'

function Details() {
  return(
    <>
      <Header />
      <Container>
        <CatDetails />
      </Container>
    </>
  )
}

export default Details
