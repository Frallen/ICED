import React, { useState } from "react";
import classes from "./discover.module.scss";
import { NavLink } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { DateSelect, Sort, Genres, Search } from "../commons/form/form";
import { Paginator } from "../commons/Paginator/paginator";

let Box = props => {
  return (
    <form onSubmit={props.handleSubmit} className={classes.form}>
      <div className={classes.item}>
        <Field name="Year" component={DateSelect}></Field>
      </div>
      <div className={classes.item}>
        <Field name="Sort" component={Sort}></Field>
      </div>
      <div className={classes.item}>
        <Field name="Genres" component={Genres}></Field>
      </div>
      <div className={classes.item}>
        <Field name="KeyWords" component={Search}></Field>
      </div>
    </form>
  );
};

let FilterForm = reduxForm({
  form: "Filter"
})(Box);

const Discvoer = props => {
  const [TotalPages] = useState(props.Films.total_pages);
  const [currentPage] = useState(props.Films.page);

  //setTotalResults(props.Films.total_results);
  //setCurrentPage(props.Films.page);
  //let numPages = Math.floor(TotalResults / 20);
  let data = [];

  let nextPage = num => {
    data = {
      num: num
    };
    props.Get(data);
  };

  let onChange = data => {
    props.Get(data.Sort);
  };
  return (
    <div>
      <div className={classes.filter}>
        <FilterForm {...props} onChange={onChange}></FilterForm>
      </div>
      <div className={classes.box}>
        {props.Films.results.map(p => (
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
      <div>
        {TotalPages > 1 && (
          <Paginator
            TotalPages={TotalPages}
            currentPage={currentPage}
            nextPage={nextPage}
          ></Paginator>
        )}
      </div>
    </div>
  );
};

export default Discvoer;
