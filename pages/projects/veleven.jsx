import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

const Veleven = () => {
  return (
    <>
      <Head>
        <title>vEleven</title>
      </Head>
      <Container maxWidth='sm' sx={{ marginBlock: '2rem' }}>
        <Typography variant='h1' gutterBottom>
          vEleven
        </Typography>
        <Stack direction='row' spacing={1} mb={1}>
          <Button
            startIcon={<GitHubIcon />}
            href='https://github.com/ItaiAxelrad/v-eleven'
          >
            Source
          </Button>
          <Button startIcon={<LinkIcon />} href='https://veleven.us/'>
            Site
          </Button>
        </Stack>
        <Stack direction='row' spacing={1}>
          <Chip label='React' />
          <Chip label='Next.js' />
          <Chip label='NextAuth' />
          <Chip label='SWR' />
          <Chip label='MUI' />
          <Chip label='Mongodb' />
          <Chip label='Chart.js' />
        </Stack>
        <Divider sx={{ marginBlock: 5 }} />
        <Typography paragraph>
          Climbing is a life-long passion of mine. For years, I have
          contemplated creating a simpler and better way to log ascents.
        </Typography>
        <Typography paragraph>
          The app features social login using NextAuth. Infinite loading was
          implemented using a custom SWR data fetching hook.
        </Typography>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt='' src='/images/feed.png' />
        <Typography paragraph>
          User profiles include climbing interactive metrics, displayed using
          Chart.js.
        </Typography>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img alt='' src='/images/profile.png' />
        
      </Container>
    </>
  );
};

export default Veleven;
