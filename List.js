import React, { Component } from 'react';

class List extends Component {
  /* constructor() {

  } */
  render(){
    return (
      <div className="List">
      <ul>
        {this.props.tasklist.map((task,index) => <li key={index}>{task}</li>)}
      </ul>
      </div>
    );
  }
}



export default List;
