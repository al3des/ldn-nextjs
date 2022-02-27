import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5D8F",
    },
  },
  typography: {
    fontFamily: "Kanit, sans-serif",

    h4: {
      border: 1,
      borderRadius: 20,
      padding: 30,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
