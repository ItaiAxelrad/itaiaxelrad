import Animate from '@components/Animate/Animate';
import LineChart from '@components/Chart';
import Heading from '@components/Heading';
import ElCapitan from '@components/three/ElCapitan';
import Model from '@components/three/Model';

export default function Services() {
  return (
    <div className='container p-2 mx-auto max-w-5xl' id='more'>
      <Heading>Services</Heading>
      {/* <p className='max-w-2xl mx-auto text-center leading-6 text-slate-700 dark:text-slate-300 mb-12'>
        I&apos;m a detail-oriented and results-driven water environmental
        engineering professional with a strong background in data analysis and
        software development.
      </p> */}
      <div className='mt-12 flex flex-col items-center align-center gap-20'>
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='p-4'>
            <p className='text-xl leading-8 font-semibold mb-4'>
              Data Analysis & Visualization <span role='img'>📈</span>
            </p>
            <p className='leading-8 text-slate-600 dark:text-slate-400'>
              Proficient in utilizing advanced statistical methods and data
              visualization tools to derive meaningful insights for
              environmental impact assessments, water quality monitoring, and
              sustainability analyses. Demonstrated ability to translate complex
              data sets into actionable recommendations, contributing to
              informed decision-making in the pursuit of environmentally
              responsible solutions.
            </p>
            {/* <p className='leading-8 text-slate-600 dark:text-slate-400'>
              Whether it&apos;s client facing or administrative dashboards,
              I&apos;ve got your back with beautiful and interactive charts,
              graphs, and tables. All using the latest technology.
            </p> */}
          </div>
          <div className='h-80 min-h-full bg-white ring-1 ring-blue-50 rounded-lg shadow-lg p-2 dark:bg-slate-200 dark:ring-slate-300'>
            <LineChart />
          </div>
        </section>
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='h-80 min-h-full rounded-lg shadow-lg'>
            <Model>
              <ElCapitan />
            </Model>
          </div>
          <div className='p-2 -order-1 md:order-1'>
            <p className='text-xl leading-8 font-semibold mb-4'>
              3D Design & Modeling <span role='img'>👀</span>
            </p>
            <p className='leading-8 text-slate-600 dark:text-slate-400'>
              Three dimensional design is an integral part of any modern
              engineering toolkit. From engineering a processing facility in
              AutoCAD Plant 3D, designing a terrain model in Blender, to
              displaying that model on a website with Three.js - I got you
              covered.
            </p>
          </div>
        </section>
        <section className='grid grid-cols-1 gap-6 md:grid-cols-2'>
          <div className='p-2'>
            <p className='text-xl leading-8 font-semibold mb-4'>
              Engineering & Design <span role='img'>⚙️</span>
            </p>
            <p className='leading-8 text-slate-600 dark:text-slate-400'>
              Whether it&apos;s simple landing page, full-stack app or a water
              reclamation facility...
            </p>
          </div>

          <div className='relative flex items-center min-h-full bg-gradient-to-r from-cyan-400/80 to-blue-400/80 overflow-hidden rounded-lg shadow-lg border border-dashed border-slate-200/20'>
            <svg
              className='absolute inset-0 h-full w-full stroke-slate-200/20'
              fill='none'
            >
              <defs>
                <pattern
                  id='pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a'
                  x='0'
                  y='0'
                  width='10'
                  height='10'
                  patternUnits='userSpaceOnUse'
                >
                  <path d='M-3 13 15-5M-5 5l18-18M-1 21 17 3'></path>
                </pattern>
              </defs>
              <rect
                stroke='none'
                fill='url(#pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a)'
                width='100%'
                height='100%'
              ></rect>
            </svg>
            <div className='w-[320px] h-[320px] mx-auto flex justify-center overflow-hidden'>
              <Animate />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
