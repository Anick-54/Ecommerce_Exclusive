import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const Cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    CartReducer: (state, action) => {
      const exisitingItem = state.items.find((item) =>item.id ===action.payload.id);
      if (exisitingItem) {
        exisitingItem.quantity += 1;
      }else{
        state.items.push({...action.payload, quantity: 1});
      }
    },
    
  },
})


export const {  CartReducer } = Cartslice.actions

export default Cartslice.reducer