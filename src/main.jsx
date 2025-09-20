import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import HomePage from "./Pages/HomePage.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <HomePage />
  </>
);
