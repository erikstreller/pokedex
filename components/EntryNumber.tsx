export default function EntryNumber({ id }: { id: number }) {
  const threeDigitsID = ('00' + id).slice(-3)

  return (
    <div className='text-white-700 absolute left-10 bottom-0 z-10 text-[96px] font-bold text-light opacity-[0.04] md:left-[5%] md:text-[72px]'>
      {threeDigitsID}
    </div>
  )
}
