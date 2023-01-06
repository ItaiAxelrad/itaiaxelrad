import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

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
        <Stack direction='row' spacing={1}>
          <Chip label='Vite' />
          <Chip label='Google APIs' />
          <Chip label='Mapbox' />
          <Chip label='Three.js' />
          <Chip label='React' />
          <Chip label='Lambda Functions' />
        </Stack>
        <Divider sx={{ marginBlock: 5 }} />
        <Typography paragraph>Some description here...</Typography>
      </Container>
    </>
  );
};

export default ThreeTerrain;
