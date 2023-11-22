import SwooshText from '@components/SwooshText';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className='relative isolate h-screen'>
      <div className='mx-auto max-w-lg h-full flex flex-col items-center justify-center p-2'>
        <div className='mb-8 flex justify-center'>
          <div className='relative rounded-full py-1 px-3 text-sm leading-6 text-slate-600 ring-1 ring-blue-100 hover:ring-blue-200 dark:text-slate-400 dark:ring-slate-700 dark:hover:ring-slate-600'>
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
          <h1 className='leading-3 text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-tr from-blue-600 to-blue-400 inline sm:text-6xl'>
            Hi there
          </h1>
          <span
            className='inline-block text-4xl ml-4 align-text-bottom animate-wiggle cursor-pointer'
            aria-hidden='true'
          >
            👋
          </span>
          <p className='mt-6 text-3xl font-semibold leading-9 text-gray-800 dark:text-slate-200'>
            <span className='text-gray-700 dark:text-slate-300'>
              I&apos;m a
            </span>{' '}
            Software{' '}
            <span className='text-gray-700 dark:text-slate-300'>&</span>
            <br />
            Environmental <SwooshText>Engineer</SwooshText>
          </p>
          <p className='mt-6 text-md leading-7 text-gray-600 mx-auto max-w-[40ch] dark:text-slate-400'>
            You can find me working on my latest projects in Boulder or climbing
            in the surrounding mountains
          </p>
          <div className='mt-10 flex items-center justify-center gap-x-4'>
            <Link href='/contact' className='btn-primary'>
              Hire me
            </Link>
            <Link href='/#more' className='btn-secondary'>
              Learn more
            </Link>
          </div>
        </div>
      </div>

      {/* <div className='absolute inset-0 top-0 -z-20 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100), slate-50)] opacity-10 dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.100), slate-900)]' />
      <div className='absolute inset-y-0 right-1/2 -z-20 mr-0 w-[200%] origin-bottom-left skew-x-[-20deg] shadow-lg shadow-blue-400/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center rounded-md dark:ring-slate-950' /> */}

      <div
        className='absolute max-w-full left-0 top-0 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-32'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(100%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-100 to-orange-100 opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:from-teal-900 dark:to-blue-900'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className='absolute max-w-full inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(80%-30rem)]'
        aria-hidden='true'
      >
        <div
          className='relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-amber-100 to-yellow-100 opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:from-emerald-900 dark:to-blue-900'
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </section>
  );
}
