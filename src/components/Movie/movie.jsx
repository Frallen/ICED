/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import classes from "./movie.module.scss";
import { NavLink } from "react-router-dom";
import disc from "./../../media/disc.svg"
const Movie = ({ Movie, Video, Cast }) => {
  //мне нужно взять только трейлеры,фильтрую массив и беру толко те массивы в каторых строчка type=Trailer
  let trailer = Video.results.filter(p => p.type === "Trailer");

  return (
    <div>
      <div className={classes.BoxInfo}>
        <div className={classes.main}>
          <div className={classes.boxImg}>
            <img
              src={Movie.poster_path?"https://image.tmdb.org/t/p/w500/" + Movie.poster_path:disc}
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
        <div className={classes.PlayerBox}>
          {trailer.length !==0 && (
            <iframe
              className={classes.Player}
              src={"https://www.youtube.com/embed/" + trailer[0].key}
              frameBorder="0"
              allow="accelerometer; autoPlay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      </div>
      <div className={classes.Cast}>
        {Cast &&
          //slice беру элементы с индесксом 0 по 15
          Cast.cast.slice(0, 15).map(p => (
            <div key={p.id} className={classes.item}>
              <div className={classes.boxImg}>
                <img
                  src={"https://image.tmdb.org/t/p/w500/" + p.profile_path}
                  alt={p.name}
                  className={classes.img}
                />
              </div>
              <div className={classes.person}>
              <NavLink to={"/profile/" + p.id} className={classes.link}>
                {p.name}
              </NavLink>
              <span>{p.character}</span>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Movie;
