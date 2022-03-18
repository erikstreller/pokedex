import clsx from 'clsx'
import capitalize from '../lib/capitalize'
import gradientType from '../lib/gradientType'
import { twFromTypeColors, twToTypeColors } from '../lib/twGradientTypeColors'

type StatsProps = {
  stats: [{ name: string; value: string }]
  types: [string, string]
}

export default function Stats({ stats, types }: StatsProps) {
  return (
    <div className='text-xl'>
      {stats.map((stat, index) => (
        <div key={index} className='pb-3 last:pb-3 hover:scale-[1.03]'>
          <p className='pb-1'>
            {capitalize(stat.name)}
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
