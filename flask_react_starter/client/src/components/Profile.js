import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom'
import AddLibrary from "./AddLibrary";
import LibraryList from './LibraryList'
import RequestList from './RequestList'

class Profile extends React.Component {
  render() {
      return (<>
      <NavLink to="/" id={"homepage-title"}>Play With Pals</NavLink>
      <div id={'profile-header'}>My Profile</div>
      <div id={'library-list-container'}>
        <LibraryList user={this.props.user}></LibraryList>
      </div>
      <div id={'request-list-container'}>
        <RequestList user={this.props.user}></RequestList>
      </div>
      <div id={'add-library-container'}>
        <AddLibrary user={this.props.user}></AddLibrary>
      </div>
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

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
