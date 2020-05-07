import React from 'react';
import Input from './Input';

// Stateful/ Container component
class Counter extends React.Component {

    
  state = {
    name: ""
    
  };
  

  

  handleInputValues = (event) => {
    this.setState({
      name: event.target.value,
    });
  }

  render() {
    const { name } = this.state;
    return (
      <div>
          <form>

            <label>Name:</label>
            <Input myName={name} handleInputChange={this.handleInputValues} />


          </form>
          
        
        
      </div>
    )
  }
}

export default Counter;