import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { Link } from 'react-router-dom';

const UserMenu = () => {
  const { user, isLoading } = useAuth0();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const destination = ['', 'products', 'logout']
  const settings = ['Profile', 'Dashboard', 'Logout'];

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
      <div className="flex items-center space-x-4">
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <img className="w-10 h-10 rounded-full" src={user?.picture} alt={user?.name} />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {destination.map((dest, i) => (
              <MenuItem key={dest} onClick={handleCloseUserMenu}>
                <Link to={`/${dest}`}><Typography textAlign="center" >{settings[i]}</Typography></Link>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <div className="font-medium dark:text-white">
          <div>{user?.name}</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</div>
        </div>
      </div>
    </div>
  );
};

export default UserMenu;