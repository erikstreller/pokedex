import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import capitalize from '../lib/capitalize'
import gradientType from '../lib/gradientType'
import { twHoverFromType, twHoverToType } from '../lib/twGradientTypeColors'

type CardProps = {
  image: string
  name: string
  id: number
  types: any
}

export default function Card({ image, name, id, types }: CardProps) {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <Link href={`/pokemon/${id.toString()}`}>
        <a
          className={clsx(
            'relative flex h-[194px] w-[194px] items-center justify-center text-left md:h-[144px] md:w-[144px]',
            'rounded-2xl bg-gradient-to-r from-zinc-800 to-zinc-800 p-[2px]',
            'transition duration-200 hover:scale-[1.02] hover:bg-opacity-75',
            twHoverFromType(gradientType(types, types[0])),
            twHoverToType(gradientType(types, types[1]))
          )}
        >
          <div className='h-full rounded-[14px] bg-slate-900 p-1'>
            <Image
              src={image}
              width={200}
              height={200}
              alt={name}
              className='transition duration-200 hover:scale-[1.05]'
            />
          </div>
          <div className='absolute bottom-[2px] flex w-[190px] justify-between rounded-b-[14px] px-6 py-2 text-lg font-semibold backdrop-blur-md md:w-[140px]'>
            <div className='text-zinc-400 md:hidden'>#{id}</div>
            <div>{capitalize(name)}</div>
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
