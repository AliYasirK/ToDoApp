import React from 'react';
import './Todo.css';

class Todo extends React.Component {
    render(){ 
        return  (
            <div>
                <li>
                    
                    <h3>{this.props.title}</h3>
                    <p>{this.props.description}</p>
                    <input type="checkbox" checked={this.props.completed} onClick={() => this.props.handleCheckbox(this.props.id)}/>
                    <button onClick={() => this.props.handleDelete(this.props.id)}>Delete</button>
                </li>
            </div>
        );
    }
 }


export default Todo;