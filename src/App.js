import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/projects" element={<Projects/>} />
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
