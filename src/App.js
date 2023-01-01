import React from "react";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div style={{display: "flex"}}>
        <Sidebar />
        <Home/>
      </div>
    </>
  );
}

export default App;
