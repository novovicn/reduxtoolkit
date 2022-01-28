import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cartItems = useSelector(state => state.cart.items);

  console.log(cartItems);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems.map(item => 
        <CartItem
          key={Math.random()}
          item={{ title: item.title, quantity: item.quantity, total: item.quantity * item.price, price: item.price }}
        />
        )}
      </ul>
    </Card>
  );
};

export default Cart;
