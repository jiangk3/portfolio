import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import './website.css'


const styles= {
  mainHeaderStyle:{
    color: "#ffe5db",
    fontSize: "25px",
    paddingTop: "150px",
  },

}
const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    border: 0,
    color: '#3366ff',
    height: 40,
    padding: '0 15px',
    fontSize: "15px",
    fontFamily: "system-ui"
    //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);


class App extends Component {
  render() {
    return (
    <div>  
        <div align = "right">
          <button class="fill">ABOUT</button>
          <button class="close">EDUCATION</button>
          <button class="raise">INTERNSHIP</button>
          <button class="up">PORJECTS</button>
          <button class="slide">SKILL</button>
        </div>

        <div style={styles.mainHeaderStyle}>
          <h1 align="center">Hello, I'm Karen Jiang</h1>
        </div>

        <div>
          <h1>ABOUT</h1>
        </div>
    </div>
      
    );
  }
}

export default App;
