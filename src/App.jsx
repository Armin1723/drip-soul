import "./index.css";
import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import { images } from "./utils";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Captcha from "./pages/Captcha";

const App = () => {
  useEffect(() => {
    images.map((image) => {
      const img = new Image();
      img.src = `images/${image.src}`;
    });
  });
  return (
    <BrowserRouter>
      <div className="flex flex-col overflow-x-hidden">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/captcha" element={<Captcha />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
