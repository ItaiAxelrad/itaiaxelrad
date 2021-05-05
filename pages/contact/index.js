import Head from 'next/head';
import { name } from '@/components/Layout';
import ContactForm from '@/components/ContactForm';
import utilStyles from '@/styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <>
      <Head>
        <title>{name} | Contact</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h2>Contact</h2>
        <p>
          Please feel free to reach out to me with any questions or inquiries.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
