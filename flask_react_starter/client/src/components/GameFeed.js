import React from 'react'
import Game from './Game'
import {connect} from 'react-redux'
import {getAllGames} from '../store/gameReducer'
import {NavLink} from 'react-router-dom'
class GameFeed extends React.Component {
  componentDidMount(){
  let console = this.props.match.params.console;
  this.props.getAllGames(console);
  }
  render(){
    let console = this.props.match.params.console;
    if (this.props.games && this.props.games[console] !== undefined){
    return (
        <>
        <NavLink to="/" id={"homepage-title"}>Play With Pals</NavLink>
        <div id="ConsoleFeed-div">
        <h1 className='ConsoleFeed-title'>{console}</h1>
        <ul id="ConsoleFeed">
          {this.props.games[console].map((game) => (
            <li key={game} id={'console-game-li'}>
              <Game game={game} user={this.props.user}></Game>
            </li>
          ))}
        </ul>
      </div>
        </>
    )
          }

    else {
      return (
        <>
        <NavLink to="/" id={"homepage-title"}>Play With Pals</NavLink>
        <div id={'no-games'}>
        No games
          </div>
          </>)
    }
    }
  }

  const mapStateToProps = (state) => ({
    games: state.games.games,
    user: state.auth
  });
  const mapDispatchToProps = (dispatch) => {
    return {
      getAllGames: (console) => dispatch(getAllGames(console)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(GameFeed);
