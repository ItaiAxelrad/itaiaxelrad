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
        <Typography variant='h1' gutterBottom>
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
                I have been taking things apart and putting things together for
                as long as I can remember.
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
                This curiosity and interest initially led me to pursue a
                bachelor&apos;s degree in Civil Engineering at the California
                Polytechnic State University (Cal Poly) in San Luis Obispo. Cal
                Poly provided me with a comprehensive understanding of the
                fundamentals of engineering along with an introduction into the
                world of programming.
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
                In my first years in practice, I continually found myself
                reaching for programming when problem solving - creating tools
                to automate fee schedules, fetch and display data.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2017
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                I later pursued a master&apos;s degree in Water Resources and
                Environmental engineering at University of California in Los
                Angeles (UCLA). Throughout the program I utilized Fortran,
                Matlab, R, and Python to complete complex engineering problems
                and large scale data analysis.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2018
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <SchoolRoundedIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                By the end of my master&apos;s program I had discovered and
                quickly fallen in love with programming - a perfect combination
                of creativity and technical understanding.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2019
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                While I continued my engineering career, all of my free time was
                spent programming. The last few years, I have worked on numerous
                web development projects as an obsessed hobbyist, in-house
                engineer, and as a freelance contractor.
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent color='text.secondary'>
                2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color='primary'>
                  <QuestionMarkIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent>Who knows 🤷</TimelineContent>
            </TimelineItem>
          </Timeline>
        </Fade>
      </Container>
    </>
  );
};

export default About;
