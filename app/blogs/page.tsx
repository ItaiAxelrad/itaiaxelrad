import BlogListItem from '@components/BlogListItem';
import Heading from '@components/Heading';
import { allBlogs } from 'contentlayer/generated';

export const metadata = {
  title: 'Blogs',
};

export default async function Page({ params }) {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <Heading>Projects</Heading>
      <p className='pb-4'>I sometimes write a little about things</p>
      <ul >
        {allBlogs.map((blog) => (
          <BlogListItem key={blog._id} blog={blog} />
        ))}
      </ul>
    </div>
  );
}
