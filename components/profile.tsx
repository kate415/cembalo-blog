import Image from 'next/image'

export default function Profile() {
  return (
    <div className='text-primary-dark border-primary-pale rounded-sm border-2 p-6 h-fit basis-1/4 shadow-md'>
      <div className='flex gap-4 mb-4'>
        <Image
          src='https://images.microcms-assets.io/assets/ee370418a49d49398954bf7354023a10/9a346c64d64a459d82451ae1d4310b79/cemicon.jpg'
          alt='プロフィール画像'
          className='border-primary-light border-2 rounded-full w-20 h-20'
        />
        <div className='self-center'>
          <p>著者</p>
          <p className='text-xl font-bold mb-2'>kate nish</p>
        </div>
      </div>
      <p>古楽・チェンバロを学んでいます。</p>
    </div>
  )
}
