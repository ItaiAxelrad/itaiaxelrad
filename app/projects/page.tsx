import ProjectCard from '@components/ProjectCard';
import projects from '@data/projects.json';
import Link from 'next/link';

function ProjectsPage() {
  return (
    <div className='max-w-2xl my-8 p-2'>
      <h2 className='text-2xl text-center my-6'>Projects</h2>
      <div className='flex flex-col gap-4 max-w-xl mx-auto'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link href='#' className='my-4 btn-primary inline-block'>
        See more projects <span aria-hidden='true'>→</span>
      </Link>
    </div>
  );
}

export default ProjectsPage;
