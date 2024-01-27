import React, { Component } from 'react'
import './classComponent.css';


class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            isActive: false,
        };
    }

handleClick = () => {
    this.setState({
        count: this.state.count +1,
        isActive: !this.state.isActive,
    }); 
};

handleClick2 = () => {
    this.setState({
        count: this.state.count >0 ? this.state.count -1 : 0,
        
    }); 
};

handleReset3 = () => {
    this.setState({
        count:(0),
        isActive: !this.state.isActive,
      
        
    }); 
};


  render() {
    
    return (
        <>
        <h1>Counter App</h1>
    <div className='container'>
     <button className='increment' onClick={this.handleClick}>+</button>
     <button className='reset' onClick={this.handleReset3}>Reset</button>
     <button className='decrement' onClick={this.handleClick2}>-</button>
     <p>{this.state.count}
     {this.state.isActive}</p>
    </div>
    </>
    );
      
  }
}

export default ClassComponent;

