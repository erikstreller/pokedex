import clsx from 'clsx'
import { Dispatch, SetStateAction } from 'react'
import BasicLabel, { BasicLabelProps } from './BasicLabel'
import twBgHoverTypeColors from './functions/twBgHoverTypeColors'
import twBgTypeColors from './functions/twBgTypeColors'

export type LabelProps = {
  setActiveType?: Dispatch<SetStateAction<string>>
  filter?: boolean
  activeStyle?: string
  setActiveStyle?: Dispatch<SetStateAction<string>>
} & BasicLabelProps &
  React.ComponentPropsWithoutRef<'div'>

export default function Label({
  type,
  setActiveType,
  filter,
  activeStyle,
  setActiveStyle,
  className = ''
}: LabelProps) {
  if (!filter) {
    return <BasicLabel type={type} border />
  }

  const handleClick = () => {
    setActiveType(type)
    setActiveStyle(type)
  }

  return (
    <BasicLabel
      type={type}
      className={clsx(
        `cursor-pointer hover:bg-opacity-40`,
        twBgHoverTypeColors(type),
        activeStyle === type ? clsx('bg-opacity-40', twBgTypeColors(type)) : '',
        className
      )}
      onClick={handleClick}
      border
    />
  )
}
