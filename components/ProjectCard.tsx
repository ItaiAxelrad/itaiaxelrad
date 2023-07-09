import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
  return (
    <div className='bg-white ring-1 ring-slate-200 shadow-sm rounded-lg p-4'>
      <h4 className='text-xl font-semibold'>{project.title}</h4>
      <Image fill src={project.image} alt={project.title} />
      <p className='text-slate-600'>{project.description}</p>
      <Link
        href={project.link}
        className='ring-1 ring-slate-200 px-2 py-1 rounded-full mt-2 inline-block'
      >
        Learn More <span aria-hidden='true'>→</span>
      </Link>
    </div>
  );
};

export default ProjectCard;
