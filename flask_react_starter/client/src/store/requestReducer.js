
const NEW_REQUEST = "request/new";
const EDIT_REQUEST = "request/edit";
const DELETE_REQUEST = "request/delete"
const GET_REQUESTS = "request/get"

export default function requestReducer(state = {}, action) {
  let newState = Object.assign({}, state);
    switch(action.type) {
        case NEW_REQUEST:
          newState["requestStatus"] = action.status
            return newState;
        case EDIT_REQUEST:
          newState[action.request.id] = action.request
            return {};
        case DELETE_REQUEST:
          delete newState[action.requestId]
            return newState;
        case GET_REQUESTS:
          newState["requestsFromPending"] = action.requestsFromPending;
          newState["requestsToPending"] = action.requestsToPending;
          newState["requestsFromCompleted"] = action.requestsFromCompleted;
          newState["requestsToCompleted"] = action.requestsToCompleted;
          newState["requestsFromBorrowed"] = action.requestsFromBorrowed;
          newState["requestsToBorrowed"] = action.requestsToBorrowed;
          return newState;
        default:
            return state;
    }
}
export const getRequestsAction = (requestsFromPending, requestsToPending, requestsFromCompleted, requestsToCompleted, requestsFromBorrowed, requestsToBorrowed) =>{
  return {
    type: GET_REQUESTS,
    requestsFromPending, requestsToPending, requestsFromCompleted, requestsToCompleted, requestsFromBorrowed, requestsToBorrowed
  }
}

export const newRequestAction = (status) =>{
  return {
    type: NEW_REQUEST,
    status
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
      dispatch(newRequestAction("Success"))
    }
    else {
      // dispatch(newRequestAction("Failure"))
      alert("Cannot borrow games from self")
    }
  }
}

export const getRequests = function(userId){
  return async (dispatch) =>{
    let res = await fetch(`/api/gameRequests/${userId}`)
    if (res.ok){
      let requests = await res.json()
      dispatch(getRequestsAction(requests.requestsFromPending, requests.requestsToPending, requests.requestsFromCompleted, requests.requestsToCompleted, requests.requestsFromBorrowed, requests.requestsToBorrowed))
    }
  }
}
