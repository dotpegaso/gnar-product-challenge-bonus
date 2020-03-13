import React from 'react'
import { StyledButton, StyledLink } from './styles'

export function Button(props) {
  return (
    <StyledButton
      type={props.type}
      onClick={props.onClick}
      margin={props.margin}
      width={props.width}
      style={props.style}
      mini={props.mini}
    >
      {props.title}
    </StyledButton>
  )
}

export function Link(props) {
  return (
    <StyledLink
      to={props.to}
      margin={props.margin}
      width={props.width}
      style={props.style}
      mini={props.mini}
    >
      {props.title}
    </StyledLink>
  )
}

export default Button
