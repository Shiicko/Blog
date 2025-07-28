import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import GlobalStyles from "../GlobalStyles";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
      <GlobalStyles />
    </BrowserRouter>
  </StrictMode>
);
