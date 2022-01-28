import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  const toggleCartHandler = () => {
    dispatch(uiActions.toggleCartVisibility())
  }

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cart.items.length}</span>
    </button>
  );
};

export default CartButton;
