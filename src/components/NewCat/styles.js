import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 40vw;
  justify-content: space-between;

  input {
    margin: 10px 0;
  }

  button {
    margin-top: 15px;
  }
`

export const Subtitle = styled.h2`
  width: 100%;
  font-weight: 800;
  font-size: 20px;

  &:first-child {
    margin-top: 0
  }
`
