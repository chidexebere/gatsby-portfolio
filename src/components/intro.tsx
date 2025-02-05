import Image from 'next/image'
import authorImage from '../../public/images//authors/profile-pic.jpg'

export default function Intro() {
  return (
    <section className='flex flex-col-reverse items-start gap-x-10 gap-y-4 md:flex-row md:items-center'>
      <div className='mt-2 flex-1 md:mt-0'>
        <h1 className='title text-green-600 no-underline'>
          Hey, I&#39;m Chidi.
        </h1>
        <p className='mt-3 text-xl font-light text-muted-foreground'>
          I&#39;m a software engineer based in Lagos, Nigeria. I&#39;m
          passionate about creating products with seamless experiences and
          exceptional design.
        </p>
      </div>
      <div className='relative'>
        <Image
          className='flex-1 rounded-lg grayscale'
          src={authorImage}
          alt='Chidiebere Onyegbuchulem'
          width={175}
          height={175}
          priority
        />
      </div>
    </section>
  )
}
