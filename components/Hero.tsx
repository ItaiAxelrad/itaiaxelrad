import testimonials from '@data/testimonials.json';
import styles from '@styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Testimonial from './Testimonial';

export default function Hero() {
  return (
    <div className='w-screen scroll-smooth'>
      <section className='relative isolate px-6 pt-14 lg:px-8 h-screen'>
        <div
          className='absolute inset-x-0 -top-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-32'
          aria-hidden='true'
        >
          <div
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-200 to-orange-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-2xl py-12 sm:py-24 lg:py-32'>
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative rounded-full px-3 py-1 text-sm leading-6 bg-slate-50 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              See my{' '}
              <Link href='/projects' className='font-semibold text-blue-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                latest project{' '}
                <span aria-hidden='true'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    className='inline w-4 h-4'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 inline sm:text-6xl'>
              Hi there
            </h1>
            <span className={`${styles.wave} text-5xl ml-4`}>👋</span>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              I&apos;m a full-stack dev, specialized in dashboard UIs.
            </p>
            <p className='mt-6 text-md leading-8 text-gray-500'>
              I have been building things my whole life. You can find me working
              on my latest projects in Boulder or climbing in the surrounding
              mountains
            </p>
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <Link
                href='/contact'
                className='rounded-md bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
              >
                Hire Me
              </Link>
              <Link
                href='/#more'
                className='text-sm font-semibold leading-6 text-slate-800'
              >
                Learn more{' '}
                <span aria-hidden='true'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke-width='2'
                    stroke='currentColor'
                    className='inline w-4 h-4'
                  >
                    <path
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      d='M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3'
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
          <div
            className='absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]'
            aria-hidden='true'
          >
            <div
              className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-200 to-yellow-400 opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]'
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </section>
      <section
        className='mx-auto max-w-5xl items-center align-center grid grid-cols-2'
        id='more'
      >
        <div className='p-4'>
          <p className='text-xl leading-8 font-semibold mb-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <p className='leading-8 text-slate-600'>
            Maiores temporibus cupiditate voluptatem maxime odio ad rerum veniam
            placeat obcaecati! Possimus quasi unde, non dignissimos minima
            maxime eaque delectus molestias quo?
          </p>
        </div>
        <div className='relative w-[604px] h-[401px]'>
          <Image alt='spraybook' src='/images/spraybook.png' fill />
        </div>
      </section>
      <section className='my-32'>
        <h2 className='text-2xl text-center text-slate-600 font-semibold mt-6'>
          Testimonials
        </h2>
        <div className='mx-auto w-full px-4 sm:py-8 lg:py-12 flex flex-wrap justify-center items-center gap-4'>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.client} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <section className=''>
        <h2 className='text-2xl text-center text-slate-600 font-semibold mt-6'>
          My Stack
        </h2>
        <div className='mx-auto max-w-lg p-4 my-4 flex flex-wrap justify-center items-center gap-4'>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <svg
              width='100%'
              height='100%'
              viewBox='-10.5 -9.45 21 18.9'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='w-6 self-center text-[#149eca]'
            >
              <circle cx='0' cy='0' r='2' fill='currentColor' />
              <g stroke='currentColor' stroke-width='1' fill='none'>
                <ellipse rx='10' ry='4.5' />
                <ellipse rx='10' ry='4.5' transform='rotate(60)' />
                <ellipse rx='10' ry='4.5' transform='rotate(120)' />
              </g>
            </svg>
            React
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image alt='next' src='/images/next.png' width={24} height={24} />
            Next.js
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='Auth.js'
              src='/images/auth.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            Auth.js
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='TypeScript'
              src='/images/ts.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            TypeScript
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='MongoDb'
              src='/images/mongo.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            MongoDb
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='Mantine'
              src='/images/mantine.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            Mantine
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='Tailwind'
              src='/images/tailwind.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            Tailwind
          </div>
          <div className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200'>
            <Image
              alt='Three.js'
              src='/images/three.png'
              width={24}
              height={24}
              className='w-6 h-6'
            />
            Three.js
          </div>
        </div>
      </section>
    </div>
  );
}
