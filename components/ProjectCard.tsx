import Link from 'next/link';
import Card from './layouts/Card';

const ProjectCard = ({ project }) => {
  return (
    <Card>
      <Link
        href={project.slug}
        className='font-semibold text-xl text-blue-500 block leading-6'
      >
        {project.title}
      </Link>
      <small className='text-slate-500 dark:text-slate-400'>
        {project.date}
        {new Date(project.date).toLocaleDateString('en-US')}
        {new Date(project.date).toLocaleString('en-US', {
          weekday: 'long',
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </small>
      <p className='text-slate-600 mt-2 dark:text-slate-300'>
        {project?.description}
      </p>
    </Card>
  );
};

export default ProjectCard;
