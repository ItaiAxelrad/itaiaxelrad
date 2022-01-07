import Head from 'next/head';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const Custom404 = () => {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Container maxWidth='sm'>
        <Typography variant='h4'>Page Not Found</Typography>
        <Typography paragraph>
          The page you are looking for cannot be found. Please try again
        </Typography>
        <Button href='/' startIcon={<ArrowBackRoundedIcon />}>
          Go back
        </Button>
      </Container>
    </>
  );
};

export default Custom404;
