import React, { useState } from "react";
import { auth } from "../firebaseConfig/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Avatar } from "@mui/material";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from "../stylesheets/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        toast.error('Invalid email or password', {
          position : toast.POSITION.TOP_CENTER
        });
        console.log(errorMessage);
      });
  };

  const register = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        //console.log(user);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => {
        //const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div className={classes.login}>
      <Avatar className={classes.avatar} sx={{ width: 75, height: 75 }}>
        <AccountCircleRoundedIcon className={classes.icon} />
      </Avatar>
      <div className={classes.login_container}>
        <h1>Sign In!</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className={classes.signin} type="submit" onClick={signIn}>
            Sign In
          </button>
          <ToastContainer />
        </form>

        <button className={classes.register} type="submit" onClick={register}>
          Don't have an Account? Create an Account
        </button>
      </div>
    </div>
  );
};

export default Login;
