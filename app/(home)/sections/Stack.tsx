import Heading from '@components/Heading';
import stack from '@data/stack.json';
import Image from 'next/image';
import Link from 'next/link';

export default function Stack() {
  return (
    <section className='mx-auto max-w-xl my-24'>
      <Heading>Stack</Heading>
      <div className='p-4 my-4 flex flex-wrap justify-center items-center gap-4'>
        {stack.map((stack) => (
          <div
            key={stack.label}
            className='bg-white px-4 py-2 rounded-full shadow-lg  flex items-center justify-center gap-2 ring-2 ring-slate-100 text-lg dark:bg-slate-800 dark:ring-slate-700'
          >
            <Image
              alt={stack.label}
              src={`/images/stack/${stack.image}`}
              width={32}
              height={32}
            />
            <Link href={stack.link}>{stack.label}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}
