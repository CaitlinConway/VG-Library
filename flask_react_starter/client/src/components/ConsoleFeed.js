import React from "react";
import Console from "./Console.js";

const ConsoleFeed = (consoles, games) => {
  return (
    <>
      <div id="ConsoleFeed-div">
        <h1 className='ConsoleFeed-title'>Consoles</h1>
        <ul id="ConsoleFeed">
          {consoles.consoles.map((console) => (
            <li key={console} id={'console-li'}>
              <Console console={console} games={games}></Console>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


export default ConsoleFeed;
