import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Welcome from "./components/Welcome";
import Start from "./components/Start";
import Loading from "./components/Loading";

const router = createBrowserRouter([
  {
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Start />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/loading",
        element: <Loading />,
      },
    ],
  },
  {
    path: "/welcome",
    element: <Welcome />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
