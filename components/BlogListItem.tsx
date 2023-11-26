import Link from 'next/link';

export default function BlogListItem({ blog }) {
  return (
    <li className='w-full'>
      <Link href={blog.slug} className='block font-semibold leading-6'>
        {blog.title}
      </Link>

      <span className='text-xs text-slate-500 dark:text-slate-400'>
        {new Date(blog?.date).toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </span>
      <span className='px-1 text-xs text-slate-500 dark:text-slate-400'>
        &bull;
      </span>
      <span className='uppercase text-xs bg-blue-500/10 text-blue-500 ring-1 rounded-md px-1 py-0.5'>
        {blog.category}
      </span>
    </li>
  );
}
