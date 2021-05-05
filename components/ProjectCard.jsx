import Link from 'next/link';
import Date from '@/components/Date';
import utilStyles from '@/styles/utils.module.css';

const ProjectCard = ({ project, index }) => {
  return (
    <>
      <style jsx>
        {`
          div.project {
            align-self: stretch;
          }
          a.project {
            display: flex;
            text-decoration: none;
          }
          a.project:hover {
            border-color: var(--brand);
          }
          img {
            width: calc(100% + 2rem);
            margin: -1rem 0 0.75rem -1rem;
            border-radius: 6px 6px 0 0;
          }
        `}
      </style>
      <div style={{ display: 'flex' }}>
        <Link href={`/projects/${project.id}`}>
          <a
            className={`${utilStyles.card} project animateIn`}
            style={{ animationDelay: index * 100 + 'ms' }}
          >
            <li>
              <img
                src={project.image}
                alt={project.title}
                width={100}
                height={150}
                className={utilStyles.thumbnailLarge}
                loading='lazy'
              />
              <h3 style={{ margin: '0', padding: '0' }}>{project.title}</h3>
              <small className={utilStyles.lightText}>
                <Date dateString={project.date} />
              </small>
            </li>
          </a>
        </Link>
      </div>
    </>
  );
};

export default ProjectCard;
