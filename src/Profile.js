import React from 'react';
import "./Profile.css";
import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';

export default function Profile() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <div className='person'>
        <PersonIcon />
        </div>

      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My Profile</MenuItem>
        <MenuItem onClick={handleClose}>Messages</MenuItem>
        <MenuItem onClick={handleClose}>Saved for later</MenuItem>
        <MenuItem onClick={handleClose}>Your Bookings</MenuItem>
        <MenuItem onClick={handleClose}>Owner Profile</MenuItem>
        <MenuItem onClick={handleClose}>Help</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
