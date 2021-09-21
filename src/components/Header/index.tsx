import * as S from './styles'

interface HeaderProps {
  text: string
  className?: string
}

const Header: React.FC<HeaderProps> = ({ text, className }) => {
  return (
    <S.Header className={className}>
      <S.HeaderContainer href="">
        <S.Figure src="/images/logo.png" alt="logo" width={50} height={30} />
        {text}
      </S.HeaderContainer>
      <input type="text" placeholder="Search" />
    </S.Header>
  )
}

export default Header
