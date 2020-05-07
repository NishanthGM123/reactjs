import React from 'react';
//import Input from './Input';

class Counter extends React.Component {
  state = {
    firstName: '',
    age: [],
    address: ''
  };

  handleInputValues = (event) => {
    this.setState({
      firstName: event.target.value,
      age:event.target.value,
      address: event.target.value
    });
  }

 

  render() {
    const { firstName,age,address } = this.state;
    return (
      <div>
        <h2>State Uplift In Form Component</h2>
        <label>Name:</label>
        <input myName={firstName}  handleInputChange={this.handleInputValues} /><br />
        <label>Age:</label>
        <input  myAge={age}  handleInputChange={this.handleInputValues} /><br />
        <label>Address:</label> 
        <input  myAddress={address} handleInputChange={this.handleInputValues} />
      </div>
    )
  }
}

export default Counter;
