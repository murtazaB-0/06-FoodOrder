import React, { Fragment } from "react";
import "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";

import mealsImage from "../../assets/mealsPicture.jpg";
import classes from "./Header.module.css"

const Header = (props) => {

  const showCartHandler= () =>{
    props.onShowCart()
  }

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={showCartHandler} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
