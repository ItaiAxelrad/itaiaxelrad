import Head from 'next/head';
import utilStyles from '@/styles/utils.module.css';
import NavBar from '@/components/NavBar.jsx';

export const name = 'Itai Axelrad';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="description" content="Itai Axelrads portfolio site" />
        <meta property="og:image" content="/favicon.svg" />
        <meta name="og:title" content={name} />
        <meta name="twitter:card" content="summary_large_image" />
        <link
          href="https://fonts.gstatic.com/"
          rel="preconnect"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className={utilStyles.header}>
        <NavBar name={name} />
      </header>
      <main>{children}</main>
      <footer>
        <small className={utilStyles.lightText}>
          &copy; {name} {new Date().getFullYear()}
        </small>
      </footer>
    </>
  );
}
