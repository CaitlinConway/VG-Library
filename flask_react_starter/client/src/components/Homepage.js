import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import { getAllConsoles, getAllGamesNoConsole} from "../store/gameReducer.js";
import {Link, NavLink} from 'react-router-dom'
import {logOut} from '../store/authReducer'
import SearchBar from './SearchBar'

class Homepage extends React.Component {
  componentDidMount() {
    this.props.getAllConsoles();
    this.props.getAllGamesNoConsole();
  }
  logout = (e) =>{
    e.preventDefault();
    this.props.logOut()

  }
  render() {
    if (this.props.consoles && this.props.user["id"] == undefined) {
      return (
        <>
          <div id={"homepage-title"}>Play With Pals</div>
          <ConsoleFeed consoles={this.props.consoles.consoles} games = {this.props.consoles.games}></ConsoleFeed>
          <div id={'welcome'}>
            Have you been wanting to try out the latest games but don't have money to buy them? Does your video game collection vastly exceed your free time and you wish they weren't just collecting dust? Play with Pals is here to connect friends together to share their libraries. Users can post their own video game libraries, or request to borrow a game from a friend. Want to start swapping?
          </div>
          <div id={'welcome-buttons'}>
          <NavLink id={'join'} to="/signup">Join now!</NavLink>
          <NavLink id={'sign-in'} to="/login">Already a friend? Sign in here</NavLink>
          </div>
        </>
      );
    }
    if (this.props.consoles) {
      return (
        <>
          <div id={"homepage-title"}>Play With Pals</div>
          <SearchBar games={this.props.games}></SearchBar>
          <ConsoleFeed consoles={this.props.consoles.consoles} games = {this.props.consoles.games}></ConsoleFeed>
          <div id={'welcome'}>
            Have you been wanting to try out the latest games but don't have money to buy them? Does your video game collection vastly exceed your free time and you wish they weren't just collecting dust? Play with Pals is here to connect friends together to share their libraries. Users can post their own video game libraries, or request to borrow a game from a friend. Want to start swapping?
          </div>
          <div id={'welcome-buttons'}>
          <button id={'logout-button'} onClick={this.logout}>Logout</button>
          <NavLink to="/profile" user={this.props.user} id={'profile-button'}>Account</NavLink>
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
  user: state.auth,
  games: state.games.games
});

const mapDispatchToProps = (dispatch) => {
  return {
    getAllConsoles: () => dispatch(getAllConsoles()),
    logOut: () => dispatch(logOut()),
    getAllGamesNoConsole: () => dispatch(getAllGamesNoConsole())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
