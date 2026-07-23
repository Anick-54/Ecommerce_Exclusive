import { configureStore } from '@reduxjs/toolkit'
import productReducer from './Slices/ProductSlice'
import CartReducer from './Cart/CartSlice'

export const store = configureStore({
  reducer: {
    cart: CartReducer,
    allProducts: productReducer,
    
  },
})