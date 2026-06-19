import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayOut } from './RootLayOut';
import { Home } from './Pages/Home';
import {About} from './Pages/About';
import { Shop } from './Pages/Shop';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

