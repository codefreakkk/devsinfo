import React from "react";
import Home from "./Home";
import Editprofile from "./Editprofile";
import Settings from "./Settings";
import Sidebar from "./Sidebar";
import ContactPage from "./ContactPage";
import Themes from "./Themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Userdashboard() {
  return (
    <>
      {/* <Sidebar /> */}
      <Routes>
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
      <Routes>
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <Routes>
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Routes>
        <Route path="/themes" element={<Themes />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Home />} />
      </Routes>
    </>
  );
}

export default Userdashboard;
