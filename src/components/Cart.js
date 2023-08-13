import React from 'react';
import { useStateValue } from '../ContextAPI/StateProvider';
import CartProduct from './CartProduct';
import Subtotal from './Subtotal';
import { useNavigate } from 'react-router-dom';
import classes from "../stylesheets/Cart.module.css";

const Cart = () => {
  const [{cart}] = useStateValue();
  

  return (
    <div className={classes.cart}>

      <div className={classes.cart_left}>
        <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/9328952d4685c479.jpg?q=20" alt="The add banner" />
        <div>
          <h3 className={classes.cart_title}>Your Shopping Cart</h3>
          {cart?.map((item) => (
            <CartProduct 
            id={item.id}
            title={item.title}
            price={item.price}
            rating={item.rating}
            image={item.image}
            />
          ))}
        </div>
      </div>

      <div className={classes.cart_right}>
        <Subtotal />
      </div>

    </div>
  )
}

export default Cart;
