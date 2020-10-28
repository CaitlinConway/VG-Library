import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux"
import BorrowForm from './BorrowForm'
const Game = (props) => {
  const [gameInfo, setGameInfo] = useState({})
  const [gameOwner, setGameOwner] = useState(0)
  const userId = useSelector(state => state.auth?.id)
  const game = props.match.params.game
  debugger;
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
      function hideForm(){
        let button = document.getElementById(`borrow-button-container-${game}`);
        button.style.display = 'none'
      }
      getGameInfo()
      getGameOwner();
      if (userId == undefined){
        hideForm();
      }
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
    let form = document.getElementById(`borrow-form-${game}`);
    let button = document.getElementById(`borrow-button-${game}`);
    button.style.display = 'none'
    form.style.display = 'block'
  }
  // function hideForm () {
  //   let button = document.querySelectorAll(`borrow-button-container`);
  //   debugger;
  //   button.style.display = 'none'
  // }
  //   if (user.length == 0){
  //     hideForm();}
  return (
    <>
      <div id={'game-feed-divs'}>
        <div id={'game-name'}>{game}</div>
        <div id={'game-blurb'}>{string4}</div>
        {/* <div id = {'game-owner'}>Owned by: {gameOwner}</div> */}
        <div id={`borrow-button-container-${game}`} className={'borrow-button-container'}>
        <button id={`borrow-button-${game}`} className={'borrow-button'} onClick={onClick}>Borrow</button>
        </div>
        <div id={`borrow-form-${game}`} className={'borrow-form'}hidden>
          <BorrowForm owners={gameOwner} game={game}></BorrowForm>
        </div>
      </div>
    </>
  )
};


export default Game;
