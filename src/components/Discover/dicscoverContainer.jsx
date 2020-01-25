import React, { useEffect } from "react";
import { connect } from "react-redux";
import Discvoer from "../Discover/discover";
import { GetDiscover } from "./../../redux/Film";
import Preloader from "./../untils/preloader/preloader";
const Box = props => {
  useEffect(() => {
    props.GetDiscover();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  let Get = data => {
    props.GetDiscover(data);
  };

  if (props.Films.length !== 0) {
    return <Discvoer {...props} Get={Get}></Discvoer>;
  } else {
    return <Preloader></Preloader>;
  }
};

let mapStateToProps = state => {
  return {
    Films: state.Film.Films
  };
};

export default connect(mapStateToProps, { GetDiscover,  })(Box);
