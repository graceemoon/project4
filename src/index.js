import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App.jsx';

import Welcome from './components/Welcome/Welcome.jsx';
import Start from './components/Start/Start.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';

// mount our App at #container

// ReactDOM.render( 
//   <App />, 
//   document.querySelector('#root-container')
//   );

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
	<Route path="/welcome" component={Welcome}/> 
	<Route path="/start" component={Start}/>
	<Route path="/login" component={Login}/>
	<Route path="/signup" component={Signup}/>	
  </Router>
), document.querySelector('#root-container'))

