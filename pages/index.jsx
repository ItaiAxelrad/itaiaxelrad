import NextLink from 'next/link';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Flatirons } from '@components/Models';
import styles from '@styles/styles.module.css';

const HomePage = () => {
  return (
    <Container maxWidth='md' sx={{ paddingBlock: '2.5rem' }} id='about'>
      <Typography variant='h1' gutterBottom sx={{ lineHeight: '1.4' }}>
        Hi there <span className={styles.wave}>👋</span>
      </Typography>

      <Typography
        variant='subtitle1'
        gutterBottom
        sx={{ maxWidth: '38ch', pb: 1 }}
      >
        I&apos;m a water resources & environmental engineer with a programming
        problem.
      </Typography>
      <Typography
        variant='subtitle2'
        gutterBottom
        sx={{ maxWidth: '55ch', pb: 2 }}
      >
        I have been building things my whole life. You can find me working on my
        latest projects in Boulder or climbing in the surrounding mountains ⤵
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
          <Suspense fallback={null}>
            <directionalLight intensity={0.25} />
            <ambientLight intensity={0.25} />
            <Flatirons />
            <Environment preset='sunset' />
            <OrbitControls />
          </Suspense>
        </Canvas>
      </Box>
    </Container>
  );
};

export default HomePage;
