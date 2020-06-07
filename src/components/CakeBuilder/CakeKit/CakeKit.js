import React from "react";
import Cake from "./Cake/Cake";
import classes from "./CakeKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Cake key={ingredient + i} type={ingredient} />);
    }
  });

  return (
    <div className={classes.CakeKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>{price.toFixed(2)} som</div>
    </div>
  );
};
