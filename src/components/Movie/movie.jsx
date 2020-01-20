import React from "react";
import classes from "./movie.module.scss";

const Movie = ({ Movie }) => {
  return (
    <div>
      <div className={classes.BoxInfo}>
        <div className={classes.main}>
          <div className={classes.boxImg}>
            <img
              src={"https://image.tmdb.org/t/p/w500/" + Movie.poster_path}
              alt="Poster"
              className={classes.img}
            />
          </div>
          <div className={classes.info}>
            <h3 className={classes.title}>{Movie.title}</h3>
            <span className={classes.tagline}>{Movie.tagline}</span>
            <ul className={classes.genres}>
              {Movie.genres.map(p => (
                <li key={p.id} className={classes.genresItem}>
                  {p.name}
                </li>
              ))}
            </ul>
            <ul className={classes.data}>
              <li className={classes.dataItem}>
                Relese date: <span>{Movie.release_date}</span>
              </li>
              <li className={classes.dataItem}>
                Status: <span>{Movie.status}</span>
              </li>
              <li className={classes.dataItem}>
                Minutes: <span>{Movie.runtime}</span>
              </li>
              <li className={classes.dataItem}>
                Original language: <span>{Movie.original_language}</span>
              </li>
              <li className={classes.dataItem}>
                Budget: <span>{Movie.budget}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={classes.OtherInfo}>
        <h4 className={classes.Storyline}>Storyline</h4>
        <p className={classes.overview}>{Movie.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
