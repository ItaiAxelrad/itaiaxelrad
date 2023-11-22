'use client';

import type { MDXComponents } from 'mdx/types';
import { useMDXComponent } from 'next-contentlayer/hooks';

const mdxComponents: MDXComponents = {
  // img: ({ src, alt }) => <Image src={src as string} alt={alt ?? 'image'} />,
};

export function Mdx({ code }) {
  const MDXContent = useMDXComponent(code);

  return <MDXContent components={mdxComponents} />;
}
