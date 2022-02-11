import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#111",
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
