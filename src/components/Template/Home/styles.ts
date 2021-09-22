import styled from 'styled-components'
import {
  Header as DefaultHeader,
  Aside as DefaultAside,
  LogoComponent as DefaultLogoComponent,
} from '../../../components'

export const ContainerCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-right: 20px;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr;
  grid-template-rows: 0.5fr 20fr 1fr;
  grid-template-areas:
    'logo header'
    'aside main'
    'aside main';
`

export const LogoComponent = styled(DefaultLogoComponent)`
  grid-area: logo;
`

export const Header = styled(DefaultHeader)`
  grid-area: header;
`

export const Aside = styled(DefaultAside)`
  grid-area: aside;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 35px;

  grid-area: main;
`

export const Title = styled.h2`
  color: #f5f5f5;
  margin-left: 20px;
  font-weight: normal;
`

export const PaginateContainer = styled.div`
  color: white;
  .pagination {
    display: flex;
    justify-content: center;
    list-style: none;
  }

  .pagination a {
    border-radius: 20px;
    padding: 4px 10px 4px 10px;
    margin: 8px;
    cursor: pointer;
    background-color: #343f44;
  }

  .active a {
    background-color: #ff2f53;
  }

  .next a {
    background-color: #ff2f53;
  }

  .previous a {
    background-color: #ff2f53;
  }
`
