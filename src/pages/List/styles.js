/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
    flex-flow: wrap-reverse;
  }
`
