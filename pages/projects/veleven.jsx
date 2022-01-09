import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

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
        <Stack direction='row' spacing={1}>
          <Chip label='React' color='primary' />
          <Chip label='Next.js' color='primary' />
          <Chip label='NextAuth' color='primary' />
          <Chip label='SWR' color='primary' />
          <Chip label='MUI' color='primary' />
          <Chip label='Mongodb' color='primary' />
          <Chip label='Chart.js' color='primary' />
        </Stack>
        <Divider sx={{ marginBlock: 5 }} />
        <Typography paragraph>
          Climbing is a life-long passion of mine.
        </Typography>
      </Container>
    </>
  );
};

export default Veleven;
