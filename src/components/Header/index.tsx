import * as S from './styles'

interface HeaderProps {
  className?: string
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <S.Header className={className}>
      <input type="text" placeholder="Search" />
    </S.Header>
  )
}

export default Header
