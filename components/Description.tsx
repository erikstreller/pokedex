import { ReactNode, useContext } from 'react'
import GlitchContext from '../context/GlitchContext'
import Accent from './Accent'

type DescriptionProps = {
  text: string
  id: number
}

const DescriptionStyle = ({ children }: { children: ReactNode }) => {
  return (
    <div className='mt-4 mb-10 max-w-[534px] text-2xl' data-fade='3'>
      {children}
    </div>
  )
}

export default function Description({ text, id }: DescriptionProps) {
  const { readTooltip, setClickTeleport } = useContext(GlitchContext)

  const handleTeleport = () => {
    setClickTeleport(true)
  }

  if (readTooltip && id === 63) {
    return (
      <DescriptionStyle>
        Using its ability to read minds, it will identify impending danger and{' '}
        <span
          className='cursor-pointer decoration-electric-fire-blend hover:underline hover:underline-offset-2'
          onClick={handleTeleport}
        >
          <Accent gradient='from-electric to-fire font-bold'>TELEPORT</Accent>
        </span>{' '}
        to safety.
      </DescriptionStyle>
    )
  }

  return <DescriptionStyle>{text}</DescriptionStyle>
}
