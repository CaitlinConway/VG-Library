
const NEW_REQUEST = "request/new";
const EDIT_REQUEST = "request/edit";
const DELETE_REQUEST = "request/delete"


export default function requestReducer(state = {}, action) {
  let newState = Object.assign({}, state);
    switch(action.type) {
        case NEW_REQUEST:
          newState[action.request.id] = action.request
            return newState;
        case EDIT_REQUEST:
          newState[action.request.id] = action.request
            return {};
        case DELETE_REQUEST:
          delete newState[action.requestId]
            return newState;
        default:
            return state;
    }
}

export const newRequestAction = (request) =>{
  return {
    type: NEW_REQUEST,
    request
  }
}

export const editRequestAction = (request) =>{
  return {
    type: EDIT_REQUEST,
    request
  }
}

export const deleteRequestAction = (requestId) =>{
  return {
    type: DELETE_REQUEST,
    requestId
  }
}

export const newRequest = function(gameId, userRequestId) {
  return async (dispatch) =>{
    let res = await fetch('/requests', {
      method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({gameId, userRequestId})
    })
    if (res.ok) {
      let request = await res.json()
      dispatch(newRequestAction(request))
    }
  }
}
