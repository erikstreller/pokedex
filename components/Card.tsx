import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Capitalize from './functions/Capitalize'

type CardProps = {
  image: string
  name: string
  id: number
}

export default function Card({ image, name, id }: CardProps) {
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
            'relative flex h-48 w-48 items-center justify-center text-left',
            'rounded-2xl border-2 border-zinc-600 bg-slate-900',
            'transition duration-200 hover:scale-[1.02]'
          )}
        >
          <Image
            src={image}
            width={200}
            height={200}
            alt={name}
            className='transition duration-200 hover:scale-[1.05]'
          />
          <div className='absolute bottom-0 w-[188px] rounded-b-2xl px-6 py-2 text-lg font-bold backdrop-blur-md'>
            {Capitalize(name)}
          </div>
        </a>
      </Link>
    </motion.div>
  )
}
