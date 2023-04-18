import React from 'react';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routers/root";
import ErrorPage from 'routers/error-page';
import QRcodeGenerate from 'layout/qrcode';

const MainRouter = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/qr",
      element: <QRcodeGenerate />
    }
  ]);
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}
export default MainRouter;