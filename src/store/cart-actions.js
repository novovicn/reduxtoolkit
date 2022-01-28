import { cartActions } from './cart-slice';
import { uiActions } from './ui-slice';


export const fetchCartData = () => {
  return async dispatch => {
    try {
      const response = await fetch('/cart');
      if (!response.ok) {
        throw new Error('Fetching data failed!');
      }
      const data = await response.json();
      console.log('data fetched =>', data);
      const cartData = data.cart || []
      dispatch(cartActions.replaceCart(cartData));
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: error.message,
        })
      );
    }
  }
}

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data...',
      })
    );
    try {
      const response = await fetch('/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cart),
      });

      if (!response.ok) {
        throw new Error('Sending data failed!');
      }
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Sent!',
          message: 'Data sent sucessfully!',
        })
      );
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: err.message,
        })
      );
    }
  };
};
