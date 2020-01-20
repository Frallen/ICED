import React, { useEffect } from "react";
import { connect } from "react-redux";
import Discvoer from "../Discover/discover";
import { GetDiscover } from "./../../redux/Film";
import Preloader from "./../untils/preloader/preloader";
const Box = props => {
  useEffect(() => {
    props.GetDiscover();
  }, []);

  if (props.Films.length !== 0) {
    return <Discvoer {...props}></Discvoer>;
  } else {
    return <Preloader></Preloader>;
  }
};

let mapStateToProps = state => {
  return {
    Films: state.Film.Films
  };
};

export default connect(mapStateToProps, { GetDiscover })(Box);
