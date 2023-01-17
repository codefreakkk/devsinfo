import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Editprofile from "./components/Editprofile";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";
import ContactPage from "./components/ContactPage";
import Themes from "./components/Themes";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <>
      <Provider store={store}>
      <div style={{ display: "flex" }}>
        <BrowserRouter>
          <Sidebar />
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
            <Route path="/themes" element={<Themes/>} />
          </Routes>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      </Provider>
    </>
  );
}

export default App;
