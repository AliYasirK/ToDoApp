import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);

        this.state = {
            Date: new Date()
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick()
        ,1000);
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({Date: new Date()});
    }

    render() {
        return (
            <div className="Clock">
                <h2>It is {this.state.Date.toLocaleTimeString()}</h2>
            </div> 
        );
    }
}

export default Clock;