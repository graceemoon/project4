import React, { Component } from 'react';
import style from './Start.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';



export default class Start extends Component {

	render() {

		 return (
		 	<div id="start-container">
			 	<Header/>

			 	<div>Start Page</div>

			 	<Footer/>
		 	</div>
		 );
	 }
};