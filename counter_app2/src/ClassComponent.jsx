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
        count: this.state.count -1,
        isActive: !this.state.isActive,
    }); 
};

handleClick3 = () => {
    this.setState({
        count: this.state.count === 0,
        isActive: !this.state.isActive,
        
    }); 
};


  render() {
    
    return (
    <div className='container'>
     <button className='increment' onClick={this.handleClick}>+</button>
     <button className='reset' onClick={this.handleClick3}>Reset</button>
     <button className='decrement' onClick={this.handleClick2}>-</button>
     <p>{this.state.count}
     {this.state.isActive}</p>
    </div>
    );
      
  }
}

export default ClassComponent;