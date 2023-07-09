import Link from 'next/link';

const NotFound = () => {
  return (
    <div>
      <p>Page Not Found</p>
      <p>The page you are looking for cannot be found. Please try again</p>
      <Link href='/'>&larr; Go back</Link>
    </div>
  );
};

export default NotFound;
