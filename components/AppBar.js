import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { View } from 'react-native';

import SwipeableTemporaryDrawer from './Drawer';

export default function ButtonAppBar() {
  return (
    <AppBar  position="sticky" >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <SwipeableTemporaryDrawer/>
        </Toolbar>
      </AppBar>
  );
}