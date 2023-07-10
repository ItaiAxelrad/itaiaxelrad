import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white ring-1 ring-slate-200 shadow-sm rounded-md p-4'>
      <Link
        href={project.link}
        className='font-semibold text-xl text-blue-500 block leading-6'
      >
        {project.title}
      </Link>
      <small className='text-slate-500'>
        {new Date(project.date).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </small>
      <p className='text-slate-600 mt-2'>{project.description}</p>
    </div>
  );
};

export default ProjectCard;
