import styled from 'styled-components'
import { Search as DefaultSearch } from '@styled-icons/boxicons-regular/Search'

export const Container = styled.div`
  height: fit-content;
  display: flex;
  align-items: baseline;
`

export const Input = styled.input`
  height: 30px;
  border: 0;
  background: rgba(255, 255, 255, 0);
  color: white;

  ::placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }

  :focus {
    border: 0;
  }
`

export const Button = styled.button`
  border: 0;
  background-color: rgba(255, 255, 255, 0);
  cursor: pointer;
`

export const Search = styled(DefaultSearch)`
  color: white;
`
