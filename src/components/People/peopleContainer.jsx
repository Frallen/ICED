import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { useEffect } from "react";
import { GetActor, GetActorInFilms } from "./../../redux/Cast";
import People from "./people";
import Preloader from "../untils/preloader/preloader";

let Box = props => {
  let id = props.match.params.id;
  useEffect(() => {
    props.GetActor(id);
    props.GetActorInFilms(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (props.Actor.length !== 0 && props.InFilms.length !== 0) {
    return <People {...props}></People>;
  } else {
    return <Preloader></Preloader>;
  }
};
let mapStateToProps = state => {
  return {
    Actor: state.Cast.Actor,
    InFilms: state.Cast.InFilms
  };
};

export default compose(
  connect(mapStateToProps, { GetActor, GetActorInFilms }),
  withRouter
)(Box);
