import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function ContactForm() {
  return (
    <Box component='form' data-netlify='true' netlify-honeypot='bot-field'>
      <div hidden aria-hidden='true'>
        <label>
          Do not fill this out if you are human:
          <input name='bot-field' />
        </label>
      </div>
      <Stack spacing={2}>
        <TextField
          id='outlined-basic'
          label='Email'
          variant='outlined'
          placeholder='your@email.com'
          fullWidth
        />
        <TextField
          id='outlined-basic'
          label='Message'
          variant='outlined'
          placeholder='Hello world'
          minRows={2}
          multiline
          fullWidth
        />
        <Button variant='contained' fullWidth endIcon={<SendIcon />}>
          Send
        </Button>
      </Stack>
    </Box>
  );
}
