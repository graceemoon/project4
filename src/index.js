import React    from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App.jsx';

import Welcome from './components/Welcome/Welcome.jsx';
import Start from './components/Start/Start.jsx';
import Login from './components/Login/Login.jsx';
import Signup from './components/Signup/Signup.jsx';
import NewPost from './components/NewPost/NewPost.jsx';
import NewComment from './components/NewComment/NewComment.jsx';

// mount our App at #container

// ReactDOM.render( 
//   <App />, 
//   document.querySelector('#root-container')
//   );

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" components={App} >
		<IndexRoute components={Welcome}/> 
		<Route path="/start" components={Start}/>
		<Route path="/login" components={Login}/>
		<Route path="/signup" components={Signup}/>	
		<Route path="/newpost" components={NewPost}/>
		<Route path="/newcomment" components={NewComment}/>
	</Route>		
  </Router>
), document.querySelector('#root-container'))

