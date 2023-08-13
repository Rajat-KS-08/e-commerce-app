import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useStateValue } from "../ContextAPI/StateProvider";
import classes from "../stylesheets/Home.module.css";
import { Link } from "react-router-dom";

const Product = (props) => {

  const [{cart, user}, dispatch] = useStateValue();

  const cartHandler = () => {
    //dispatch the item into the data layer
    dispatch({
      type : 'ADD_TO_CART',
      item : {
        id : props.id,
        title : props.title,
        image : props.image,
        price : props.price,
        rating : props.rating
      }
    });
    toast.success('Product has been added to the cart', {
      position : toast.POSITION.BOTTOM_CENTER
    });
  }

  return (
    <div className={classes.product}>
      <div className={classes.product_info}>
        <p>{props.title}</p>
        <p>
          Price : <small>₹</small> <strong>{props.price}</strong>
        </p>
        <div className={classes.product_rating}>
          {Array(props.rating)
            .fill()
            .map((_, i) => (
              <p>♥</p>
            ))}
        </div>
      </div>
      <img
        src={props.image}
        alt="product img"
        className={classes.product_img}
      />
      { user ? (<div>
      <button onClick={cartHandler}>Add to cart</button>
      <ToastContainer />
      </div>
      ) : (
        <Link to="/login">
          <h1>Login first to add the product into the Cart</h1>
        </Link>
      )}
    </div>
  );
};

export default Product;
