import React, { Component } from 'react';
import style from './CommentContainer.css';
import Comment from './../Comment/Comment';


export default class CommentContainer extends Component {

	render() {

		 return (
		 	<div id="container">
		 	<div className="com-cont-cont">

		 	<Comment />

			</div>
		 	</div>
		 );
	 }
};