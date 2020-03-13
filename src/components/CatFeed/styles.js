/* eslint-disable import/prefer-default-export */
import styled from 'styled-components'
import IMAGES from '../../constants/images'
import COLORS from '../../constants/colors'

export const Anchor = styled.a`
  background: url(${IMAGES.CARROT}) no-repeat center right;
  border-bottom: 1px solid ${COLORS.PRIMARY_BORDER};
  padding: 0;
  cursor: pointer;

  display: block;
  padding: 20px 0;
  font-size: 1.07vw;
  text-decoration: none;
  color: ${COLORS.PRIMARY_TEXT};

  &:hover {
    color: ${COLORS.PRIMARY_BACKGROUND}
  }

  &:last-child {
    border-bottom: none;
  }

  @media screen and (max-width: 490px) {
    font-size: 4vw;
  }
`
