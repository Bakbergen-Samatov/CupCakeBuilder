import React from "react";
import classes from "./CakeControls.module.css";
import CakeControl from "./CakeControl/CakeControl";
import Button from "../../UI/Button/Button";

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <CakeControl
      key={ingredient}
      ingredient={ingredient}
      label={ingredients[ingredient].label}
      disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.CakeControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};
