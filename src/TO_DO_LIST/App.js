import React from 'react';
import './ContainerGroup.css';
import CounterGroup from './components/CounterGroup'

class App extends React.Component{


  
  render(){
    return (
      <div className="App">
        <header className="App-header">
        <CounterGroup defaultCounts={3}/>
          </header>
          <body className="counter-group input">
    
          </body>
      </div>
    );
  }
}

export default App;