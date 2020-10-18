import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import {NavLink} from 'react-router-dom'


class Profile extends React.Component {
  render() {

      return (<>
      <NavLink to="/" id={"homepage-title"}>Play With Pals</NavLink>
      <div id={'profile-header'}>My Profile</div>
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
