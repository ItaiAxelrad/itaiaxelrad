import Heading from '@components/Heading';
import ProjectCard from '@components/ProjectCard';
import projects from '@data/projects.json';

export default function Page() {
  return (
    <div className='max-w-2xl my-16 p-2'>
      <Heading>Projects</Heading>
      <div className='flex flex-col gap-4 max-w-lg mx-auto'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
