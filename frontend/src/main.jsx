import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import DonatePage from "./pages/DonatePage.jsx";
import JoinPage from "./pages/JoinPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<DonatePage />} />
       <Route path="/join" element={<JoinPage />} />
         </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
