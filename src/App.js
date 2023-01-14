import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Editprofile from "./components/Editprofile";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/editprofile" element={<Editprofile/>} />
          </Routes>
          <Routes>
            <Route path="/settings" element={<Settings/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
