import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(74,20,140,0.69)",
    },
    secondary: {
      main: "rgba(255, 111, 0, 0)",
    },
  },
  typography: {
    fontFamily: "Montserrat",
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      laptop: 1280,
    },
  },
});

export default theme;
