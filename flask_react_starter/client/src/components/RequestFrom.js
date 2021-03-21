import React from 'react'

const RequestFrom = ({requestsFrom}) =>{
  const approve =(e) =>{
    e.preventDefault();
  }
  return(
    <>

    <div className={'request-list'}>
    <ul className={'request-list-ul'}>
    {requestsFrom.map((requestFrom) => (
      <li key={requestFrom} className={'request-li'}>
        <div>{requestFrom.game}</div>
        <div>Requested by: {requestFrom.requestFrom}</div>
        <button onClick={approve}>Approve request</button>
      </li>
    ))}
  </ul>
  </div>
      </>)
}

export default RequestFrom;
