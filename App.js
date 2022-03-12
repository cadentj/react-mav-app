import * as React from 'react';
import HomeScreen from './views/Home';
import PagesScreen from './views/Pages';
import CalendarScreen from './views/Calendar';
import ButtonAppBar from './components/appbar';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { NativeRouter, Routes, Route } from "react-router-native";
import SimpleBottomNavigation from './components/BottomNavigator';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {

  return (
    <ThemeProvider theme={theme}>
      <NativeRouter>
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<CalendarScreen />} />
          <Route path="Pages" element={<PagesScreen />} />
          <Route path="Calendar" element={<HomeScreen />} />
        </Routes>
        <SimpleBottomNavigation />
      </NativeRouter>
    </ThemeProvider>


  );
}

