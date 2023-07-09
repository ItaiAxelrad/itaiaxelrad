import Image from 'next/image';

export default function Testimonial({ testimonial }) {
  return (
    <div className='p-4 max-w-sm rounded-lg shadow-lg bg-white'>
      <div className='flex gap-4 align-middle pb-2'>
        <Image
          alt={testimonial.client}
          src={testimonial.image}
          width={32}
          height={32}
          className='ring-2 ring-slate-200 rounded-full w-10 h-10'
        />
        <div className='flex flex-col align-middle'>
          <p className='font-semibold'>{testimonial.client}</p>
          <p className='text-slate-600 text-sm'>{testimonial.company}</p>
        </div>
      </div>
      <p className='oblique text-slate-700'>{testimonial.testimonial}</p>
    </div>
  );
}
