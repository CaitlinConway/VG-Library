import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import BorrowForm from './BorrowForm'
const Game = ({ game }) => {
  const [gameInfo, setGameInfo] = useState({})
  const [gameOwner, setGameOwner] = useState(0)
  useEffect(()=> {
      async function getGameInfo() {
          const res = await fetch(`/api/games/${game}`);
          if(res.ok) {
              const data = await res.json()
              setGameInfo(data[game].query.search[0].snippet)
          }
      }
      async function getGameOwner(){
        const res = await fetch(`/api/games/owners/${game}`)
        if (res.ok){
          const data = await res.json()
          setGameOwner(data.owners)
        }
      }
      getGameInfo()
      getGameOwner();
  }, [game])
  let string =gameInfo.toString();
  let array = string.split('<span class="searchmatch">');
  let string2 = array.join(" ");
  let array2 = string2.split('</span>');
  let string3 = array2.join();
  let array3 = string3.split(",");
  let string4= array3.join();

  const onClick = (e) =>{
    e.preventDefault();
    let form = document.getElementById('borrow-form');
    form.style.display = 'block'
  }

  return (
    <>
      <div id={'game-feed-divs'}>
        <div id={'game-name'}>{game}</div>
        <div id={'game-blurb'}>{string4}</div>
        <div id = {'game-owner'}>Owned by: {gameOwner}</div>
        <button id={'borrow-game'} onClick={onClick}>Borrow</button>
        <div id={'borrow-form'} hidden>
          <BorrowForm owners={gameOwner}></BorrowForm>
        </div>
      </div>
    </>
  )
};


export default Game;
