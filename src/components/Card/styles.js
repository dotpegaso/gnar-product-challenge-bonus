import styled from 'styled-components'
import COLORS from '../../constants/colors'

export const Container = styled.section`
  border-radius: 6px;
  box-shadow: 0px 5px 25px -5px #CCC;
  position: relative;
  margin: 10px 30px 30px;
  background: #FFF;
  width: ${props => props.width ? props.width : 'fit-content'};
  height: ${props => props.height ? props.height : 'fit-content'};
  ${props => props.flex && `display: flex`};
  ${props => props.minWidth && `min-width: ${props.minWidth}`}
  ${props => props.maxWidth && `max-width: ${props.maxWidth}`}
  ${props => props.minHeight && `min-height: ${props.minHeight}`}
  ${props => props.maxHeight && `max-height: ${props.maxHeight}`}
`

export const Title = styled.div`
  font-size: 1.7vw;
  font-weight: 600;
  padding: 20px 20px 10px;
  text-transform: capitalize;
  color: ${COLORS.PRIMARY_BACKGROUND};
  display: flex;
  justify-content: space-between;
`

export const Content = styled.div`
  padding: 10px 20px 20px;
  height: calc(100vh - 260px);
  overflow-y: auto;
  ${props => props.flexwrap && `
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
  `}

  &::-webkit-scrollbar {
    width: 3px;
  }
  
  &::-webkit-scrollbar-thumb {
    background: ${COLORS.PRIMARY_BACKGROUND};
  }
`

export const Hr = styled.hr`
  border: .5px solid ${COLORS.PRIMARY_BORDER};
`

export const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 50%;
`
