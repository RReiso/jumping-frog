import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#c5e1a5",
    },
    secondary: {
      main: "#bf360c",
    },
  },
  typography: {
    h5: {
      fontFamily: "Caveat",
      letterSpacing: "2px",
    },
  },
});

export default theme;
