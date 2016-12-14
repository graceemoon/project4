import React, { Component } from 'react';
import style from './Post.css';
// import SinglePost from './../SinglePost/SinglePost';


const Post = (props) =>  {



		 return (
		 	<div id="container">
		 	  <link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

		 	<div className="post-cont">
		 	<h1>{`${props.post_title}`}</h1>
			<img src={`${props.post_img}`} width="300"/>
		 	<p>{`${props.post_content}`}</p>

			<br/>

			</div>
		 	</div>
		 );
	 
};

export default Post;