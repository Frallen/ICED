import React from "react";
import Preloader from "./../untils/preloader/preloader";
import { connect } from "react-redux";
import TopActor from "./topActor";
import { GetTopPeople } from "./../../redux/Cast";
import { useEffect } from "react";

let Box = props => {
  useEffect(() => {
    props.GetTopPeople();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let getTop = num => {
    props.GetTopPeople(num);
  };

  if (props.People.length !== 0) {
    return <TopActor {...props} getTop={getTop}></TopActor>;
  } else {
    return <Preloader></Preloader>;
  }
};

let mapStateToProps = state => {
  return {
    People: state.Cast.People
  };
};

export default connect(mapStateToProps, { GetTopPeople })(Box);
