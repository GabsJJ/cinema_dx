import * as S from './styles'

interface FooterProps {
  text: string
}

const Footer: React.FC<FooterProps> = ({ text }) => {
  return (
    <>
      <S.Footer>{text}</S.Footer>
    </>
  )
}

export default Footer
