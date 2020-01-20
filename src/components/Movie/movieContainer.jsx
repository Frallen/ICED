import React, { useEffect } from "react";
import { connect } from "react-redux";
import Movie from "./movie";
import Preloader from "../untils/preloader/preloader";
import { GetMovie } from "./../../redux/Film";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const Box = props => {
  let id = props.match.params.id;
  useEffect(() => {
    props.GetMovie(id);
  }, []);
  if (props.Movie.length !== 0) {
    return <Movie {...props}></Movie>;
  } else {
    return <Preloader></Preloader>;
  }
};

let mapStateToProps = state => {
  return {
    Movie: state.Film.Movie
  };
};

export default compose(connect(mapStateToProps, { GetMovie }), withRouter)(Box);
