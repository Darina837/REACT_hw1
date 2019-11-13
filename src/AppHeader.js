import React from 'react';

function AppHeader(props) {
  return (<> 
      <h2>{props.text}</h2>
      {props.children}
    </>);
}

export default AppHeader;