import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import BasicLabel from './BasicLabel'
import twBgHoverTypeColors from './functions/twBgHoverTypeColors'
import twBgTypeColors from './functions/twBgTypeColors'

export type LabelProps = {
  type: string
  setActiveType?: Dispatch<SetStateAction<string>>
  filter?: boolean
  activeType?: string
}

export default function Label({
  type,
  setActiveType,
  filter,
  activeType
}: LabelProps) {
  if (!filter) {
    return <BasicLabel type={type} />
  }

  return (
    <BasicLabel
      type={type}
      className={clsx(
        `cursor-pointer hover:bg-opacity-40`,
        twBgHoverTypeColors(type),
        activeType === type ? clsx('bg-opacity-40', twBgTypeColors(type)) : ''
      )}
      onClick={(e) => setActiveType(type)}
    />
  )
}
