import './App.css';
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import React, { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />
            <Routes>
            <Route exact path="/" element={<News key="general" pageSize={20} country="in" category="general" />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={20} country="in" category="business" />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={20} country="in" category="entertainment" />}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={20} country="in" category="general" />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={20} country="in" category="health" />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={20} country="in" category="science" />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={20} country="in" category="sports" />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={20} country="in" category="technology" />}></Route>
             key=""
            </Routes>
        </Router>
      </div>
    )
  }
}

