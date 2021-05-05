import Head from 'next/head';
import { getSortedProjectsData } from '@/lib/projects';
import { name } from '@/components/Layout';
import utilStyles from '@/styles/utils.module.css';
import ProjectCard from '@/components/ProjectCard';

export default function Projects({ allProjectsData }) {
  return (
    <>
      <style jsx>
        {`
          ul {
            display: grid;
            justify-content: center;
            grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
            gap: 1rem;
          }
        `}
      </style>
      <Head>
        <title>{name} | Portfolio</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2>Portfolio</h2>
        <ul className={utilStyles.list}>
          {allProjectsData.map((project, i) => (
            <ProjectCard project={project} key={project.id} index={i} />
          ))}
        </ul>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const allProjectsData = getSortedProjectsData();
  return {
    props: {
      allProjectsData,
    },
  };
}
