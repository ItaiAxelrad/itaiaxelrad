import stack from '@data/stack.json';
import testimonials from '@data/testimonials.json';
import styles from '@styles/styles.module.css';
import Image from 'next/image';
import Link from 'next/link';
import LineChart from './Chart';
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
            className='relative left-[calc(100%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-200 to-orange-300 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className='mx-auto max-w-sm py-12 sm:py-24 lg:py-32 lg:max-w-lg'>
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
                    strokeWidth='2'
                    stroke='currentColor'
                    className='inline w-4 h-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
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
            <p className='mt-6 text-xl font-semibold leading-8 text-gray-600'>
              I&apos;m a full-stack dev, specialized in dashboard UIs.
            </p>
            <p className='mt-6 text-md leading-8 text-gray-500 mx-auto'>
              You can find me working on my latest projects in Boulder or
              climbing in the surrounding mountains
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
                className='text-sm font-semibold text-slate-800 px-4 py-2.5 ring-1 ring-slate-400 rounded-md'
              >
                Learn more
              </Link>
            </div>
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
      </section>
      <section
        className='mx-auto max-w-5xl items-center align-center grid grid-cols-1 gap-6 p-4 mb-24 scroll-mt-32 md:grid-cols-2'
        id='more'
      >
        <div className='p-4'>
          <p className='text-xl leading-8 font-semibold mb-4'>
            Visualization that fits all your data needs
          </p>
          <p className='leading-8 text-slate-600'>
            Whether it&apos;s client facing or administrative dashboards,
            I&apos;ve got your back with beautiful and interactive charts,
            graphs, and tables. All using the latest technology.
          </p>
        </div>
        <div className='relative bg-white ring-1 ring-slate-200 rounded-md p-4 shadow-lg'>
          <LineChart />
        </div>
      </section>
      <section className='my-24'>
        <h2 className='text-2xl text-center text-slate-600 font-semibold mt-6'>
          Testimonials
        </h2>
        <div className='mx-auto max-w-2xl h-full px-4 sm:py-8 lg:py-12 flex flex-wrap justify-center items-center gap-4'>
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.client} testimonial={testimonial} />
          ))}
        </div>
      </section>
      <section className='mx-auto max-w-xl my-24'>
        <h2 className='text-2xl text-center text-slate-600 font-semibold mt-6'>
          My Stack
        </h2>
        <div className=' p-4 my-4 flex flex-wrap justify-center items-center gap-4'>
          {stack.map((stack) => (
            <div
              key={stack.label}
              className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-200 text-lg'
            >
              <Image
                alt={stack.label}
                src={stack.image}
                width={32}
                height={32}
              />
              {stack.label}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
