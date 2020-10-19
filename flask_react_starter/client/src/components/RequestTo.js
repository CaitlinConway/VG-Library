import React from 'react'

const RequestTo = ({requestsTo}) =>{

  return(
    <>
    <div id={'request-list'}>
    <ul id={'request-list-ul'}>
    {requestsTo.map((requestTo) => (
      <li key={requestTo} id={'Request-li'}>
        <div>{requestTo.game}</div>
        <div>Requested from: {requestTo.requestTo}</div>
      </li>
    ))}
  </ul>
  </div>
      </>)
}

export default RequestTo;
