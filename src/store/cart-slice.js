import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    replaceCart(state, action){
      console.log('payload =>', action.payload)
      state.items = action.payload;
    },
    addItem(state, action) {
      const newItem = action.payload;
      const itemInCart = state.items.find(
        (item) => item.title === newItem.title
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.items.push(newItem);
      }
    },
    changeQuantity(state, action) {
      const itemInCart = state.items.find(
        (item) => item.title === action.payload.title
      );
      if (action.payload.type === '+') {
        itemInCart.quantity++;
      } else if (action.payload.type === '-') {
        itemInCart.quantity--;
        if (itemInCart.quantity < 1) {
          state.items = state.items.filter(
            (item) => item.title !== itemInCart.title
          );
        }
      }
    },
  },
});



export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
