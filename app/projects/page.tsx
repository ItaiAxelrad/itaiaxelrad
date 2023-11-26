import Heading from '@components/Heading';
import ProjectCard from '@components/ProjectCard';
import { allProjects } from 'contentlayer/generated';

export default function Page() {
  return (
    <div className='container-sm my-16 p-2'>
      <Heading>Projects</Heading>
      <p className='pb-4'>I sometimes write a little about my projects</p>
      <div className='flex flex-col gap-4 w-full mx-auto'>
        {allProjects
          .sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)))
          .map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
      </div>
    </div>
  );
}
