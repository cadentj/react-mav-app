import * as React from 'react';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DraftsIcon from '@mui/icons-material/Drafts';

import { styled } from '@mui/material/styles';

export default function createCarrierList() {
    const data = [{period:'a'},{period:'b'},{period:'c'},{period:'d'},{period:'e'},{period:'f'},{period:'g'},{period:'h'},{period:'i'}];
    const carriersList = data.map((carrier) => createTile(carrier.period, carrier.period));
    return (
      <List>
        {carriersList}
      </List>
    );
  }
  
  function createTile(key,carrier) {
    const ScheduleTile = styled((props) => <ListItem {...props} />)(({ theme }) => ({
      textTransform: 'none',
      minWidth: 0,
      minHeight: 30,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
        maxWidth: '20%',
      },
      fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(1),
      color: 'rgba(0, 0, 0, 0.85)',
      '&:hover': {
        color: '#40a9ff',
        opacity: 1,
      },
      '&.Mui-selected': {
        color: '#1890ff',
        fontWeight: theme.typography.fontWeightMedium,
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#d1eaff',
      },
    }));
  
    return (
      <ScheduleTile disablePadding key={key}>
        <ListItemButton>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary={carrier} />
        </ListItemButton>
      </ScheduleTile>
    );
  }