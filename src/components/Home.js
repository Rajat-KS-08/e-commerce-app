import React from "react";
import Product from "./Product";
import banner from "../assets/Ecommerce-Banner-1920.jpg";
import classes from "../stylesheets/Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.home_container}>
        <img className={classes.banner} src={banner} alt="banner" />
        <div className={classes.home_row}>
          <Product
            title="Apple iPhone 12 (256GB) - Blue"
            id="AB123001"
            price={66999}
            image="https://m.media-amazon.com/images/I/71ZOtNdaZCL._SX679_.jpg"
            rating={5}
          />
          <Product
            title="Men's Dazzler Sneakers"
            id="AB123091"
            price={3570}
            image="https://m.media-amazon.com/images/I/713UmakQhoL._AC_UL600_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className={classes.home_row}>
          <Product
            title="Bajaj Ktc 1.8L Dlx Electric Kettle, Black"
            id="QB123673"
            price={765}
            image="https://m.media-amazon.com/images/I/7157o0+fPQL._AC_UL600_FMwebp_QL65_.jpg"
            rating={4}
          />

          <Product
            title="Atomic Habits"
            id="LX793004"
            price={389}
            image="https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UY327_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            title="ELEGANTE Unisex Adult Square Non-Polarization Sunglasses"
            id="BN228658"
            price={649}
            image="https://m.media-amazon.com/images/I/41dFq2Y3ScL._AC_UL600_FMwebp_QL65_.jpg"
            rating={3}
          />
        </div>
        <div className={classes.home_row}>
          <Product
            title="Samsung 108 cm (43 inches) Crystal iSmart 4K Ultra HD Smart LED TV UA43CUE60AKLXL (Black)"
            id="VQ923810"
            price={28990}
            image="https://m.media-amazon.com/images/I/81+JXgPUDLL._SX679_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
