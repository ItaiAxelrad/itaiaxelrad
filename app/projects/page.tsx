import ProjectCard from '@components/ProjectCard';
import projects from '@data/projects.json';

function ProjectsPage() {
  return (
    <div className='max-w-2xl my-8 p-2'>
      <h2 className='text-2xl text-center my-6'>Projects</h2>
      <div className='flex flex-col gap-4 max-w-lg mx-auto'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
