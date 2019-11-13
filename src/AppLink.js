import React from 'react';
import link from './img/link.png';
import AppHeader from './AppHeader';

function AppLink() {
  return (<> 
  	  <a href="#">
      	<img src={link} width="100"/>
      </a>
    </>);
}

export default AppLink;