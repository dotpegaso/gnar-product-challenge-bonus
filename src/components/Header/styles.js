import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  width: calc(100% - 80px);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 40px 20px;

`
export const Logo = styled(Link)`
  margin: 0 auto 0 0;
`
