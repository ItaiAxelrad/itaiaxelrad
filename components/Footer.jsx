import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ display: 'flex', p: 2 }}
      justifyContent='center'
    >
      &copy; Itai Axelrad
    </Box>
  );
};

export default Footer;
