import React from "react";
import classes from "./home.module.scss";

const Home = () => {
  return (
    <div className={classes.main}>
      <div>
        <h1 className={classes.h1}>Iced</h1>
        <p className={classes.text}>Find your ideal movie</p>
      </div>
    </div>
  );
};

export default Home;
