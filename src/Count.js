import React, {Component} from "react"
import Input from './Input';

class Count extends Component {
  constructor() {
      super()
      this.state = {
          firstName: "",
          lastName: "",
          age:""
      }
      this.handleChange = this.handleChange.bind(this)
    
      this.handleAge = this.handleAge.bind(this)
  }
  
  handleChange(event) {
      this.setState({
          firstName: event.target.value
          
      })
  }

  handleChange1(event) {
    this.setState({
        lastName: event.target.value
        
    })
}

handleAge(event) {
    this.setState({
        age:event.target.value
    
    })
}
  
  render() {
      console.log(this.state)
      return (
          <form>
              
              
              
            
              <Input  myAge={this.state.age} onageChange={this.handleAge}/>
              <Input  myAge={this.state.firstName} onageChange={this.handleChange}/>
          </form>
      )
  }
}

export default Count
