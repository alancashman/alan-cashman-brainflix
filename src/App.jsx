import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import UploadPage from "./pages/UploadPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

import avatar from "./assets/images/Mohan-muruge.jpg";

function App() {
  return (
    <BrowserRouter>
      <Header avatar={avatar} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/videos" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
