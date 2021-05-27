import Head from 'next/head';
import Link from 'next/link';
import { MDXProvider } from '@mdx-js/react';
import Date from '@/components/Date';
import utilStyles from '@/styles/utils.module.css';

export default function Project({ meta, children }) {
  return (
    <MDXProvider>
      <>
        <Head>
          <link rel="stylesheet" href="styles/night-owel.css" />
          <title>{meta.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{meta.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={meta.date} />
          </div>
          {children}
        </article>
        <nav style={{ padding: '1rem 0' }}>
          <div className={utilStyles.backToHome}>
            <Link href="/projects">
              <a style={{ padding: '1rem 0' }}>← Back to Portfolio</a>
            </Link>
          </div>
        </nav>
      </>
    </MDXProvider>
  );
}
