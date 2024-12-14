import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { StrictMode } from "react";
import App from "./App";
import { UserProvider } from "./context/UserContext";
// import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <Router>
        <App />
      </Router>
    </UserProvider>
  </StrictMode>
);
