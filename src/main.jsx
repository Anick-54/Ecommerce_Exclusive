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
import { FavariteProducts } from './Pages/FavariteProducts';
import { ProductDetails } from './Pages/ProductDetails';
import { Cart } from './Pages/Cart';



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
      { path: "favariteproducts", Component: FavariteProducts  },
      { path: "productdetails/:id", Component: ProductDetails  },
      { path: "cart", Component: Cart },
      
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

