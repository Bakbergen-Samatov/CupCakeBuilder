import React from "react";
import logo from "../../../assets/logos.svg";
import classes from "./Logo.module.css";

export default () => (
  <div className={classes.Logo}>
    <img src={logo} alt="CupCakes Builder
     logo" />
    <span>Cake Builder</span>
  </div>
);
