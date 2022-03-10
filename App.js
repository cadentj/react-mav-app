import * as React from 'react';
import HomeScreen from './views/Home';
import PagesScreen from './views/Pages';
import CalendarScreen from './views/Calendar';
import { View } from 'react-native';
import ButtonAppBar from './components/appbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import uploadTest from './components/FireBaseTest';

import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TabsRouter from './components/BottomNavigation';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const AppBar = ButtonAppBar();

const Tabs = TabsRouter();

export default function App() {

  const [value, setValue] = React.useState(0);

  return (

    <ThemeProvider theme={theme}>
      {AppBar}
      {Tabs}
    </ThemeProvider>

  );
}

