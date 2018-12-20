import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



const styles= {
  mainHeaderStyle:{
    color: "#ffe5db",
    fontSize: "30px",
  },

}

class App extends Component {
  render() {
    return (
      <div style={styles.mainHeaderStyle}>
        <h1 align="center">My name is <br/>Karen Jiang!</h1>
        <h2>Hello World</h2>
      </div>
    );
  }
}

export default App;
