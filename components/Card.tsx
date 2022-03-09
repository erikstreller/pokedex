import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Capitalize from './functions/Capitalize'
import gradientType from './functions/gradientType'
import {
  twHoverFromType,
  twHoverToType
} from './functions/twGradientTypeColors'

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
            'relative flex h-[194px] w-[194px] items-center justify-center text-left',
            'rounded-2xl bg-gradient-to-r from-zinc-600 to-zinc-600 p-[2px]',
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
          <div className='absolute bottom-[2px] w-[188px] rounded-b-[14px] px-6 py-2 text-lg font-bold backdrop-blur-md'>
            {Capitalize(name)}
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
