import React, { useEffect, useState } from "react";

import { connect, useDispatch } from "react-redux";
import ConsoleFeed from "./ConsoleFeed";
import { getAllConsoles } from "../store/gameReducer.js";

class Homepage extends React.Component {
  // const [consoles, setConsoles] = useState({});
  // const dispatch = useDispatch();
  // useEffect(() =>{
  //   const loadConsoles = async () => {
  //   const res = await fetch('/api/games/consoles');
  //   if (res.ok){
  //     res.data = await res.json();
  //     dispatch(getConsoles(res.data['consoles']))
  //   }
  //   setConsoles(res.data['consoles']);
  // }
  // loadConsoles()
  // }, [])

  // if (consoles) return null;
  componentDidMount() {
    this.props.getAllConsoles();
  }
  render() {
    if (this.props.consoles) {
      return (
        <>
          <div id={"homepage-title"}>Play With Pals</div>
          <ConsoleFeed consoles={this.props.consoles.consoles}></ConsoleFeed>
        </>
      );
    }
    return (
      <>
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
    getAllConsoles: () => dispatch(getAllConsoles())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
