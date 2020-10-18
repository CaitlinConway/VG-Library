import React from "react";
import { connect } from "react-redux";
import { Link, NavLink } from 'react-router-dom'
import { getLibrary } from '../store/gameReducer'

class LibraryList extends React.Component {
  componentDidMount() {
    this.props.getLibrary(this.props.user.id)
  }
  render() {
    if (this.props.library) {
      return (<>
        <div id={'library-title'}>My Game Library</div>
        <div id={'library-list'}>
          <ul className={'library-list-ul'}>
            {this.props.library.map((game) => (
              <li key={game} className={'library-li'}>
                {game}
              </li>
            ))}
          </ul>
        </div>
      </>)
    }
    else {
      return (<><div id={'library-title'}>My Game Library</div> </>)
    }
  }
}
const mapStateToProps = (state) => ({
  consoles: state.games.consoles,
  user: state.auth,
  library: state.games.library
});

const mapDispatchToProps = (dispatch) => {
  return {
    getLibrary: (userId) => dispatch(getLibrary(userId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LibraryList);
