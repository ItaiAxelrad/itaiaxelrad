import LineChart from '@components/Chart';
import Heading from '@components/Heading';
import ElCapitan from '@components/three/ElCapitan';
import Model from '@components/three/Model';

export default function Services() {
  return (
    <div className='my-32'>
      <Heading>Services</Heading>
      <section
        className='mx-auto max-w-5xl items-center align-center grid grid-cols-1 gap-6 p-4 mb-24 md:grid-cols-2'
        id='more'
      >
        <div className='p-4'>
          <p className='text-xl leading-8 font-semibold mb-4'>
            Visualization that fits all your data needs
          </p>
          <p className='leading-8 text-slate-600 dark:text-slate-400'>
            Whether it&apos;s client facing or administrative dashboards,
            I&apos;ve got your back with beautiful and interactive charts,
            graphs, and tables. All using the latest technology.
          </p>
        </div>
        <div className='h-80 min-h-full bg-white ring-1 ring-blue-50 rounded-md p-4 dark:bg-slate-200 dark:ring-slate-300'>
          <LineChart />
        </div>
      </section>
      <section
        className='mx-auto max-w-5xl items-center align-center grid grid-cols-1 gap-6 p-4 mb-24 md:grid-cols-2'
        id='more'
      >
        <div className='h-80 min-h-full rounded-md'>
          <Model>
            <ElCapitan />
          </Model>
        </div>
        <div className='p-4 -order-1 md:order-1'>
          <p className='text-xl leading-8 font-semibold mb-4'>
            Grab attention <span>👀</span>
          </p>
          <p className='leading-8 text-slate-600 dark:text-slate-400'>
            Take advantage of amazing three-dimensional rendering and wow your
            customers or clients. The options are endless at the bleeding edge
            of web development!
          </p>
        </div>
      </section>
    </div>
  );
}
