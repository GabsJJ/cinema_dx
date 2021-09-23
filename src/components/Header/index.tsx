import * as S from './styles'
import { Search } from '../index'

interface HeaderProps {
  setTitle?: (value: string) => void
  className?: string
}

const Header: React.FC<HeaderProps> = ({ setTitle, className }) => {
  return (
    <S.Header className={className}>
      <Search setTitle={setTitle} />
    </S.Header>
  )
}

export default Header
