import * as React from 'react';
import ScheduleScreen from './views/Schedule';
import ResourcesScreen from './views/Resources';
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
          <Route path="Schedule" element={<ScheduleScreen />} />
          <Route path="/" element={<CalendarScreen />} />
          <Route path="Resources" element={<ResourcesScreen />} />
        </Routes>
        <SimpleBottomNavigation />
      </NativeRouter>
    </ThemeProvider>


  );
}

