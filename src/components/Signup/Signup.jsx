import React, { Component } from 'react';
import style from './Signup.css';
import { Link } from 'react-router';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Login from './../Login/Login';

export default class Signup extends Component {
render() {

 return (
  <div id= "container">
		<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />
		<Header />
		<div className="sign-cont">
			<div className="signup-form">
				<div className="p-signup">sign up</div>
				<input className="c-user-input" type="text" placeholder="create username" />
				<br/>
				<input className="c-pass-input" type="text" placeholder="create password" />
				<br/>
				<br/>
				<Link className="sign-butt" to="/login">sign up</Link>
			</div>
		</div>
  	<Footer />
  </div>
   );
 }
};