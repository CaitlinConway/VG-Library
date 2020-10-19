import React from 'react'

const RequestFrom = ({requestsFrom}) =>{

  return(
    <>

    <div id={'request-list'}>
    <ul id={'request-list-ul'}>
    {requestsFrom.map((requestFrom) => (
      <li key={requestFrom} id={'Request-li'}>
        <div>{requestFrom.game}</div>
        <div>Requested by: {requestFrom.requestFrom}</div>
      </li>
    ))}
  </ul>
  </div>
      </>)
}

export default RequestFrom;
