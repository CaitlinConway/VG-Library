const GET_CONSOLES = "consoles";
const GET_GAMES = 'games'
const GET_LIBRARY = "library"

export const getConsoles = (consoles) => {
  return {
    type: GET_CONSOLES,
    consoles
  };
};

export const getAllConsoles = function () {
  return async (dispatch) => {
    let res = await fetch("/api/games/consoles");
    if (res.ok) {
      let consoles = await res.json();
      dispatch(getConsoles(consoles));
    }
  };
};
export const getGames = (games) => {
  return {
    type: GET_GAMES,
    games
  };
};
export const fillLibrary = (library) => {
  return {
    type: GET_LIBRARY,
    library
  }
}

export const getAllGames = function (console) {
  return async (dispatch) => {
    let res = await fetch(`/api/games/console/${console}`);
    if (res.ok) {
      let games = await res.json();
      dispatch(getGames(games));
    }
  };
};

export const getAllGamesNoConsole = function () {
  return async (dispatch) => {
    let res = await fetch(`/api/games/`);
    if (res.ok) {
      let games = await res.json();
      dispatch(getGames(games));
    }
  };
};

export const getLibrary = function (userId){
  return async (dispatch) =>{
  let res = await fetch(`/api/games/library/${userId}`);
  if (res.ok){
    let library = await res.json();
    dispatch(fillLibrary(library))
  }
}
}

export const addGame = function (consoleId, gameName, userId){
  return async (dispatch) =>{
    let res = await fetch ('/api/games/', {
      method: "POST",
      headers: {'Content-Type': "application/json"},
      body: JSON.stringify({consoleId, gameName, userId})
    })
  let status = await res.json();
  if (res.ok){
    dispatch(getLibrary(userId))
  }
  else {
  alert(status.error)
  }}
}
export default function gameReducer(state = {}, action) {
  let newState = Object.assign({}, state);
    switch (action.type) {
      case GET_CONSOLES:
        newState["consoles"] = action.consoles;
        return newState;
      case GET_GAMES:
        newState["games"] = action.games;
        return newState;
      case GET_LIBRARY:
        newState["library"] = action.library.library
        return newState;
      default:
        return state;
    }

}
