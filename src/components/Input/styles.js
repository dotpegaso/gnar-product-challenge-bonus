/* eslint-disable no-nested-ternary */
import styled from 'styled-components'
import MaskedInput from 'react-text-mask'
import COLORS from '../../constants/colors'

export const View = styled.div`
  position: relative;
  display: flex;
  align-content: center;
  width: ${props => props.width || 'fit-content'};

  @media screen and (max-width: 490px) {
    width: 100%;
  }
`

export const StyledMaskedInput = styled(MaskedInput)`
  border-radius: 4px;
  padding: 0 15px;
  background: #FFF;
  width: 100%;
  outline: none;
  margin: ${props => props.margin || 0};
  border: 1px solid ${COLORS.SECONDARY_BORDER};
  min-height: ${props => (props.big ? '50px' : '36px')};
  font-size: ${props => (props.big ? '16px' : '14px')};
  ${props => (props.isFocused || props.value) && `border-color: ${COLORS.PRIMARY_BACKGROUND}`}
`

export const Label = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  left: 10px;
  z-index: 0;
  margin: 0;
  padding: 0 4px 0 4px;
  transition-duration: .1s;
  pointer-events: none;
  color: ${COLORS.SECONDARY_TEXT};
  color: ${props => (props.isFocused || props.hasText ? COLORS.PRIMARY_BACKGROUND : COLORS.SECONDARY_TEXT)};
  top: ${props => (props.isFocused || props.hasText ? '2.5px' : '20px')};
  bottom: ${props => (props.isFocused || props.hasText ? 'initial' : '20px')};
  font-size: ${props =>
    props.big ? '16px' : props.isFocused || props.hasText ? '12px' : '12px'};
  background-color: ${props =>
      props.isFocused || props.hasText ? '#FFF' : 'transparent'};

  ${props => props.header && `
    top: ${props.isFocused || props.hasText ? '-5px' : '18px'}
  `}
`
