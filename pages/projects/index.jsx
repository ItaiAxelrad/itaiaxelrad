import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ProjectCard from '@components/ProjectCard';
import Fade from '@mui/material/Fade';
import { projects } from '@lib/projects';

function ProjectsPage() {
  return (
    <Fade appear in timeout={500}>
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
    </Fade>
  );
}

export default ProjectsPage;
