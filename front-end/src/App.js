import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import CashBalance from "./pages/cash-balance";
import Deposit from "./pages/deposit";
import Extract from "./pages/extract";
import Login from "./pages/login";
import SignUp from "./pages/signup";
import Withdrawal from "./pages/withdrawal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CashBalance />,
  },
  {
    path: "/deposit",
    element: <Deposit />,
  },
  {
    path: "/extract",
    element: <Extract />,
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
    path: "/withdrawal",
    element: <Withdrawal />,
  },
]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
