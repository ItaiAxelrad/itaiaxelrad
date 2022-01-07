import Head from 'next/head';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Footer from '@components/Footer';

export default function BaseLayout({ children }) {
  return (
    <>
      <Head>
        <title>My App</title>
        <meta
          key='viewport'
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
      </Head>
      <Box
        pt={5}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          height: '100vh',
        }}
      >
        <Container component='main' maxWidth='md' sx={{ flexGrow: 1 }}>
          {children}
        </Container>
        <Footer />
      </Box>
    </>
  );
}
