import { Mdx } from '@components/mdxComponents';
import { allBlogs } from 'contentlayer/generated';

interface BlogPageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () =>
  allBlogs.map((doc) => ({ slug: doc._raw.flattenedPath.split('/') }));

const BlogLayout = async ({ params }: BlogPageProps) => {
  const slug = params.slug.join('/');
  const doc = allBlogs.find((doc) => doc.slugAsParams === slug);

  if (doc === undefined) {
    return <p>Blog ({slug}) not found</p>;
  }

  return (
    <article className='pt-12'>
      <a href='/blogs'>&larr; Back to all blogs</a>
      <h1>{doc.title}</h1>
      <p>{doc.subtitle}</p>
      <p>Published: {new Date(doc.date).toLocaleDateString('en-US')}</p>
      <Mdx code={doc.body.code} />
    </article>
  );
};

export default BlogLayout;
