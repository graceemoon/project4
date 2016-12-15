import React, { Component } from 'react';
import style from './NewPost.css';
import Header from './../Header/Header';
import Footer from './../Footer/Footer';

export default class NewPost extends Component {

	render() {
		 return (
		 	<div id="container">
		 		<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />
		 		<Header />
		 		<div className="cont">
			 	<div className="new-post-cont">
			 	<h1 className="new-posth1">New Post</h1>
				<form method="post" onSubmit={this.props.handleAddPostSubmit}>
					  <input className="p-title" type="text" name="p-title" placeholder="post title" onChange={this.props.handleChangeTitle}/><br/>
					  <input className="p-img" type="text" name="p-img" placeholder="image link" onChange={this.props.handleChangeImg}/><br/>
					  <textarea className="p-content" type="text" placeholder="content" onChange={this.props.handleChangeContent}/><br/>
					  <input className="p-submit" type="submit" value="Submit"/>
				</form>			 	
				</div>
				</div>
				<Footer />
		 	</div>
		 );
	 }
};