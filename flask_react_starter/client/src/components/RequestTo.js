import React from 'react'

const RequestTo = ({requestsTo}) =>{

  return(
    <>
    <div className={'request-list'}>
    <ul className={'request-list-ul'}>
    {requestsTo.map((requestTo) => (
      <li key={requestTo} className={'request-li'}>
        <div>{requestTo.game}</div>
        <div>Requested from: {requestTo.requestTo}</div>
      </li>
    ))}
  </ul>
  </div>
      </>)
}

export default RequestTo;
