import clsx from 'clsx'
import Capitalize from './functions/Capitalize'
import gradientType from './functions/gradientType'
import {
  twFromTypeColors,
  twToTypeColors
} from './functions/twGradientTypeColors'

type StatsProps = {
  stats: [{ name: string; value: string }]
  types: [string, string]
}

export default function Stats({ stats, types }: StatsProps) {
  return (
    <div className='absolute right-[15%] text-xl'>
      {stats.map((stat, index) => (
        <div key={index} className='pb-3 last:pb-0 hover:scale-[1.03]'>
          <p className='pb-1'>
            {Capitalize(stat.name)}
            <span className='text-slate-500'> {stat.value}</span>
          </p>
          <div className='h-2 w-[225px]'>
            <div
              className={clsx(
                'h-full rounded-full bg-gradient-to-r ',
                twFromTypeColors(gradientType(types, types[0])),
                twToTypeColors(gradientType(types, types[1]))
              )}
              style={{ width: `${stat.value}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
