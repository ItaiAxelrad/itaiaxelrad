import { Mdx } from '@components/mdxComponents';
import { allBlogs } from 'contentlayer/generated';
import Link from 'next/link';

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () =>
  allBlogs.map((blog) => ({ slug: blog._raw.flattenedPath.split('/') }));

const BlogLayout = async ({ params }: BlogPageProps) => {
  const slug = params.slug.join('/');
  const blog = allBlogs.find((blog) => blog.slugAsParams === slug);

  if (blog === undefined) {
    return (
      <article className='prose dark:prose-invert container max-w-2xl mx-auto px-4 py-24'>
        <a href='/blogs'>&larr; Back to all blogs</a>
        <h1>
          Blog <i>{slug}</i> not found
        </h1>
      </article>
    );
  }

  return (
    <article className='prose dark:prose-invert container max-w-2xl mx-auto px-4 py-24'>
      <Link href='/blogs' className='block'>
        &larr; Back to all blogs
      </Link>
      <span className='uppercase text-xs bg-blue-500/10 text-blue-500 ring-1 rounded-md px-1 py-0.5'>
        {blog.category}
      </span>
      <h1 className='mt-2'>{blog.title}</h1>
      <p className='text-sm uppercase text-slate-400'>
        Published: {new Date(blog.date).toLocaleDateString('en-US')}
      </p>
      <Mdx code={blog.body.code} />
    </article>
  );
};

export default BlogLayout;
