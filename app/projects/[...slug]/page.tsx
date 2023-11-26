import { Mdx } from '@components/mdxComponents';
import { allProjects } from 'contentlayer/generated';

interface ProjectPageProps {
  params: {
    slug: string[];
  };
}

export const generateStaticParams = async () =>
  allProjects.map((project) => ({
    slug: project._raw.flattenedPath.split('/'),
  }));

const ProjectLayout = async ({ params }: ProjectPageProps) => {
  const slug = params.slug.join('/');
  const project = allProjects.find((project) => project.slugAsParams === slug);

  if (project === undefined) {
    return <p>Project ({slug}) not found</p>;
  }

  return (
    <article className='prose dark:prose-invert container max-w-2xl mx-auto px-4 py-24'>
      <a href='/projects'>&larr; Back to all projects</a>
      <h1 className='text-5xl'>{project.title}</h1>
      <p>{project?.description}</p>
      <p>Published: {new Date(project?.date).toLocaleDateString('en-US')}</p>
      <Mdx code={project.body.code} />
    </article>
  );
};

export default ProjectLayout;
