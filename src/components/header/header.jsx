import classes from "./header.module.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "./../../media/logo.svg"

const Header = () => {
  const [isActive, setActive] = useState(false);

  let setMob = () => {
    if (isActive) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className={classes.bg}>
      <div className={classes.NavBox}>
        <div className={classes.logobox}>
          <img src={logo} alt="" className={classes.logo}/>
          <h1 className={classes.logoText}>iced</h1>
        </div>
        <ul
          className={
            classes.navigation + " " + (isActive && classes.navigationAct)
          }
        >
          <li className={classes.item}>
            <NavLink to="/" className={classes.button}>
              Home
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/discover" className={classes.button}>
              Discover
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to="/find" className={classes.button}>
              Find
            </NavLink>
          </li>
          <li className={classes.item}>
            <NavLink to=" " className={classes.button}>
              What
            </NavLink>
          </li>
        </ul>
        <div className={classes.hamburger} onClick={setMob}>
          <div className={classes.mobilebox}>
            <span
              className={classes.mobile + " " + (isActive && classes.mobileAct)}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
