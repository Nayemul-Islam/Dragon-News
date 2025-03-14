import * as React from "react";
import * as ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./Component/Root";
import Home from "./Component/Home";
import Login from "./Component/Login";
import Register from "./Component/Register";
import NavBar from "./Component/NavBar";
import AuthProvider from "./Component/AuthProvider";
import NewsDetail from "./Component/NewsDetail";
import PrivateRoute from "./Component/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>  fetch("/news.json"),
      },
      {
        path :"/news/:id",
        element: <PrivateRoute><NewsDetail></NewsDetail></PrivateRoute> ,
        loader: () => fetch("/news.json")
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <NavBar />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
