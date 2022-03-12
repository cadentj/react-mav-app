import * as React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PersonPinIcon from '@mui/icons-material/PersonPin';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

import { styled } from '@mui/material/styles';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children }
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const AntTab = styled((props) => <Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  maxWidth: '20%',
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

export default function Schedule() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const dayOne = createCarrierList();

  return (
    <Box sx={{ bgcolor: 'background.paper', height:'100%'}}>
      <AppBar position="sticky">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <AntTab icon={<PersonPinIcon />} {...a11yProps(0)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(1)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(2)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(0)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(1)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(2)} />
          <AntTab icon={<PersonPinIcon />}{...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          {dayOne}
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}

function createCarrierList() {
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