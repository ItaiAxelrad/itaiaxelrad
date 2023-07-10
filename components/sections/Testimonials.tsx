import testimonials from '@data/testimonials.json';
import Image from 'next/image';

function Testimonial({ testimonial }) {
  return (
    <div className='p-4 max-w-sm rounded-lg shadow-lg bg-white dark:bg-slate-800'>
      <div className='flex gap-4 align-middle pb-2'>
        <Image
          alt={testimonial.client}
          src={testimonial.image}
          width={32}
          height={32}
          className='ring-2 ring-slate-200 rounded-full w-10 h-10'
        />
        <div className='flex flex-col align-middle pr-2'>
          <p className='font-semibold'>{testimonial.client}</p>
          <p className='text-sm text-slate-600 dark:text-slate-400'>
            {testimonial.company}
          </p>
        </div>
      </div>
      <p className='text-slate-700 dark:text-slate-300'>
        {testimonial.testimonial}
      </p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className='my-24'>
      <h2 className='my-6 font-semibold text-2xl text-center text-slate-600 dark:text-slate-400'>
        Testimonials
      </h2>
      <div className='mx-auto max-w-2xl h-full px-4 sm:py-8 lg:py-12 flex flex-wrap justify-center items-center gap-4'>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.client} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
