import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux"
const Game = ({ game }) => {
  const dispatch = useDispatch()
  const [gameInfo, setGameInfo] = useState({})
  useEffect(()=> {
      async function getGameInfo() {
          const res = await fetch(`/api/games/${game}`);
          if(res.ok) {
              const data = await res.json()
              setGameInfo(data[game].query.search[0].snippet)
          }
      }
      getGameInfo()
  }, [game])
  let string =gameInfo.toString();
  let array = string.split('<span class="searchmatch">');
  let string2 = array.join(" ");
  let array2 = string2.split('</span>');
  let string3 = array2.join();
  let array3 = string3.split(",");
  let string4= array3.join();
  console.log(string4);
  return (
    <>
      <div id={'game-feed-divs'}>
        <div id={'console-name'}>{game}</div>
        <div id={'game-blurb'}>{string4}</div>
      </div>
    </>
  )
};


export default Game;
