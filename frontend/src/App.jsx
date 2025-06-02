import { useState } from "react";

import "./css/App.css";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import PopUp from "./pages/PopUp";
import ComicDetail from "./pages/ComicDetail";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PopUp" element={<PopUp />} />
        <Route path="/comics/:id" element={<ComicDetail />} />
      </Routes>
    </main>
  );
}

export default App;
