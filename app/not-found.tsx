import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='mx-auto max-w-sm p-2 my-16'>
      <h2 className='my-2'>Page Not Found</h2>
      <p className='my-2'>
        The page you are looking for cannot be found. Please try again
      </p>
      <Link href='/' className='btn-primary'>
        &larr; Go back
      </Link>
    </div>
  );
};

export default NotFound;
