import styled from 'styled-components'

interface ContainerProps {
  width?: number
  height?: number
}

export const Container = styled.section<ContainerProps>`
  position: relative;

  max-width: ${({ width }) => (width ? width : 176)}px;
  max-height: ${({ height }) => (height ? height : 264)}px;

  margin: 0 5px 150px 20px;
`
export const ContainerFigure = styled.div`
  height: 264px;
  box-shadow: 2px 2px 19px 0px rgb(0 0 0 / 67%);
`

export const Details = styled.div`
  margin-top: 10px;
`

export const Title = styled.p`
  color: white;
  font-size: 15px;
  margin: 0;
`
export const Genres = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 5px;
`

export const Subtitle = styled.p`
  color: #99b8c9;
  font-size: 12px;
  width: fit-content;
  margin-top: 7px;
  margin-bottom: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);

  border: 1.6px solid gray;
  border-radius: 15px;
  padding: 4.5px;

  &:hover {
    background-color: gray;
    color: white;
  }
`

export const VoteAverage = styled.p`
  position: relative;
  top: 25px;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  color: white;
  background-color: #feb138;
  font-size: 14px;
  width: fit-content;
  margin-top: 0;
  margin-bottom: 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);

  border: 1.6px solid #feb138;
  border-radius: 15px;
  padding: 2px 0.8em 2px 0.8em;
`
