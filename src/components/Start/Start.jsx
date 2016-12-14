
import React, { Component } from 'react';
import { Link } from 'react-router';
import style from './Start.css';
import Header from './../Header/Header';
// import Footer from './../Footer/Footer';
import PostContainer from './../PostContainer/PostContainer';

export default class Start extends Component {
	render(){


// const Start = (props) => {
// console.log(props)


		 return (
		 	<div id="container">
		 		<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />
				<Header />
			 	<div className="start-cont">


				 	<div className="new-cont">
				 	<Link className="newpost-butt" to="/newpost">New Post</Link>
				 	</div>

				 	<PostContainer 
				 	posts={this.props.state.posts}
				 	deletePost={this.props.deletePost}
				 	/>


				</div>
		 	</div>
		 );
		}
};

// export default Start;