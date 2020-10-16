import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";


class Profile extends React.Component {
  render() {

      return (<>
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
