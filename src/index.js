import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="439045852013-6df8dds8jh8pqtcd3su72bvvoo4v7h6e.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
