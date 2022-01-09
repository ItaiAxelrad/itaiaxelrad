import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const ThreeTerrain = () => {
  return (
    <>
      <Head>
        <title>ThreeTerrain</title>
      </Head>
      <Container maxWidth='md' sx={{ marginBlock: '2rem' }}>
        <Typography variant='h1' gutterBottom>
          ThreeTerrain
        </Typography>
        <Typography paragraph>Some description here...</Typography>
      </Container>
    </>
  );
};

export default ThreeTerrain;
