import React, { Component } from 'react';
import style from './App.css';
import { Link } from 'react-router'

// import Header from './Header/Header';
// import Footer from './Footer/Footer';
import Welcome from './Welcome/Welcome';


export default class App extends Component {
 constructor() {
    super();
    this.getAllPosts = this.getAllPosts.bind(this)
    this.state = {
    	posts: [],
    	comments: [],
    };
  }

componentDidMount() {
	this.getAllPosts();
}

getAllPosts() {
    fetch('/api')
    .then(r => r.json())
    .then((data) => {
      console.log(data)
      this.setState({
        posts: data,
      });
    })
    .catch(err => console.log(err));
  }


deletePost(event) {
  // Implement abandoning a puppy here :(
  let id = event.target.getAttribute('id');
  console.log('You can\'t delete food.. just get fat')
  fetch(`/api/posts/${id}`,  { 
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'DELETE'})
  .then(this.getAllPosts())
  .catch(err => console.log('Bye Bye Sweets... or something like that', err))
}


addPost(infoToAdd) {
  console.log('addpost', infoToAdd);
  return fetch('/api/newpost', {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(infoToAdd)
  });
}

handleAddPostSubmit(e) {
  e.preventDefault();
  console.log('this is handling add post submit')
  this.addPost();
}




render() {

 return (
  <div id= "container">
	  <link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

     {this.props.children && React.cloneElement(this.props.children, {
              state: this.state,
              deletePost: this.deletePost.bind(this),
              addPost: this.addPost.bind(this),
              handleAddPostSubmit: this.handleAddPostSubmit.bind(this)
            })}


  </div>
   );
 }
};