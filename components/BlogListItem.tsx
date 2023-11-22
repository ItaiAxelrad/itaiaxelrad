import Link from 'next/link';

export default function BlogListItem({ blog }) {
  return (
    <li className='list-none'>
      <Link
        href={blog.slug}
        className='font-semibold text-xl text-blue-500 block leading-6'
      >
        {blog.title}
      </Link>
      <small className='text-slate-500 dark:text-slate-400'>
        {new Date(blog?.date).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </small>
    </li>
  );
}
