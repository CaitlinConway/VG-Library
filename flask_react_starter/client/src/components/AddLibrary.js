import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addGame } from "../store/gameReducer";


class AddLibrary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            consoleId: "",
            consoleName: "",
            gameId: "",
            gameName: "",
        };
    }

    updateConsole = (e) => {
      e.preventDefault()
      this.setState({ consoleId: e.target.value });
    };

    updateGame = (e) => {
      e.preventDefault()
      this.setState({ gameName: e.target.value });
    };

    handleSubmit = async (e) => {
        e.preventDefault();
        const { consoleId,  gameName} = this.state;
        this.props.addGame(consoleId, gameName, this.props.user.id);
    };

    render() {
        const { consoleId, consoleName, gameName} = this.state;
        return (
          <>
          <div id={'add-library'}>Add to my library</div>
          <form id={'add-library-form'} onSubmit={this.handleSubmit}>
            <select className={'console-option'} onChange={this.updateConsole} value={consoleId}>
              <option value={1}>N64</option>
              <option value={2}>NES</option>
              <option value={3}>SNES</option>
              <option value={4}>Atari</option>
              <option value={5}>Odyssey 2</option>
              <option value={6}>Wii</option>
              <option value={7}>WiiU</option>
              <option value={8}>PS1</option>
              <option value={9}>PS2</option>
              <option value={10}>PS4</option>
              <option value={11}>Sega Genesis</option>
              <option value={12}>XBOX One</option>
              <option value={13}>Nintendo Switch</option>
              <option value={14}>XBOX 360</option>
              <option value={15}>Steam</option>
              <option value={16}>GameCube</option>
              <option value={17}>Gameboy 3DS</option>
              <option value={18}>Gameboy</option>
              <option value={19}>Gameboy SD</option>
              <option value={20}>Board Games</option>
              <option value={21}>XBOX</option>
            </select>
            <input className={'game-option'} value={gameName} onChange={this.updateGame}></input>
            <div className={'add-library-button-div'}>
            <button className={'add-button'} type='submit'>Add</button>
            </div>
          </form>
          </>
        );
      }
    }

  const mapStateToProps = (state) => {
    return {
      consoles: state.games.consoles,
      user: state.auth,
     };
    };

  const mapDispatchToProps = (dispatch) => {
    return {
      addGame: (consoleId, gameId, userId) => dispatch(addGame(consoleId, gameId, userId)),
    };
  };

  export default connect(mapStateToProps, mapDispatchToProps)(AddLibrary);
