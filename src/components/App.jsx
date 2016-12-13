import React, { Component } from 'react';
import style from './App.css';
import { Link } from 'react-router'

// import Header from './Header/Header';
// import Footer from './Footer/Footer';
import Welcome from './Welcome/Welcome';


export default class App extends Component {
 constructor() {
    super();
    this.state = {
    	posts: [],
    };
  }

componentDidMount() {
	this.getAllPosts();
}

getAllPosts() {
    fetch('/api', {
      headers: {
        'content-type': 'application/json',
      },
      method: 'GET',
    })
    .then(r => r.json())
    .then((data) => {
      this.setState({
        posts: data,
      });
    })
    .catch(err => console.log(err));
  }

render() {

 return (
  <div id= "container">
	  <link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

     {this.props.children && React.cloneElement(this.props.children, {
              state: this.state,
            })}


  </div>
   );
 }
};