const GET_CONSOLES = "games/consoles";

const getAllConsoles = (consoles) => {
  return {
    type: GET_CONSOLES,
    consoles,
  };
};

export const getConsoles = function () {
  return async (dispatch) => {
    debugger;
    let res = await fetch("/api/games/consoles");
    debugger;
    if (res.ok) {
      let consoles = await res.json();
      dispatch(getAllConsoles(consoles));
    }
  };
};

export default function gameReducer(state = {}, action) {
  debugger;
  let newState = Object.assign({}, state);
  if (action !== undefined) {
    switch (action.type) {
      case GET_CONSOLES:
        newState[action.consoles] = action.consoles;
        return newState;
      default:
        return state;
    }
  }
}
