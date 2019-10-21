

import React from 'react';
import ReactDOM from 'react-dom';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.counter = {number: 0, total: 0};
    this.state = { iterator: 0 };
  }
  myChangeHandler = (event) => {
    this.setState({iterator: event.target.value});
  }


  render() {
    var rows = [];
    for(var i = 0; i <= {state:this.state.iterator}; i++) {
    rows.push(i);
    }    

    return (

    <p>
      <form>
      <h1>{this.state.iterator}</h1>
      <p>Enter number/s:</p>
      <input
        type='number'
        onChange={this.myChangeHandler}
      />
      </form>

        <p><h1>SUM: {this.counter.total}</h1></p>
        
    
      
    </p>
    
    );
  }
}


export default Form;


 /* <button onClick = {() => {this.setState({counter:this.counter.number + 1},this.setState({total:this.counter.total + 1}))}}><h1>+</h1></button>
        {this.counter.number}
       <button onClick = {() => {this.setState({counter:this.counter.number - 1},this.setState({total:this.counter.total - 1}))}}><h1>-</h1></button> */