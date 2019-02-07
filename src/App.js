import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Containers/Login/login';
import {Greet} from './Containers/greet';
import AppComponent from './Containers/classComponent';
import MessageComponent from './Containers/message';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter, Container } from 'mdbreact';
import Data from './Containers/Data-grid/Data-grid';
const welcome = 'Welcome to react';

class App extends Component {

  state = {
    show : true
  }

  render() {
    const data = () => {
     this.setState({
      show : !this.state.show
     });
    }

    return (
      <div className="App">
      <Data></Data>
      </div>
    );
  }
}

class Welcome extends Component {
 
  render(){
    return(
      <div>
      <p>
      {welcome} {this.props.title}
    </p>
  
    </div>
    )
  }
}

export default App;
