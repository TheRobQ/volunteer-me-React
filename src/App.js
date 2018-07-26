import React, { Component } from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Signin from './components/Signin';


class App extends Component {
  constructor(props){
    super(props);
    this.state= {content: ''}

  }
  render() {
    return (
      <div className="App">
        <Signin value={'props', this.state.content}/>
      </div>
    );
  }
}

export default App;
