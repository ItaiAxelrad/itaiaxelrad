import Head from 'next/head';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import WorkIcon from '@mui/icons-material/Work';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Fade from '@mui/material/Fade';

const About = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <Container maxWidth='md' sx={{ marginBlock: '2rem' }}>
        <Typography variant='h1' gutterBottom align='center'>
          About
        </Typography>
        <Fade appear in timeout={500}>
          <Timeline position='alternate' sx={{ padding: '0' }}>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                1992
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <ChildCareIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='justify'>
                  I have been taking things apart and putting things together as
                  long as I can remember.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2010-2015
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='justify'>
                  This curiosity and interest initially led me to pursue a
                  bachelor&apos;s degree in civil engineering at the California
                  Polytechnic State University (Cal Poly) in San Luis Obispo.
                  Cal Poly provided me with a comprehensive understanding of the
                  fundamentals of engineering along with an introduction into
                  the world of programming.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2015-2017
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='justify'>
                  In my first years in practice, I continually found myself
                  reaching for programming when problem solving - creating tools
                  to automate fee schedules, cost estimates, and display data.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2017-2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='justify'>
                  I later pursued a master&apos;s degree in water resources and
                  environmental engineering at the University of California in
                  Los Angeles (UCLA). Throughout the program I utilized Fortran,
                  Matlab, R, and Python to complete complex engineering problems
                  and large scale data analysis.
                </Typography>
                <Typography paragraph align='justify'>
                  By the end of my master&apos;s program I had discovered and
                  quickly fallen in love with web development - a perfect
                  combination of creative and technical material.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2018-2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='justify'>
                  While I continued my engineering career after graduation, a
                  majority of my free time was spent programming. The last few
                  years, I have worked on numerous web development projects as
                  an obsessed hobbyist, in-house engineer, and freelance
                  contractor.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2023-beyond
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <QuestionMarkIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>
                <Typography paragraph align='right'>
                  Who knows 🤷
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </Fade>
      </Container>
    </>
  );
};

export default About;
