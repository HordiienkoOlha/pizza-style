import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(74,20,140,0.69)",
    },
    secondary: {
      main: "rgb(255, 111, 0)",
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
      xs: 0,
      sm: 320,
      md: 768,
      lg: 1280,
    },
  },
});

export default theme;
