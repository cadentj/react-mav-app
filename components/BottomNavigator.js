import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {Link as RouterLink} from 'react-router-dom';

const styles = {
  stickToBottom: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
};

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(1);

  return (
    <Box position="fixed" style={{bottom: 0, width:'100%'}}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Schedule" icon={<RestoreIcon />} component={RouterLink} to='Schedule'/>
        <BottomNavigationAction label="Calendar" icon={<LocationOnIcon />} component={RouterLink} to='/'/>
        <BottomNavigationAction label="Resources" icon={<FavoriteIcon />} component={RouterLink} to='Resources'/>
       </BottomNavigation>
    </Box>
  );
}
