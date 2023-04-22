import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routers/root";
import ErrorPage from 'routers/error-page';
import QRcodeGenerate from 'layout/qrcode';
import Home from 'layout/home';
import CV from 'layout/cv';

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/qr",
      element: <QRcodeGenerate />
    },
    {
      path: "/cv",
      element: <CV />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
export default MainRouter;