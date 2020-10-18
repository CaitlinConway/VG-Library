
const NEW_REQUEST = "request/new";
const EDIT_REQUEST = "request/edit";
const DELETE_REQUEST = "request/delete"
const GET_REQUESTS = "request/get"

export default function requestReducer(state = {}, action) {
  let newState = Object.assign({}, state);
    switch(action.type) {
        case NEW_REQUEST:
          newState["requestStatus"] = "Success"
            return newState;
        case EDIT_REQUEST:
          newState[action.request.id] = action.request
            return {};
        case DELETE_REQUEST:
          delete newState[action.requestId]
            return newState;
        case GET_REQUESTS:
          newState["requestsFrom"] = action.requestsFrom;
          newState["requestsTo"] = action.requestsTo;
          return newState;
        default:
            return state;
    }
}
export const getRequestsAction = (requestsFrom, requestsTo) =>{
  return {
    type: GET_REQUESTS,
    requestsFrom,
    requestsTo
  }
}

export const newRequestAction = () =>{
  return {
    type: NEW_REQUEST,
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

export const newRequest = function(game, requestFrom, requestOf) {
  return async (dispatch) =>{
    let res = await fetch('/api/gameRequests/', {
      method: "POST",
            headers: {'Content-Type': "application/json"},
            body: JSON.stringify({game, requestFrom, requestOf})
    })
    if (res.ok) {
      // let request = await res.json()
      dispatch(newRequestAction())
    }
  }
}

export const getRequests = function(userId){
  return async (dispatch) =>{
    let res = await fetch(`/api/gameRequests/${userId}`)
    if (res.ok){
      let requests = await res.json()
      dispatch(getRequestsAction(requests.requestsFrom, requests.requestsTo))
    }
  }
}
