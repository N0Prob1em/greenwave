import { useState } from 'react';
import './Navbar.css';
import logo from '../../assets/images/logo-no-background.png';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../Authentication/LoginButton';
import UserProfile from '../Authentication/UserProfile';
import { useAuth0 } from "@auth0/auth0-react";


const StyledAppBar = styled(AppBar)`
  background-color: #333333;
`;

const Navbar = () => {
  const { isAuthenticated } = useAuth0();

  const destinationLoggedIn = ['', 'products', 'about', 'add', 'contactus'];
  const pagesLoggedIn = ['home', 'all products', 'about us', 'add product', 'Contact Us'];

  const destinationLoggedOut = ['', 'products', 'about', 'contactus']
  const pagesLoggedOut = ['home', 'all products', 'about us', 'Contact Us'];

  const destination = isAuthenticated ? destinationLoggedIn : destinationLoggedOut;
  const pages = isAuthenticated ? pagesLoggedIn : pagesLoggedOut;

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <StyledAppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Link to={`/`}>
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <img className='h-16 py-2' src={logo} alt="" />
              </Typography>
            </Link>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
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
                {destination.map((dest, i) => (
                  <MenuItem key={dest} onClick={handleCloseNavMenu}>
                    <Link to={`/${dest}`}><Typography textAlign="center">{pages[i]}</Typography></Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <img className='h-16 py-4' src={logo} alt="" />

            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {destination.map((dest, i) => (
                <Link to={`/${dest}`} key={dest}>
                  <Button
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {pages[i]}
                  </Button>
                </Link>
              ))}
            </Box>
            <div>
              {isAuthenticated && (<UserProfile />)}
              {!isAuthenticated && (
                <>
                  <LoginButton />
                </>
              )}
            </div>
          </Toolbar>
        </Container>
      </StyledAppBar>
    </>
  )
}

export default Navbar;
