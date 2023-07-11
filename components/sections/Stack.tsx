import stack from '@data/stack.json';
import Image from 'next/image';

export default function Stack() {
  return (
    <section className='mx-auto max-w-xl my-24'>
      <h2 className='my-6 font-semibold text-2xl text-center text-slate-600 dark:text-slate-400'>
        My Stack
      </h2>
      <div className='p-4 my-4 flex flex-wrap justify-center items-center gap-4'>
        {stack.map((stack) => (
          <div
            key={stack.label}
            className='bg-white px-4 py-2 rounded-full flex items-center justify-center gap-2 ring-1 ring-slate-100 text-lg dark:bg-slate-800 dark:ring-slate-700'
          >
            <Image alt={stack.label} src={stack.image} width={32} height={32} />
            {stack.label}
          </div>
        ))}
      </div>
    </section>
  );
}
