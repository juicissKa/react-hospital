import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import React, { ReactNode } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const theme = createTheme({
  palette: {
    primary: {
      main: "#e91e63",
      light: "#fce4ec",
      contrastText: "white",
    },
  },
});

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
