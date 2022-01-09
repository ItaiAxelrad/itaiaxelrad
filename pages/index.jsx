import Head from 'next/head';
import NextLink from 'next/link';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import Link from '@mui/material/Link';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from '@components/ProjectCard';
import ContactForm from '@components/ContactForm';
import { Flatirons } from '@components/Models';
import { projects } from '@lib/projects';
import styles from '@styles/styles.module.css';

const HomePage = () => {
  return (
    <>
      <Container maxWidth='md' sx={{ paddingBlock: '2.5rem' }} id='about'>
        <Typography variant='h1' gutterBottom sx={{ lineHeight: '1.4' }}>
          Hi there <span className={styles.wave}>👋</span>
        </Typography>
        <Typography variant='subtitle1' gutterBottom>
          I&apos;m an engineer turned full-stack web developer.
        </Typography>
        <Typography
          variant='subtitle2'
          gutterBottom
          sx={{ maxWidth: '55ch', pb: 2 }}
        >
          I have been building things my whole life. You can find me working on
          my latest projects in Boulder or climbing in the surrounding mountains
          ⤵
        </Typography>
        <NextLink href='/about' passHref>
          <Button variant='outlined' endIcon={<ArrowForwardIcon />}>
            Read more
          </Button>
        </NextLink>
        <Box
          mt={2}
          sx={{
            height: '60vh',
          }}
        >
          <Canvas
            orthographic
            camera={{ zoom: 3.5, position: [0, 50, 150] }}
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '8px',
            }}
          >
            <directionalLight intensity={0.25} />
            <ambientLight intensity={0.25} />
            <Suspense fallback={null}>
              <Flatirons />
              <Environment preset='sunset' />
              <OrbitControls />
            </Suspense>
          </Canvas>
        </Box>
      </Container>

      <Container maxWidth='md' sx={{ marginBlock: '2rem' }} id='portfolio'>
        <Typography variant='h2' gutterBottom>
          Recent Projects
        </Typography>
        <Grid container spacing={2} projects={projects} my={2}>
          {projects.map((project) => (
            <Grid item xs={12} md={6} key={project.title}>
              <ProjectCard key={project.id} project={project} />
            </Grid>
          ))}
        </Grid>
        <Button
          variant='outlined'
          href='/portfolio'
          endIcon={<ArrowForwardIcon />}
          disabled
        >
          See more projects
        </Button>
      </Container>

      <Container id='contact' maxWidth='sm' sx={{ marginBlock: '5rem' }}>
        <Typography variant='h2' gutterBottom>
          Contact
        </Typography>
        <Typography paragraph gutterBottom>
          Please feel free to reach out to me with any questions or inquiries.
        </Typography>
        <ContactForm />
      </Container>
    </>
  );
};

export default HomePage;
