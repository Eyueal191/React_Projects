// src/main.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Only import Mirage JS in development mode
if (process.env.NODE_ENV === "development") {
  import("./server/server").then(() => {
    console.log("Mirage server is running in development mode...");
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
