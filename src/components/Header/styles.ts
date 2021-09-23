import styled from 'styled-components'
import { Figure as DefaultFigure } from '../Figure/'

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  background-color: #ff2f53;
  color: white;
  font-weight: bold;
  padding: 15px;
`

export const Figure = styled(DefaultFigure)`
  filter: invert(100%);
`
