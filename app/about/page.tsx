import timeline from '@data/timeline.json';

const Event = ({ event }) => {
  return (
    <li className='mb-8 ml-6'>
      <span className='absolute flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full -left-4'>
        {event.icon}
      </span>
      <div className='ml-4 mt-4'>
        <h3 className='flex items-center my-1 text-lg font-semibold text-blue-500'>
          {event.title}
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-slate-400 '>
          {event.date}
        </time>
        <p className='mb-4 text-base font-normal text-slate-800 dark:text-slate-200'>
          {event.description}
        </p>
      </div>
    </li>
  );
};

export default function Page() {
  return (
    <article className='max-w-2xl my-8 p-2'>
      <h2 className='text-2xl text-center my-6'>About</h2>
      <ol className='relative border-l-2 border-blue-100'>
        {timeline.map((event) => {
          return <Event key={event.date} event={event} />;
        })}
      </ol>
    </article>
  );
}
