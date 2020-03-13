import React from 'react'
import IMAGES from '../../constants/images'
import { Container, Logo } from './styles'

function Header() {
  return (
    <Container>
      <Logo to="/">
        <img src={IMAGES.LOGO} alt="Logo" />
      </Logo>
    </Container>
  )
}

export default Header
