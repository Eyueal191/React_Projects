// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./MirageServer/server";

// Check if the app is running in development mode
if (process.env.NODE_ENV === "development") {
  makeServer(); // Start MirageJS server only in development
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
