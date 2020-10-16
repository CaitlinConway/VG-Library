import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const Game = ({ game }) => {
  return (
    <>
      <div >
        <div id={'game-name'}>{game}</div>
      </div>
    </>
  )
};


export default Game;
