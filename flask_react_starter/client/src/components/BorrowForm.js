import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import {Link, NavLink} from 'react-router-dom'

class BorrowForm extends React.Component {

  render() {
    return (
      <>
      <div>Test</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(BorrowForm);
