import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './Header.scss';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className='header__container'>
        <Typography variant="h6" component="div" className='header_title'>
          Poke React
        </Typography>
      </AppBar>
    </Box>
  );
}