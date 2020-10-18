import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import {Link, NavLink} from 'react-router-dom'

class BorrowForm extends React.Component {


  render() {
    let owners = this.props.owners
    debugger;
    if (owners !=0){
    return (
      <>
      <div id={'borrow-from'}>Borrow from: </div>
      <form id={'game-borrow-form'}>
        <select>
        {owners.map((owner) => (
            <option id={'owner-option'} value={owner}>{owner}
            </option>
          ))}
        </select>
      </form>
      </>
    )
  }

return (<> </>)
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
