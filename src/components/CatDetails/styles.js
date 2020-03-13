/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
export const Preview = styled.img`
  width: 35%;
  height: 75vh;
  margin-right: 20px;
  object-fit: cover;
  object-position: center;
  border-radius: 25px;
  padding: 10px 0;
`

export const Box = styled.section`
  display: flex;
  align-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: ${props => props.width ? props.width : `100%`};
  ${props => props.middle && `margin: 0 10px`};
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
  margin-bottom: 50px;
`

export const GalleryThumb = styled.img`
  height: 14.7vw;
  width: 14.7vw;
  object-fit: cover;
  object-position: center;
  border-radius: 5px;
  display: block;
  margin-right: 15px;
`
