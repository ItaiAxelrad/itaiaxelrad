'use client';

import Heading from '@components/Heading';
import testimonials from '@data/testimonials.json';
import { motion, Variants } from 'framer-motion';
import Image from 'next/image';

const cardVariants: Variants = {
  offscreen: {
    y: 100,
    rotate: -10,
  },
  onscreen: {
    y: 0,
    rotate: 0,
    transition: {
      type: 'ease',
      bounce: 0.2,
      duration: 0.8,
    },
  },
};

function Testimonial({ testimonial }) {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
    >
      <motion.div className='card' variants={cardVariants}>
        <div className='p-4 max-w-sm rounded-lg shadow-lg bg-white dark:bg-slate-800'>
          <div className='flex gap-4 align-middle pb-2'>
            <Image
              alt={testimonial.client}
              src={`/images/avatars/${testimonial.image}`}
              width={32}
              height={32}
              className='ring-2 ring-slate-200 rounded-full w-10 h-10 dark:ring-slate-700'
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
      </motion.div>
    </motion.div>
  );
}

export default function Testimonials() {
  return (
    <section className='my-24'>
      <Heading>Testimonials</Heading>
      <div className='mx-auto max-w-2xl h-full px-4 sm:py-8 lg:py-12 flex flex-wrap justify-center items-center gap-4'>
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial.client} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
}
