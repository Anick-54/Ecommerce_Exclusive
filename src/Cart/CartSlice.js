import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const Cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    CartReducer: (state, action) => {
      const exisitingItem = state.items.find((item) => item.id === action.payload.id);
      if (exisitingItem) {
        exisitingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeReducer: (state, action) =>{
      state.items = state.items.filter((item)=> item.id ===action.payload.id)
    },
    updateReducer: (state, action) =>{
      const item = state.item.find((item)=> item.id === action.payload.id);
      if(item) {
        item.quantity = action.payload.quantity;
      }

    },
  },
})


export const {  CartReducer, removeReducer, updateReducer } = Cartslice.actions

export default Cartslice.reducer