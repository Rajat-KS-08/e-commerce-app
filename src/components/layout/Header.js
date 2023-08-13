import React from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import classes from "../../stylesheets/Header.module.css";
import { Link} from "react-router-dom";
import { auth } from "../../firebaseConfig/firebase";

//Importing Icons
import PageviewRoundedIcon from "@mui/icons-material/PageviewRounded";
import ShoppingCartTwoToneIcon from "@mui/icons-material/ShoppingCartTwoTone";

const Header = () => {
  const [{ cart, user }] = useStateValue();
  

  const handleAuthenticaton = () => {
    //signout 
    if (user) {
      auth.signOut();
    }
  }

  

  return (
    <div className={classes.header}>
      <div className={classes.header_logo}>
        <Link to="/">
          {" "}
          <img src="https://tse1.mm.bing.net/th?id=OIP.d9ORHJIpDpP7WXH0v-a9lgHaCW&pid=Api&P=0&h=180" alt="Logo" />{" "}
        </Link>
      </div>

      <div className={classes.header_search}>
        <input type="text" />
        <PageviewRoundedIcon className={classes.search_icon} />
      </div>

      <div className={classes.header_nav}>
        <Link to={ !user && "/login"}>
          <div onClick={handleAuthenticaton} className={classes.header_navItems}>
            <span className={classes.itemOne}>Hello! {!user ? 'Guest' : user.email} </span>
            <span className={classes.itemTwo}> {user ? "Sign Out" : "Sign in" } </span>
          </div>
        </Link>

        <Link to="/cart">
          <div className={classes.header_orderCount}>
            <ShoppingCartTwoToneIcon />
            <span className>{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
