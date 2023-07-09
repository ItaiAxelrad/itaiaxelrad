'use client';

import Link from "next/link";

const Error = () => {
  return (
    <div>
      <p>Server-side Error</p>
      <p>A server-side error occurred. Please try again or go back.</p>
      <Link href='/'>&larr; Go back</Link>
    </div>
  );
};

export default Error;
