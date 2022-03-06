import { Dispatch, SetStateAction } from 'react'
import BasicLabel from './BasicLabel'

export type LabelProps = {
  type: string
  setActiveType?: Dispatch<SetStateAction<string>>
  filter?: boolean
}

export default function Label({ type, setActiveType, filter }: LabelProps) {
  if (!filter) {
    return <BasicLabel type={type} />
  }

  return (
    <BasicLabel
      type={type}
      className='cursor-pointer'
      onClick={(e) => setActiveType(type)}
    />
  )
}
