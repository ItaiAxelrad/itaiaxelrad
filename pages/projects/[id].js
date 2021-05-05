import Head from 'next/head';
import Link from 'next/link';
import { getAllProjectIds, getProjectData } from '@/lib/projects';
import Date from '@/components/Date';
import utilStyles from '@/styles/utils.module.css';

export default function Project({ projectData }) {
  return (
    <>
      <Head>
        <title>{projectData.title}</title>
      </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{projectData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={projectData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
        </article>
        <nav style={{ padding: '1rem 0' }}>
          <div className={utilStyles.backToHome}>
            <Link href='/projects'>
              <a style={{ padding: '1rem 0' }}>← Back to Portfolio</a>
            </Link>
          </div>
        </nav>
    </>
  );
}

export async function getStaticPaths() {
  const paths = getAllProjectIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectData = await getProjectData(params.id);
  return {
    props: {
      projectData,
    },
  };
}
