import React from "react";
import { NavLink } from "react-router-dom";
import { Paginator } from "../commons/Paginator/paginator";
import classes from "./topActor.module.scss";
import disc from "./../../media/disc.svg";

let TopActor = ({ People, getTop }) => {
  let nextPage = num => {
    getTop(num);
  };

  return (
    <div className={classes.Box}>
      <div className={classes.main}>
        {People.results.map(p => (
          <div key={p.id} className={classes.item}>
            <div className={classes.boxImg}>
              <img
                src={
                  p.profile_path
                    ? "https://image.tmdb.org/t/p/w500/" + p.profile_path
                    : disc
                }
                alt={p.name}
                className={classes.img}
              />
            </div>
            <NavLink to={"/profile/" + p.id} className={classes.link}>
              {p.name}
            </NavLink>
          </div>
        ))}
      </div>
      <div className={classes.Paginator}>
        {People.total_pages > 5 && (
          <Paginator
            TotalResults={People.total_results}
            currentPage={People.page}
            nextPage={nextPage}
          ></Paginator>
        )}
      </div>
    </div>
  );
};

export default TopActor;
