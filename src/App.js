import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HeaderComponent from './components/Header/HeaderComponent';
import BodyComponent from './components/Body/BodyComponent';
import FooterComponent from './components/Footer/FooterComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderComponent/>
        <BodyComponent/>
        <FooterComponent/>
      </div>
    );
  }
}

export default App;
