import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { CssBaseline, createTheme } from "@mui/material";
import InterWoff2 from "./fonts/inter-v12-latin-regular.woff2";
import InterWoff from "./fonts/inter-v12-latin-regular.woff";
import InterTtf from "./fonts/inter-v12-latin-regular.ttf";
import InterEot from "./fonts/inter-v12-latin-regular.eot";
import InterSvg from "./fonts/inter-v12-latin-regular.svg";
import { ColorContextProvider } from "./store";
import { FontSizeProvider } from "./store/FontSize";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: "Inter, Arial",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src:local('Inter'), local('Inter-Regular'), url(${InterWoff2}) format('woff2');
          src:url(${InterEot}) format("embedded-opentype"),
          scr:url(${InterWoff}) format("woff"),
          scr:url(${InterTtf}) format("ttf"),
          scr:url(url(${InterSvg})) format("svg"),
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
});

root.render(
  // <React.StrictMode>
  <ColorContextProvider>
    <FontSizeProvider>
      <CssBaseline />
      <App />
    </FontSizeProvider>
  </ColorContextProvider>
  // </React.StrictMode>
);
