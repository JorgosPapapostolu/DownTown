import { ThemeProvider, createTheme } from "@mui/material";
import { createContext, useState, useMemo } from "react";

export const FontSizeContext = createContext({
  toggleFontsize: () => {},
  fontSizeValue: 16,
});

export const FontSizeProvider = ({ children }) => {
  const [fontSizeValue, setFontSizeValue] = useState(16);

  const fontMode = useMemo(
    (e) => ({
      toggleFontsize: (e) => setFontSizeValue(parseInt(e.currentTarget.value)),
      fontSizeValue,
    }),
    [fontSizeValue]
  );

  const fontTheme = (theme) =>
    createTheme({
      ...theme,
      typography: {
        fontSize: fontSizeValue,
      },
    });

  return (
    <FontSizeContext.Provider value={fontMode}>
      <ThemeProvider theme={fontTheme}>{children}</ThemeProvider>
    </FontSizeContext.Provider>
  );
};
