import React, { Component } from 'react';
import List from './List';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      input: '',
      tasklist: []
    };
    }

  onChange = (event) =>{
    this.setState({
      input: event.target.value
    })
  }
  onSubmit = (event) => {
    event.preventDefault();
    this.setState({
      tasklist: this.state.tasklist.concat(this.state.input),
      input: ''
    })
  }

  render(){
    return (
      <div className="Form">
      <form onSubmit={this.onSubmit}>
          <input value = {this.state.input} onChange = {this.onChange} />
    </form>
    <List tasklist = {this.state.tasklist} />
      </div>
    )
  }

}
export default Form;
