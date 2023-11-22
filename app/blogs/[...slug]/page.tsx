import { Mdx } from '@components/mdxComponents';
import { allBlogs } from 'contentlayer/generated';

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
    return <p>Blog ({slug}) not found</p>;
  }

  return (
    <article className='prose lg:prose-xl container max-w-2xl mx-auto px-4 py-24'>
      <a href='/blogs'>&larr; Back to all blogs</a>
      <h1>{blog.title}</h1>
      <p>Published: {new Date(blog.date).toLocaleDateString('en-US')}</p>
      <Mdx code={blog.body.code} />
    </article>
  );
};

export default BlogLayout;
