import { useEffect } from "react";
import { ThemeProvider, createTheme, Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

import './styles/App.css';
import { IThemeState } from "./types/IThemeState";
import { useAppDispatch, useAppSelector } from "./hooks/reduxHooks";
import { RootState } from "./redux/store";
import AppRouter from "./AppRouter";

function App() {
  const dispatch = useAppDispatch();
  const themes: IThemeState = useAppSelector(
    (state: RootState) => state.themes
  );
  const theme: Theme = createTheme({
    palette: {
      ...(themes.mode === "light" ? themes.light : themes.dark),
    },
  });
  return (
    <div className="App">
    <ThemeProvider theme={theme}>
        <Box
          sx={{
            bgcolor: "background.default",
            height: "100%",
          }}
        >
          <AppRouter />
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default App;
