import React, { useEffect, useState } from "react";
import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import {Link, NavLink} from 'react-router-dom'
import {newRequest} from '../store/requestReducer'

class BorrowForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      game: this.props.game,
      owners: this.props.owners,
      requestFrom: this.props.user.id,
      requestOf: "",
    }
  }
  onSubmit = async (e)=> {
    e.preventDefault();
    let {requestFrom, requestOf} = this.state;
    if (requestOf == ""){
      requestOf= this.props.owners[0]
    }
    if (requestFrom == ""){
      return alert ("Please log in to borrow games")
    }
    else {
      this.props.newRequest(this.props.game, requestFrom, requestOf);
      this.setState({requestStatus: this.props.requestStatus})
    }
  }
  updateRequest = (e) =>{
    e.preventDefault();
    this.setState({requestOf: e.target.value, })
  }
  render() {
    const {requestStatus} = this.state;
    if (this.props.owners !=0 && requestStatus != 'Success'){
    return (
      <>
      <div id={'borrow-from'}>Request to borrow from:</div>
      <form id={'game-borrow-form'} onSubmit={this.onSubmit}>
        <select className={'owner-option'} value ={this.state.requestOf} onChange={this.updateRequest}>
        {this.props.owners.map((owner) => (
            <option  value={owner}>{owner}
            </option>
          ))}
        </select>
        <div className={'borrow-button-div'}>
        <button className={'borrow-button-select'} type='submit'>Borrow</button>
        </div>
      </form>
      </>
    )
        }
    else if (this.props.owners !=0 && requestStatus == 'Success'){
      return (
        <>
        <div id={'borrow-requested'}>Requested!</div>
        </>
      )
  }
 else{
    return (<> </>)
    }
}
}
const mapStateToProps = (state) => ({
  consoles: state.games.consoles,
  user: state.auth,
  requestStatus : state.requests.requestStatus
});

const mapDispatchToProps = (dispatch) => {
  return {
    newRequest: (game, requestFrom, requestOf) => dispatch(newRequest(game, requestFrom, requestOf))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BorrowForm);
