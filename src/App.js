import React, { Component } from 'react';
import Header from './component/header/Header';
import List from './component/list/List';
import Footer from './component/footer/Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>To Do List</h1>
      <Header/> 
      <List/>
      <Footer/>
     </div>
    )
  }
}


