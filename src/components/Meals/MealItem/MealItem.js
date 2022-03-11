import React, { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);
  const { id, name } = props.meal;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id,
      name,
      amount,
      price: props.meal.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
