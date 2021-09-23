import styled from 'styled-components'

export const Aside = styled.aside`
  background-color: #1e2325;

  @media (max-width: 800px) {
    display: none;
  }

  .selected {
    color: #ff2f53;
    background-color: #262f33;
    font-size: 13px;
    font-weight: bold;
    padding: 10px 10px 10px 25px;
  }
`

export const PagesNavigator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  margin-bottom: 30px;
`

export const Button = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;

  padding: 10px 10px 10px 25px;
  color: white;
  font-size: 13px;
`

export const Separator = styled.hr`
  width: 85%;
  border: 0;
  color: gray;
  background-color: gray;
  height: 1px;
  opacity: 0.3;
`
