import Tippy, { TippyProps } from '@tippyjs/react'

export type TooltipTextProps = {
  children: JSX.Element
  content: JSX.Element
} & TippyProps

export default function Tooltip({
  children,
  content,
  ...rest
}: TooltipTextProps) {
  return (
    <Tippy
      content={
        <div className='inline-block max-w-xs rounded-md border border-gray-600 bg-slate-900 p-2 text-center text-gray-200 shadow-md'>
          {content}
        </div>
      }
      {...rest}
    >
      <button>{children}</button>
    </Tippy>
  )
}
