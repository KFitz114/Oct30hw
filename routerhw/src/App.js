// import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Posts from './Components/Posts.js';
import Todos from './Components/Todos.js';

function App() {
  return (
    <Router>
      <div className="totalContainer">
        <div className="container">
          <Link className="link" to="/"> Home </Link>
          <Link className="link" to="Posts"> Posts </Link>
          <Link className="link" to="Todos"> Todos </Link>
        </div>
        <div className="result">
          <Switch>
            <Route exact path="/"> <h1> Welcome to your organizer! </h1></Route>
            <Route path="/Posts"> <Posts  />  </Route>
            <Route path="/Todos"> <Todos  />  </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
