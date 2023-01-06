import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import ContactForm from '@components/ContactForm';
import Fade from '@mui/material/Fade';

function ContactPage() {
  return (
    <Fade appear in timeout={500}>
      <Container id='contact' maxWidth='sm' sx={{ marginBlock: '5rem' }}>
        <Typography variant='h2' gutterBottom>
          Contact
        </Typography>
        <Typography paragraph gutterBottom>
          Please feel free to reach out to me with any questions or inquiries.
        </Typography>
        <ContactForm />
      </Container>
    </Fade>
  );
}

export default ContactPage;
