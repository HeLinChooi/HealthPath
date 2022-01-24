import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { TransactionsProvider } from "./pages/context/TransactionContext";
import { NotificationProvider } from "./pages/context/NotificationContext";

ReactDOM.render(
  <TransactionsProvider>
    <NotificationProvider>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <Router>
            <App />
          </Router>
        </ThemeProvider>
      </React.StrictMode>
    </NotificationProvider>
    ,
  </TransactionsProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
