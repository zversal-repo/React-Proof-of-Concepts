import React, { Component } from 'react'
import './App.css';
import GreatWall from './Containers/Great-wall/GreatWall';


class App extends Component {

 constructor(props){
   super(props);
}
  render() {
    return (
      <div className="App">
      <GreatWall   pageSize = '10' minRows = '0' symbol = 'MSFT'></GreatWall>
      </div>
    );
  }
}



export default App;
