'use client';

import Heading from '@components/Heading';
import Link from 'next/link';

const Error = () => {
  return (
    <div className='mx-auto max-w-sm p-2 my-8'>
      <Heading>Server-side Error</Heading>
      <p className='my-2'>
        A server-side error occurred. Please try again or go back.
      </p>
      <Link href='/' className='btn-primary'>
        &larr; Go back
      </Link>
    </div>
  );
};

export default Error;
