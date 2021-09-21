import Image from 'next/image'

export interface FigureProps {
  alt?: string
  src: string
  width?: number
  height?: number
  className?: string
}

const Figure: React.FC<FigureProps> = ({
  alt = 'Teste',
  src,
  width = 454,
  height = 454,
  className,
}) => {
  return (
    <Image
      src={src}
      alt={alt}
      height={height}
      width={width}
      className={className}
    />
  )
}

export default Figure
