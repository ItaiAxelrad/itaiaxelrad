import NextLink from 'next/link';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import GitHubIcon from '@mui/icons-material/GitHub';

const pages = [
  { title: 'About', link: '/about' },
  { title: 'Portfolio', link: '/#portfolio' },
  { title: 'Contact', link: '/#contact' },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position='static'
      elevation={0}
      sx={{ bgcolor: 'transparent', border: 'none', color: 'inherit' }}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <NextLink href='/' passHref>
            <Link underline='none' color='inherit'>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{ mx: 2, display: { xs: 'none', md: 'flex' } }}
              >
                itai axelrad
              </Typography>
            </Link>
          </NextLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleOpenNavMenu}
              color='inherit'
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <NextLink
                    href={page.link}
                    key={page.title}
                    onClick={handleCloseNavMenu}
                    passHref
                  >
                    <Typography textAlign='center' color='inherit'>
                      {page.title}
                    </Typography>
                  </NextLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <NextLink href='/' passHref>
              <Link underline='none' color='inherit'>
                <Typography variant='h6' noWrap component='div'>
                  itai axelrad
                </Typography>
              </Link>
            </NextLink>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <NextLink
                href={page.link}
                key={page.title}
                onClick={handleCloseNavMenu}
                passHref
              >
                <Button sx={{ my: 2, color: 'inherit', display: 'block' }}>
                  {page.title}
                </Button>
              </NextLink>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton href='https://github.com/ItaiAxelrad'>
              <GitHubIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
