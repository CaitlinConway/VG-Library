import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import { getAllConsoles} from "../store/gameReducer.js";

class Homepage extends React.Component {
  componentDidMount() {
    this.props.getAllConsoles();
  }
  render() {
    if (this.props.consoles) {
      return (
        <>
          <div id={"homepage-title"}>Play With Pals</div>
          <ConsoleFeed consoles={this.props.consoles.consoles} games = {this.props.consoles.games}></ConsoleFeed>
          <div id={'welcome'}>
            Have you been wanting to try out the latest games but don't have money to buy them? Does your video game collection vastly exceed your free time and you wish they weren't just collecting dust? Play with Pals is here to connect friends together to share their libraries. Users can post their own video game libraries, or request to borrow a game from a friend. Want to start swapping?
          </div>
          <div id={'welcome-buttons'}>
          <button id={'join'}>Join now!</button>
          <button id={'sign-in'}>Already a friend? Sign in here</button>
          </div>
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
    getAllConsoles: () => dispatch(getAllConsoles()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
