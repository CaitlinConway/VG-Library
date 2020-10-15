import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import { getAllConsoles } from "../store/gameReducer.js";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.getAllConsoles();
  }
  render() {
    if (this.props.consoles) {
      return (
        <>
          <div id={"homepage-title"}>Play With Pals</div>
          <ConsoleFeed consoles={this.props.consoles.consoles}></ConsoleFeed>
        </>
      );
    }
    return (
      <>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
  consoles: state.games.consoles,
  user: state.auth
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllConsoles: () => dispatch(getAllConsoles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
