import Head from 'next/head';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import InfoCard from '@components/InfoCard';
import { cards } from '@lib/cards';

const HomePage = () => {
  return (
    <>
      <Typography
        variant='h1'
        align='center'
        gutterBottom
        fontWeight={800}
        sx={{ fontSize: '3.5rem' }}
      >
        Welcome to{' '}
        <Link underline='hover' href='https://nextjs.org'>
          Next.js!
        </Link>
      </Typography>
      <Typography variant='subtitle1' align='center' gutterBottom>
        Get started by editing <code>pages/index.js</code>
      </Typography>
      <Container maxWidth='sm'>
        <Grid container spacing={2} cards={cards} mt={2}>
          {cards.map((card) => (
            <Grid item xs={6} key={card.title}>
              <InfoCard key={card.id} card={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
