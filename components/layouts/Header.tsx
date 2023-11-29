'use client';

import LogoIcon from '@components/icons/LogoIcon';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DialogMenu from './DialogMenu';

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className='absolute top-0 z-40 w-full flex-none'>
      <nav
        className='flex items-center justify-between p-4 lg:px-8'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <Link
            href='/'
            className='rounded-full -m-1.5 p-1.5 hover:bg-blue-200/10 dark:hover:bg-blue-900/10'
          >
            <span className='sr-only'>Itai Axelrad</span>
            <LogoIcon className={`${pathname === '/' && 'text-blue-500'}`} />
          </Link>
        </div>
        <DialogMenu navigation={navigation} />
        <div className='hidden lg:flex lg:gap-x-8'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`px-2.5 py-1 rounded-md text-sm font-semibold leading-6 hover:bg-blue-200/10 dark:hover:bg-blue-900/10 ${
                pathname.includes(item.href) && 'text-blue-500 '
              }`}
            >
              <span className='text-blue-500/50'>/</span>
              {item.name}
            </Link>
          ))}
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <a
            href='https://github.com/ItaiAxelrad'
            className='text-sm font-semibold leading-3 flex align-middle items-center gap-2 '
          >
            GitHub{' '}
            <span aria-hidden='true'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
                className='w-4 h-4 inline'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                />
              </svg>
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
}
