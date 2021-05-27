import Head from 'next/head';
import Link from 'next/link';
import { resume } from '@/data/resume.js';
import { name } from '@/components/Layout';
import Date from '@/components/Date';
import ResumeCard from '@/components/ResumeCard';
import utilStyles from '@/styles/utils.module.css';

export const getStaticProps = async () => {
  return {
    props: { resume: resume },
  };
};

export default function Resume({ resume }) {
  return (
    <>
      <Head>
        <title>{name} | Resume</title>
      </Head>
      <section className={utilStyles.timeline}>
        <h2>Resume</h2>
        {resume.map((event, i) => (
          <ResumeCard event={event} key={i} index={i} />
        ))}
      </section>
    </>
  );
}
