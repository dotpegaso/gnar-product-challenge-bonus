import React from 'react'
import Header from '../../components/Header'
import NewCat from '../../components/NewCat'
import IMAGES from '../../constants/images'
import { Container, Poster } from './styles'

function Add() {
  return(
    <>
      <Header />
      <Container>
        <Poster>
          <p>Help Make a Purrrfect Match.</p>
          <img src={IMAGES.CATBASKET} alt="Cat basket" />
        </Poster>
        <NewCat />
      </Container>
    </>
  )
}

export default Add
