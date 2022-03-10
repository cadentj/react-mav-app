import * as React from 'react';
import HomeScreen from './views/Home';
import PagesScreen from './views/Pages';
import CalendarScreen from './views/Calendar';
import { View } from 'react-native';
import ButtonAppBar from './components/appbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

import TabsRouter from './components/BottomNavigator';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App() {

  const [value, setValue] = React.useState(0);
  
  const AppBar = ButtonAppBar();
  const BottomNav = TabsRouter();

  return (

    <ThemeProvider theme={theme}>
      {AppBar}
      <Box>{BottomNav}</Box>
    </ThemeProvider>

  );
}

