import studio from "@theatre/studio";
import extension from "@theatre/r3f/dist/extension";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./main.css";


// studio.extend(extension);
// studio.initialize();


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);