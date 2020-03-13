import React from 'react'
import Header from '../../components/Header'
import CatFeed from '../../components/CatFeed'
import CatList from '../../components/CatList'
import { Container } from './styles'

function List() {
  return(
    <>
      <Header />
      <Container>
        <CatFeed />
        <CatList />
      </Container>
    </>
  )
}

export default List
