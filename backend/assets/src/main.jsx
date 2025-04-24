import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import "./assets/main.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { HashRouter, Route, Routes } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="container m-auto">
      <HashRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </HashRouter>
    </div>
  </StrictMode>
);
