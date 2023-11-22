import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='p-4 text-center text-sm text-slate-600 dark:text-slate-500'>
      <span>&copy; Itai Axelrad</span>
      <span className='text-xs px-2 text-slate-400 dark:text-slate-700'>|</span>
      <Link href='/blogs'>Blog</Link>
      <span className='text-xs px-2 text-slate-400 dark:text-slate-700'>|</span>
      <a href='https://youtu.be/dQw4w9WgXcQ'>Privacy Policy</a>
    </footer>
  );
}
