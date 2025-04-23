import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";
import "./assets/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container m-auto">
      <App />
    </div>
  </StrictMode>
);
