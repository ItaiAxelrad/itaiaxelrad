import Heading from '@components/Heading';
import timeline from '@data/timeline.json';

const Event = ({ event }) => {
  return (
    <li className='mb-8 ml-4'>
      <span className='absolute flex items-center justify-center w-8 h-8 bg-blue-100 dark:bg-blue-300 rounded-full -left-4'>
        {event.icon}
      </span>
      <div className='ml-4 mt-4'>
        <h3 className='flex items-center my-1 text-lg font-semibold text-blue-500'>
          {event.title}
        </h3>
        <time className='block mb-2 text-sm font-normal leading-none text-slate-400 '>
          {event.date}
        </time>
        <p className='mb-4 text-base font-normal text-slate-800 dark:text-slate-300'>
          {event.description}
        </p>
      </div>
    </li>
  );
};

export default function Page() {
  return (
    <div className='max-w-xl my-16 p-2'>
      <Heading>About</Heading>
      <ol className='relative border-l-2 border-blue-100 ml-4 dark:border-blue-300'>
        {timeline.map((event) => {
          return <Event key={event.date} event={event} />;
        })}
      </ol>
    </div>
  );
}
