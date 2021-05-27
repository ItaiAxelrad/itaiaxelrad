import Layout from '@/components/Layout';
import '@/styles/global.css';
import '@/styles/night-owl.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
