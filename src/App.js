import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Userdashboard from "./components/Userdashboard";
import LandingPage from "./components/landingpage/LandingPage";
import Login from "./components/landingpage/Login";
import Signup from "./components/landingpage/Signup";
import Enterdetails from "./components/landingpage/Enterdetails";

function App() {
  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
            <Routes>
              <Route path="/login" element={<Login/>} />
            </Routes>
            <Routes>
              <Route path="/signup" element={<Signup />} />
            </Routes>
            <Routes>
              <Route path="/welcome" element={<Enterdetails />} />
            </Routes>
            <Userdashboard/>
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
