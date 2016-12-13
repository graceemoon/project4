
import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Start.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import PostContainer from './../PostContainer/PostContainer';


const Start = (props) => {
console.log(props)


		 return (
		 	<div id="container">
		 		<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

			 	<div className="start-cont">
				 	<Header />
				 	
				 	<div>Start Page</div>
				 	<Link className="newpost-butt" to="/newpost">New Post</Link>
				 	<PostContainer 
				 	posts={props.state.posts}/>

				 	<Footer />
				</div>
		 	</div>
		 );
};

export default Start;