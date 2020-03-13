/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
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
    color: ${COLORS.PRIMARY_BACKGROUND}
  }

  img {
    width: 100%;
    height: 100%;
    opacity: .4;
    object-fit: cover;
    object-position: center;
  }
`
