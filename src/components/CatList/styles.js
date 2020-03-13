import styled from 'styled-components'
import { Link } from 'react-router-dom'
import COLORS from '../../constants/colors'

export const EmptyList = styled.img`
  height: 35vh;
  margin: 15% auto;
  display: block;
  opacity: .2;
  pointer-events: none;
`

export const Item = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${COLORS.PRIMARY_BORDER};
  padding: 0;
  cursor: pointer;

  font-size: 1.07vw;
  text-decoration: none;
  color: ${COLORS.PRIMARY_TEXT};

  &:hover {
    color: ${COLORS.PRIMARY_BACKGROUND};
  }

  &:last-child {
    border-bottom: none;
  }
`

export const Photo = styled.img`
  border-radius: 5px;
  margin: 10px;
  height: 40px;
  width: 40px;
  object-fit: cover;
  object-position: top;
  flex: 1;
`
export const Name = styled.p`
  margin-left: 25px;
  max-width: 60%;
  flex: 2;
  font-weight: 800;
`
export const Info = styled.span`
  flex: 2;
`
