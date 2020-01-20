import React from "react";
import classes from "./preloader.module.scss";
import pre from "./../../../media/preloader.svg"
const Preloader = () => {
  return (
    <div className={classes.bg}>
      <img src={pre} alt="" className={classes.pre} />
    </div>
  );
};

export default Preloader;
