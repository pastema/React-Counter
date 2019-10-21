import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>number: {this.state.number}</p>
        <p>
        <button onClick = {() => {this.setState({number:this.state.number + 1})}}>+</button>
        <button onClick = {() => {this.setState({number:this.state.number - 1})}}>-</button>
        </p>
      </header>
    </div>
  );
}
}

export default App;