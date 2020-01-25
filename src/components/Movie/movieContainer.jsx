import React, { useEffect } from "react";
import { connect } from "react-redux";
import Movie from "./movie";
import Preloader from "../untils/preloader/preloader";
import { GetMovie, GetVideo,Clear } from "./../../redux/Film";
import { GetCast } from "./../../redux/Cast";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

const Box = props => {
  let id = props.match.params.id;
  useEffect(() => {
    props.Clear()
    props.GetMovie(id);
    props.GetVideo(id);
    props.GetCast(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (
    props.Movie.length !== 0 &&
    props.Video.length !== 0 &&
    props.Cast.length !== 0
  ) {
    return <Movie {...props}></Movie>;
  } else {
    return <Preloader></Preloader>;
  }
};

let mapStateToProps = state => {
  return {
    Movie: state.Film.Movie,
    Video: state.Film.Video,
    Cast: state.Cast.Cast
  };
};

export default compose(
  connect(mapStateToProps, { GetMovie, GetVideo, GetCast,Clear }),
  withRouter
)(Box);
