import * as S from './styles'

interface LogoComponentProps {
  text: string
  className?: string
}

const LogoComponent: React.FC<LogoComponentProps> = ({ text, className }) => {
  return (
    <S.Header className={className}>
      <S.HeaderContainer href="">
        <S.Figure src="/images/logo.png" alt="logo" width={50} height={30} />
        {text}
      </S.HeaderContainer>
    </S.Header>
  )
}

export default LogoComponent
