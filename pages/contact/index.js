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
      <section>
        <h1 style={{ margin: '0' }} className={utilStyles.headingXl}>
          Contact
        </h1>
        <p>
          Please feel free to reach out to me with any questions or inquiries.
        </p>
        <ContactForm />
      </section>
    </>
  );
}
