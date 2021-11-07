import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import Products from "./components/AllProducts";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <Navbar />
      <div>Oyuncak</div>;
      <Products />
    </ThemeProvider>
  );
};

export default App;
