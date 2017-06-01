import React from 'react';
import Nav from './Nav';

const Main = (props) => {
    return (
      <div id="main">
        <Nav />
        {props.children}
      </div>
    );
  }

export default Main;
