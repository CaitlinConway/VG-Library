import React from "react";

import { connect } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import getConsoles from "../store/gameReducer";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.getConsoles();
  }

  render() {
    return (
      <>
        <div id={"homepage-title"}>Play With Pals</div>
        {/* <ConsoleFeed console = {this.props.consoles}></ConsoleFeed> */}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    games: state.games,
    // consoles: state.games.consoles,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getConsoles: () => dispatch(getConsoles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
