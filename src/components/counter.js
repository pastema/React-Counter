import React from 'react';


class Counter extends React.Component{
  constructor(props) {
    super(props);
    this.state = {number: 0};
  }
  
addNumber = () => {
  this.setState({number:this.state.number + 1})
  this.props.onCounterValueChange(1);
}

subtractNumber = () => {
  this.setState({number:this.state.number - 1})
  this.props.onCounterValueChange(-1);
}

  render(){

    return (    
          <p>
            <button onClick = {this.addNumber}><h1>+</h1></button>
            {this.state.number}
            <button onClick = {this.subtractNumber}><h1>-</h1></button>
          </p>
    );
  }
}

export default Counter;
