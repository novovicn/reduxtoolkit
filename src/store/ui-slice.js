import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    cartShown: false,
    notification: null,
  },
  reducers: {
    toggleCartVisibility(state) {
      state.cartShown = !state.cartShown;
    },
    showNotification(state, action) {
      if (action.payload) {
        state.notification = {
          status: action.payload.status,
          title: action.payload.title,
          message: action.payload.message,
        };
      }else{
         state.notification = action.payload; 
      }
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
