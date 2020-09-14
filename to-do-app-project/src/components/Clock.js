import React, { component, Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            Date: new Date()
        }
    }
    render() {
        return (
            <div className="Clock">
                <h2>It is {this.state.Date.toLocaleTimeString()}</h2>

            </div> 
        )
    }
}

export default Clock;