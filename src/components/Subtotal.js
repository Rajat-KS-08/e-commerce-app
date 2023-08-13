import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from "../ContextAPI/StateProvider";
import { getCartTotalAmount } from "../ContextAPI/reducer";
import classes from "../stylesheets/Cart.module.css";

const Subtotal = () => {

  const [{cart}, dispatch] = useStateValue();


  const displayMessage = () => {
    toast.success('Order placed successfully. Keep shopping with us.', {
      position: toast.POSITION.TOP_CENTER
    });

    dispatch({
      type : 'EMPTY_CART',
      cart : []
    });
  }
  

  return (
    <div className={classes.subtotal}>
      <p>Total Items  : <strong>{cart?.length}</strong></p>
      <p>Total amount : <strong> <small>₹</small> {getCartTotalAmount(cart)}</strong>  </p>
      <button className={classes.subtotal_btn} onClick={displayMessage} >Pay Now</button>
      <ToastContainer />
    </div>
  );
};

export default Subtotal;
