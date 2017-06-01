import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
// import {
//   BrowserRouter as Router,
//   Route,
//   Link
// } from 'react-router-dom';
import Main from './components/Main';
import Weather from './components/Weather';
import About from './components/About';
import Examples from './components/Examples';


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.querySelector('#root')
);
