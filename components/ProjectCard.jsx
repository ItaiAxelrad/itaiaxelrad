import NextLink from 'next/link';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ProjectCard = ({ project }) => {
  return (
    <Card variant='outlined'>
      <CardHeader title={project.title} />
      <CardMedia
        component='img'
        height='200'
        image={project.image}
        alt={project.title}
      />
      <CardContent>
        <Typography variant='body1' color='text.secondary'>
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <NextLink href={project.link} passHref>
          <Button size='small'>Learn More</Button>
        </NextLink>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;
