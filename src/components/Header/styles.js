import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 20px;

  @media screen and (max-width: 490px) {
    width: 100%;
    padding: 30px 0;
  }

`
export const Logo = styled(Link)`
  margin: 0 auto 0 0;

  @media screen and (max-width: 490px) {
    margin: 0 auto;
  }
`
