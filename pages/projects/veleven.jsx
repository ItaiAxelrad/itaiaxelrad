import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Veleven = () => {
  return (
    <>
      <Head>
        <title>vEleven</title>
      </Head>
      <Container maxWidth='md' sx={{ marginBlock: '2rem' }}>
        <Typography variant='h1' gutterBottom>
          vEleven
        </Typography>
        <Typography paragraph>Some description here...</Typography>
      </Container>
    </>
  );
};

export default Veleven;
