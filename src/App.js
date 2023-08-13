import React, { useEffect } from "react";
//Importing Components
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebaseConfig/firebase";
import { useStateValue } from "./ContextAPI/StateProvider";
import classes from "./App.css";

const App = () => {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("User : ", authUser);
      if (authUser) {
        dispatch({
          type : 'SET_USER',
          user : authUser
        });
      } else {
        dispatch({
          type : 'SET_USER',
          user : null
        });
      }

    })
  }, [dispatch]);


  return (
    <Router>
      <div className={classes.app}>
        <Header />
        <Routes>
          <Route exact path="/" Component={Home} />
        </Routes>
        <Routes>
          <Route exact path="/cart" Component={Cart} />
        </Routes>
        <Routes>
          <Route path="/login" Component={Login} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
