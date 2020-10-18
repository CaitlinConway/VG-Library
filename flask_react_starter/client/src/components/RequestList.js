import React from "react";
import { connect } from "react-redux";
import {Link, NavLink} from 'react-router-dom'
import {getLibrary} from '../store/gameReducer'

class RequestList extends React.Component {
  componentDidMount(){
    this.props.getRequests(this.props.user.id)
  }
  render() {
    if (this.props.requests){
    return (<>
    <div id={'request-title'}>My Game Requests</div>
     <div id={'request-list'}>
       <ul id={'request-list-ul'}>
       {this.props.requests.map((request) => (
            <li key={request} id={'Request-li'}>
             <div>{request.game}</div>
             <div>Requested from: {request.from}</div>
            </li>
          ))}
       </ul>
     </div>
     </>)
    }
    else {
      return (<> </>)
    }
}
}
const mapStateToProps = (state) => ({
  consoles: state.games.consoles,
  user: state.auth,
  requests: state.games.requests
});

const mapDispatchToProps = (dispatch) => {
  return {
    getRequests: (userId) => dispatch(getRequests(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
