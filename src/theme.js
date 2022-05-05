import { createTheme, responsiveFontSizes } from "@mui/material/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FF5D8F",
    },
    secondary: {
      main: '#652EC7'
    },
    background: {
      default: '#050021',
      paper: '#120052'
    },
    aqua: {
      main: '#00C2BA'
    }
  },
  typography: {
    fontFamily: "Kanit, sans-serif",

    h4: {
      border: 1,
      borderRadius: 20,
      padding: 30,
    },
    h6: {

      fontFamily: `'Fredoka One', sans-serif`
    }
  },
});


theme = responsiveFontSizes(theme);

export default theme;