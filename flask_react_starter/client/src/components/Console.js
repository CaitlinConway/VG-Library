import React from "react";
import { Redirect, NavLink, Route } from 'react-router-dom';

const Console = ({ console})=> {
  // function handleClick() {
  //   return (<Redirect to={`/consoles/${console}`}></Redirect>)
  // }
  return (
    <>
      <div id={'console-links'}>
        <NavLink id={'console-name'} to={`/consoles/${console}`}>{console}
        </NavLink>
        {/* <NavLink to={{
          pathname:`/consoles/${console}`,
          aboutProps: {games:games}
        }}>{console}</NavLink> */}
      </div>
    </>
  )
};


export default Console;
