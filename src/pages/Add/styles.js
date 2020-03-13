/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 490px) {
    flex-wrap: wrap;
    flex-flow: wrap-reverse;
  }
`

export const Poster = styled.div`
  width: 49%;
  height: calc(100vh - 150px);
  position: relative;

  p {
    position: absolute;
    left: 40px;
    top: 0;
    font-size: 5.5vw;
    margin: 20px 0 0;
    font-weight: 800;
    color: ${COLORS.PRIMARY_BACKGROUND};
  }

  img {
    width: 100%;
    height: 100%;
    opacity: .4;
    object-fit: cover;
    object-position: center;
  }

  @media screen and (max-width: 490px) {
    width: 90%;
    margin: 0 auto 50px;
    height: 30vh;
  }
`
