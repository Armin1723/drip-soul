import "./index.css";
import React, { useEffect } from "react";
import Homepage from "./pages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Captcha from "./pages/Captcha";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { images } from "./utils";
import Shop from "./pages/Shop";

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
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
