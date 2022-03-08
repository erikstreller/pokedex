import { ReactNode } from 'react'
import { Tooltip as TippyTooltip, TooltipProps } from 'react-tippy'

export type TooltipTextProps = {
  children: ReactNode
  content: ReactNode
} & TooltipProps

export default function Tooltip({
  children,
  content,
  ...rest
}: TooltipTextProps) {
  return (
    <TippyTooltip
      trigger='mouseenter'
      interactive={false}
      html={
        <div className='inline-block max-w-xs rounded-md border border-gray-600 bg-slate-900 p-2 text-center text-gray-200 shadow-md'>
          {content}
        </div>
      }
      {...rest}
    >
      <>{children}</>
    </TippyTooltip>
  )
}
