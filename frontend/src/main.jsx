import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import ContactPage from './pages/ContactPage.jsx';  // ✅ was AuthPage in components/
import Search from "./pages/Search.jsx";
import ShowPage from "./pages/ShowPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/contact' element={<ContactPage />} />  {/* ✅ was /auth */}
        <Route path="/search" element={<Search />} />
        <Route path="/show/:id" element={<ShowPage />} />
        {/* <Route path='/:user' element={<ProfilePage />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
