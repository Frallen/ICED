import React from "react";
import classes from "./people.module.scss";
import { NavLink } from "react-router-dom";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from "@material-ui/core";

let People = ({ Actor, InFilms }) => {
  return (
    <div className={classes.box}>
      <div className={classes.main}>
        <div className={classes.boxImg}>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + Actor.profile_path}
            alt={Actor.name}
            className={classes.Img}
          />
        </div>
        <div className={classes.info}>
          <h3>{Actor.name}</h3>
          <ul className={classes.data}>
            <li className={classes.item}>Birthday: {Actor.birthday}</li>
            <li className={classes.item}>
              Place of birth: {Actor.place_of_birth}
            </li>
            <li className={classes.item}>
              Gender: {Actor.gender === 2 ? "Male" : "Female"}
            </li>
            <li className={classes.item}>Imdb id :{Actor.imdb_id}</li>
          </ul>
        </div>
      </div>
      <div className={classes.Bio}>
        <h4 className={classes.title}>Biography</h4>
        <p className={classes.text}>{Actor.biography}</p>
        
      </div>
<h4 className={classes.Acting}>Acting</h4>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell align="right">Release date</TableCell>
              <TableCell align="right">Character</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {InFilms.cast.map(p => (
              <TableRow key={p.id}>
                <TableCell component="th" scope="p">
                  <NavLink to={"/movie/" + p.id} className={classes.link}>
                    {p.title}
                  </NavLink>
                </TableCell>
                <TableCell align="right">
                  {p.release_date ? p.release_date : "-"}
                </TableCell>
                <TableCell align="right">
                  {p.character ? p.character : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default People;
