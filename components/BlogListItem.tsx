import Link from 'next/link';

export default function BlogListItem({ blog }) {
  return (
    <li className='list-none'>
      <span className='uppercase text-xs bg-blue-500/10 text-blue-500 ring-1 rounded-full  px-3 py-1'>
        {blog.category}
      </span>
      <Link
        href={blog.slug}
        className='mt-2 font-semibold text-xl block leading-6'
      >
        {blog.title}
      </Link>
      <p className='text-slate-500 dark:text-slate-400'>
        {new Date(blog?.date).toLocaleString('en-US', {
          // weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </p>
    </li>
  );
}
