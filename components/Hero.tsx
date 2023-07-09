import styles from '@styles/styles.module.css';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className='w-screen'>
      <div className='relative isolate px-6 pt-14 lg:px-8'>
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
              My latest project.{' '}
              <Link href='/projects' className='font-semibold text-blue-600'>
                <span className='absolute inset-0' aria-hidden='true' />
                Read more <span aria-hidden='true'>&rarr;</span>
              </Link>
            </div>
          </div>
          <div className='text-center'>
            <h1 className='text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 inline sm:text-6xl'>
              Hi there
            </h1>
            <span className={`${styles.wave} text-5xl ml-4`}>👋</span>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              I&apos;m a water resources & environmental engineer with a
              programming problem.
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
                href='/about'
                className='text-sm font-semibold leading-6 text-slate-800'
              >
                Learn more <span aria-hidden='true'>→</span>
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
      </div>
    </div>
  );
}
