import React, { Component } from 'react';
import style from './PostContainer.css';

import Post from './../Post/Post';



 const PostContainer = (props) => {

  const mappedPosts = props.state.posts.map((post) => {
    return (
      <Post
      	id={post.id}
        user_id={post.user_id}
        post_title={post.post_title}
        post_content={post.post_content}
      />
    );
  });

  return (
    <div id="post-container">
    	<link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />
      {mappedPosts}
    </div>
  );
};

export default PostContainer;