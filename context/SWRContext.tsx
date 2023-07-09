'use client';

import fetcher from '@lib/fetcher';
import { SWRConfig } from 'swr';

export default function SWRContext({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SWRConfig value={{ fetcher: fetcher }}>{children}</SWRConfig>;
}
