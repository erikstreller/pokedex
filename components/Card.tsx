import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Capitalize from './functions/Capitalize'
import twBgTypeColors from './functions/twBgTypeColors'

type CardProps = {
  image: string
  name: string
  id: number
  type: string
}

export default function Card({ image, name, id, type }: CardProps) {
  const color = 'hover:' + twBgTypeColors(type)

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
            'rounded-2xl bg-zinc-600',
            'transition duration-200 hover:scale-[1.02]',
            'p-[3px] hover:bg-opacity-75',
            color
          )}
        >
          <div className='h-full rounded-[13px] bg-slate-900 p-1'>
            <Image
              src={image}
              width={200}
              height={200}
              alt={name}
              className='transition duration-200 hover:scale-[1.05]'
            />
          </div>
          <div className='absolute bottom-[3px] w-[188px] rounded-b-[13px] px-6 py-2 text-lg font-bold backdrop-blur-md'>
            {Capitalize(name)}
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
