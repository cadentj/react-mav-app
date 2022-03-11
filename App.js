import * as React from "react";
import HomeScreen from "./views/Home";
import PagesScreen from "./views/Pages";
import CalendarScreen from "./views/Calendar";
import ButtonAppBar from "./components/AppBar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { NativeRouter, Routes, Route } from "react-router-native";
import SimpleBottomNavigation from "./components/BottomNavigator";

const theme = createTheme({
  palette: {
    mode: "dark"
  },
  spacing: 40
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NativeRouter>
        <ButtonAppBar />

        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="Pages" element={<PagesScreen />} />
          <Route path="Calendar" element={<CalendarScreen />} />
        </Routes>
        <SimpleBottomNavigation />
      </NativeRouter>
    </ThemeProvider>
  );
}
