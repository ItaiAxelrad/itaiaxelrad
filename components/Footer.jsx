import Image from 'next/image';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

const Footer = () => {
  return (
    <Box
      component='footer'
      sx={{ display: 'flex', p: 2 }}
      justifyContent='center'
    >
      <Link
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
        color='inherit'
        underline='hover'
      >
        Powered by{' '}
        <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
      </Link>
    </Box>
  );
};

export default Footer;
