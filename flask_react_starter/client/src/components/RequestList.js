import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom'
import { getRequests } from '../store/requestReducer'
import RequestTo from './RequestTo'
import RequestFrom from './RequestFrom'

class RequestList extends React.Component {
  componentDidMount() {
    this.props.getRequests(this.props.user.id)
  }
  render() {
    return (
    <>
    <div id={'pending-request-container'}>
      <div className={'request-title'}>My Pending Requests</div>
        <div className={'waiting-on'}>Waiting on</div>
          {this.props.requestsToPending ? <RequestTo requestsTo={this.props.requestsToPending}></RequestTo> : <></>}
        <div className={'from-my-library'}>From my library</div>
          {this.props.requestsFromPending ? <RequestFrom requestsFrom={this.props.requestsFromPending}></RequestFrom> : <></>}
    </div>
  <div id={'borrowed-request-container'}>
      <div className={'request-title'}>My Borrowed Games</div>
        <div className={'waiting-on'}>I've borrowed</div>
          {this.props.requestsToBorrowed ? <RequestTo requestsTo={this.props.requestsToBorrowed}></RequestTo> : <></>}
        <div className={'from-my-library'}>From my library</div>
          {this.props.requestsFromBorrowed ? <RequestFrom requestsFrom={this.props.requestsFromBorrowed}></RequestFrom> : <></>}
    </div>
    <div id={'completed-request-container'}>
    <div className={'request-title'}>My Completed Requests</div>
    <div className={'waiting-on'}>I've played</div>
    {this.props.requestsToCompleted ? <RequestTo requestsTo={this.props.requestsToCompleted}></RequestTo> : <></>}
    <div className={'from-my-library'}>From my library</div>
    {this.props.requestsFromCompleted ? <RequestFrom requestsFrom={this.props.requestsFromCompleted}></RequestFrom> : <></>}
    </div>
    </>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.auth,
  requestsFromPending: state.requests.requestsFromPending,
  requestsToPending: state.requests.requestsToPending,
  requestsFromCompleted: state.requests.requestsFromCompleted,
  requestsToCompleted: state.requests.requestsToCompleted,
  requestsFromBorrowed: state.requests.requestsFromBorrowed,
  requestsToBorrowed: state.requests.requestsToBorrowed
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: (userId) => dispatch(getRequests(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
