import * as S from './styles'

interface AsideProps {
  text?: string
  className?: string
}

const Aside: React.FC<AsideProps> = ({ text, className }) => {
  return <S.Aside className={className}>{text}</S.Aside>
}

export default Aside
