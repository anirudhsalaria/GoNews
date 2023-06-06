import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <News pageSize={20} country="in" category="technology" />
        </Router>
      </div>
    )
  }
}

