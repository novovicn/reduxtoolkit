import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './store/cart-actions';

function App() {
  const cart = useSelector((state) => state.cart.items);
  const notification = useSelector((state) => state.ui.notification);

  const cartShown = useSelector((state) => state.ui.cartShown);
  const dispatch = useDispatch();

  //let isInitial = true;

  useEffect(() => { 
    dispatch(fetchCartData());
  }, [dispatch])

    
  useEffect(() => {
      dispatch(sendCartData(cart));
  }, [dispatch, cart]);

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {cartShown && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
