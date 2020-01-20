import React from "react";
import classes from "./discover.module.scss";
import { NavLink } from "react-router-dom";

const Discvoer = props => {
  return (
    <div>
      <div>
        <div className={classes.box}>
          {props.Films.map(p => (
            <div key={p.id} className={classes.item}>
              <div className={classes.boxImg}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + p.poster_path}
                  alt={p.title}
                  className={classes.img}
                />
              </div>
              <NavLink to={"/movie/" + p.id} className={classes.button}>
                Show more
              </NavLink>
              <div className={classes.text}>
                <h3 className={classes.title}>{p.title}</h3>
                <p className={classes.date}>{p.release_date}</p>
                <p className={classes.overview}>
                  {p.overview.substring(0, 70)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discvoer;
