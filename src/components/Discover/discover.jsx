import React, { useState } from "react";
import classes from "./discover.module.scss";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { DateSelect, Sort, Genres } from "../commons/form/form";
import { Paginator } from "../commons/Paginator/paginator";
import disc from "./../../media/disc.svg";

let Box = props => {
  return (
    <form onBlur={props.handleSubmit} className={classes.form}>
      <div className={classes.item}>
        <Field name="Year" component={DateSelect}></Field>
      </div>
      <div className={classes.item}>
        <Field name="Sort" component={Sort}></Field>
      </div>
      <div className={classes.item}>
        <Field name="Genres" component={Genres}></Field>
      </div>
    </form>
  );
};

let FilterForm = reduxForm({
  form: "Filter"
})(Box);

const Discvoer = props => {
  const [TotalPages] = useState(props.Films.total_pages);

  let nextPage = num => {
    let data = {
      num: num
    };
    props.Get(data);
  };

  let onChange = info => {
    let data = {
      Sort: info.Sort,
      Year: info.Year,
      Genres: info.Genres
    };
    props.Get(data);
  };
  return (
    <div className={classes.Discvoer}>
      <div className={classes.filter}>
        <FilterForm {...props} onSubmit={onChange}></FilterForm>
      </div>
      <div className={classes.box}>
        {props.Films.results.map(p => (
          <div key={p.id} className={classes.item}>
            <div className={classes.boxImg}>
              <img
                src={
                  p.poster_path
                    ? "https://image.tmdb.org/t/p/w500/" + p.poster_path
                    : disc
                }
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
      <div className={classes.Paginator}>
        {TotalPages > 1 && (
          <Paginator
            TotalResults={props.Films.total_results}
            currentPage={props.Films.page}
            nextPage={nextPage}
          ></Paginator>
        )}
      </div>
    </div>
  );
};

export default Discvoer;
