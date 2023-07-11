'use client';

import Link from 'next/link';

const Error = () => {
  return (
    <div className='mx-auto max-w-sm p-2 my-8'>
      <h2 className='my-2'>Server-side Error</h2>
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
