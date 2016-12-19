import React, { Component } from 'react';
import style from './Login.css';
import { Link } from 'react-router'
import Header from './../Header/Header';
import Footer from './../Footer/Footer';



export default class Login extends Component {
render() {

 return (
  <div id= "container">
		<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />
		<Header />
		
		<div className="log-cont">
			<div className="login-form">
				<div className="p-login">log in</div>
				<input className="user-input" type="text" placeholder="username" />
				<br/>
				<input className="pass-input" type="text" placeholder="password" />
				<br/>
				<br/>

				<Link className="log-butt" to="/start">log in</Link>

			</div>
		</div>
		<Footer />
  </div>
   );
 }
};