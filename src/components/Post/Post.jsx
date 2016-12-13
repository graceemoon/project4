import React, { Component } from 'react';
import style from './Post.css';
// import SinglePost from './../SinglePost/SinglePost';


export default class Post extends Component {

	render() {

		 return (
		 	<div id="container">
		 	  <link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

		 	<div className="post-cont">

			 	<div>Post Page</div>
			 	<Link className="toSinglePost" to="/singlepost">single post title</Link>
			 	<br/>


			</div>
		 	</div>
		 );
	 }
};