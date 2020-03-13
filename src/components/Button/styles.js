import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import COLORS from '../../constants/colors'

const defaultStyle = css`
  padding: 0 15px;
  border-radius: 12px;
  font-size: 16px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  color: #FFF;
  transition-duration: .1s;
  outline: none;
  margin: ${props => props.margin};
  width: ${props => props.width};
  background-color: ${COLORS.PRIMARY_BACKGROUND};
  border: 1px solid ${COLORS.PRIMARY_BACKGROUND_SUPPORT};
  ${props => props.center && 'margin: 0 auto; display: block;'};
  ${props => props.mini && 'font-size: 14px;'};

  &:hover{
    cursor: pointer;
    transform: translateY(-4px);
    box-shadow: 0 4px 0 ${COLORS.PRIMARY_BACKGROUND_HIGHLIGHT};
  }

  &:active{
    cursor: pointer;
    transform: translateY(0);
    box-shadow: none;
  }

  @media screen and (max-width: 490px) {
    width: 100%;
    padding: 8px;
    border-radius: 5px;
  }
`

export const StyledButton = styled.button` 
  ${defaultStyle}
  padding: 10px 80px;
  margin: 0 0 0 auto;
  display: block; 
`
export const StyledLink = styled(Link)`
  ${defaultStyle};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default StyledButton
