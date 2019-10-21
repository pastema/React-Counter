import React, {Component} from 'react';
import Counter from './counter'


class CounterGroup extends Component {
    constructor(props){
        super(props);
        // this.handlInputChange.bind(this);
        this.state = {iterator: this.props.defaultCounts, inputValue: this.props.defaultCounts, sum: 0}
}


handleInputChange = (event) =>{
    this.setState({inputValue: event.target.value});
    // console.log("input value" + {inputValue: event.target.value});
}


regenerateCounters = () =>{
    this.setState({iterator: this.state.inputValue})
}


counterUpdateCallBack = changeNum =>{
    this.setState({sum: this.state.sum + changeNum})
}


renderCounters = () =>{
    let counters =[]
    for(let count = 0; count < this.state.iterator; count++){
        counters.push(
            <Counter key={count}
            onCounterValueChange = {this.counterUpdateCallBack}/>
        )
    }
    return counters;
}


    render() {
    let counters = this.renderCounters();
    return (
        <div>
                <input type="text" value={this.state.inputValue} onChange={this.handleInputChange}/><br/>
                <button onClick = {this.regenerateCounters}>Regenerate counters</button><br/>
                <span>Sum: {this.state.sum}</span>
                {counters}
            </div>
        );
    }
}

export default CounterGroup;