import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Userdashboard from "./components/Userdashboard";
import LandingPage from "./components/landingpage/LandingPage";

function App() {
  return (
    <>
      <Provider store={store}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LandingPage />} />
            </Routes>
            <Userdashboard/>
          </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
