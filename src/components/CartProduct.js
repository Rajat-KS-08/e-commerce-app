import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import classes from "../stylesheets/Cart.module.css";

const CartProduct = (props) => {
  const [{ cart }, dispatch] = useStateValue();

  //remove item from cart
  const removeItemFromCart = () => {
    dispatch({
        type : 'REMOVE_ITEM_FROM_CART',
        id : props.id
    });
  }

  return (
    <div className={classes.cartProduct}>
      <img src={props.image} alt="product" />
      <div className={classes.cartProduct_info}>
        <p className={classes.cartProduct_title}>{props.title}</p>
        <p className={classes.cartProduct_price}>
          {" "}
          <small>₹</small> <strong>{props.price}</strong>{" "}
        </p>
        <div className={classes.cartProduct_rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>♥</p>
            ))}
        </div>
        <button onClick={removeItemFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default CartProduct;
