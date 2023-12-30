import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { createData } from "./data.js";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    action: createData(),
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
