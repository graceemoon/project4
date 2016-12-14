import React from 'react';
import style from './Welcome.css';
import { Link } from 'react-router';

const Welcome = (props) => (

  <div id= "welcome-container">
	 <link href="https://fonts.googleapis.com/css?family=Amatica+SC:400,700|Bentham|Comfortaa:300,400,700|Fredoka+One|Gruppo|Judson:400,400i,700|Life+Savers:400,700|Open+Sans+Condensed:300,300i,700|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Prata|Roboto+Slab:100,300,400,700|Rufina:400,700|Suranna" rel="stylesheet" />

<div className="blah">
	  <div className="welcome-container">
      <div className="welcome-page">
        <h1 className="welcomeh1">WELCOME</h1>
        <h1 className="toh1">-   to   -</h1>
        <h1 className="fattoasth1">Fat Toast</h1>
      </div>

      <div className="buttons-row">
        <button className="login-butt">
          <Link className="a-login" to="/login">LOG IN</Link>
        </button>
        <button className="signup-butt">
          <Link className="a-signup" to="/signup">SIGN UP</Link>
        </button>
      </div>

    </div>
 </div>   
  </div>
);

export default Welcome;