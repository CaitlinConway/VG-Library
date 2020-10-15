const GET_CONSOLES = "consoles";

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

export default function gameReducer(state = {}, action) {
  let newState = Object.assign({}, state);
    switch (action.type) {
      case GET_CONSOLES:
        newState["consoles"] = action.consoles;
        return newState;
      default:
        return state;
    }

}
