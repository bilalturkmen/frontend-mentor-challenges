import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FooterComp } from "./components";
import "./index-min.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <FooterComp />
  </React.StrictMode>
);
