import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";

export const ColorModeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

const themeObj = {
  light: {
    background: {
      default: "#EEEEEE",
    },
    primary: {
      main: "#EEEEEE",
    },
    secondary: {
      main: "#0A1929",
    },
  },

  dark: {
    background: {
      default: "#0A1929",
    },
    primary: {
      main: "#0A1929",
    },
    secondary: {
      main: "#0CF25D",
    },
  },
};

export const ColorContextProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark")),
      mode,
    }),
    [mode]
  );

  const theme = createTheme({
    palette: {
      mode: mode,
      ...themeObj[mode],
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};
