

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const ProductSlice = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    ProductReducer: (state, action) => {
      state.value = action.payload
    },
  },
})

export const { ProductReducer } = ProductSlice.actions

export default ProductSlice.reducer