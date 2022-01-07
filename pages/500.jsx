import Head from 'next/head';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Custom500 = () => {
  return (
    <>
      <Head>
        <title>500</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography variant='h4'>Server-side Error</Typography>
        <Typography paragraph>
          A server-side error occurred. Please try again or go back.
        </Typography>
        <Button href='/' startIcon={<ArrowBackRoundedIcon />}>
          Go back
        </Button>
      </Container>
    </>
  );
};

export default Custom500;
