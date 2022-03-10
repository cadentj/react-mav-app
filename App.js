import * as React from 'react';
import HomeScreen from './views/Home';
import PagesScreen from './views/Pages';
import CalendarScreen from './views/Calendar';
import ButtonAppBar from './components/appbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});



export default function App() {

  return (

    <ThemeProvider theme={theme}>
      <ButtonAppBar/>
      <HomeScreen/>
    </ThemeProvider>

  );
}

