import * as S from './styles'
import { ArrowForward } from '@styled-icons/evaicons-solid/ArrowForward'
import { useState } from 'react'

interface AsideProps {
  className?: string
}

const Aside: React.FC<AsideProps> = ({ className }) => {
  const [clicked, setClicked] = useState<boolean>(true)
  const [clicked2, setClicked2] = useState<boolean>(false)
  const [clicked3, setClicked3] = useState<boolean>(false)

  return (
    <S.Aside className={className}>
      <S.PagesNavigator>
        <S.Button
          className={clicked && 'selected'}
          onClick={() => {
            if (!clicked) setClicked(true)
            if (clicked2) setClicked2(false)
            if (clicked3) setClicked3(false)
          }}
        >
          <a>Discover | Most popular</a>
          {clicked && <ArrowForward size={18} color="gray" />}
        </S.Button>
        <S.Button
          onClick={() => {
            if (!clicked2) setClicked2(true)
            if (clicked) setClicked(false)
            if (clicked3) setClicked3(false)
          }}
          className={clicked2 && 'selected'}
        >
          <a>Trending</a>
          {clicked2 && <ArrowForward size={18} color="gray" />}
        </S.Button>
        <S.Button
          onClick={() => {
            if (!clicked3) setClicked3(true)
            if (clicked2) setClicked2(false)
            if (clicked) setClicked(false)
          }}
          className={clicked3 && 'selected'}
        >
          <a>Comming Soon</a>
          {clicked3 && <ArrowForward size={18} color="gray" />}
        </S.Button>
      </S.PagesNavigator>
      <S.Separator />
    </S.Aside>
  )
}

export default Aside
