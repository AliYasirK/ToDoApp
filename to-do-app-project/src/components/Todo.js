import React from 'react';

class Todo extends React.Component {

    render(){ 
        return  <li>
                <p>{this.props.id}</p>
                <p>{this.props.title}</p>
                <p>{this.props.description}</p>
                <input type="checkbox" checked={this.props.completed}></input>
                </li>;
    }
 }


export default Todo;