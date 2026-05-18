import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { RootLayOut } from './RootLayOut';
import { Home } from './Pages/Home';





const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
    ],
  },
]);

const root = document.getElementById("root");
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>,
  </StrictMode>,
)
