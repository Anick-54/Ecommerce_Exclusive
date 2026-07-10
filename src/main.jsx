import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RootLayOut } from './RootLayOut';
import { Home } from './Pages/Home';
import {About} from './Pages/About';
import { Shop } from './Pages/Shop';
import { Provider } from 'react-redux'
import { store } from './store';
import { Contact } from './Pages/Contact'
import { SingUp } from './Pages/SingUp';



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayOut,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "shop", Component: Shop },
      { path: "contact", Component: Contact },
      { path: "singup", Component: SingUp  },
      
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
)

