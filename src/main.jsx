import React from "react";
import App from "./App.jsx";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import ThemeProvider from "./components/ThemeProvider/ThemeProvider.jsx";
import LocaleProvider from "./components/LocaleProvider/LocaleProvider.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LocaleProvider>
          <App />
        </LocaleProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
