import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Products from "./components/Products";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>Oyuncak</div>;
      <Products />
    </ThemeProvider>
  );
};

export default App;
