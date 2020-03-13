/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
export const Preview = styled.img`
  width: 36%;
  height: 75vh;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;

  @media screen and (max-width: 490px) {
    width: 90%;
    margin: 0 auto 20px;
    height: 30vh;
  }
`

export const Box = styled.section`
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: ${props => props.width ? props.width : `100%`};
  ${props => props.middle && `margin: 0 10px`};

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

export const Subtitle = styled.p`
  margin: 10px 0;
  ${props => props.width && `width: ${props.width}`};
  ${props => props.big && `
    font-size: 18px; 
    font-weight: 800; 
    width: 100%;
    margin: 10px 0;
    color: ${COLORS.PRIMARY_BACKGROUND};
  `}

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

export const Fillbar = styled.div`
  height: 10px;
  width: 90%;
  border-radius: 20px;
  background: ${props => props.transparent ? 'transparent' : COLORS.FILLBAR};
`

export const Gauge = styled.div`
  height: 100%;
  border-radius: 20px;
  animation: fill 1s ease-in-out forwards;
  width: ${props => props.fill}%;
  background: ${props => props.fillColor ? props.fillColor : COLORS.GAUGE};
`

export const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: calc(100% - 60px);
  margin: 30px 0 50px;
`

export const GalleryThumb = styled.img`
  height: 14.7vw;
  width: 14.7vw;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  display: block;
  margin-right: 1.1vw;

  @media screen and (max-width: 490px) {
    width: 100%;
    height: 20vh;
    margin: 20px 0;
  }
`

export const GalleryTitle = styled.h1`
  font-size: 30px;
  width: 100%;
  margin-bottom: 25px;
  color: ${COLORS.PRIMARY_BACKGROUND}
`
