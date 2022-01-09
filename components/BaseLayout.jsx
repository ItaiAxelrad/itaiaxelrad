import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ResponsiveAppBar from '@components/ResponsiveAppBar';
import Footer from '@components/Footer';
import styles from '@styles/styles.module.css';

export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <title>Itai Axelrad</title>
        <meta
          key='viewport'
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          minHeight: '100vh',
        }}
        className={styles.dots}
      >
        <ResponsiveAppBar />
        <Container
          component='main'
          maxWidth='md'
          sx={{ flexGrow: 1, padding: { xs: '1rem' } }}
        >
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
