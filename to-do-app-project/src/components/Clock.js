import React, { Component } from 'react';
import { Link } from "react-router-dom";


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
                <h2>ToDo App, is an app that helps people keep track of time</h2>
                <h4>Whether you're on the run, or asleep, you will never have <br/>to worry about time ever again!</h4  >
                <h2>It is currently {this.state.Date.toLocaleTimeString()}</h2>
                <Link className="link" to="/todos">
              ToDo List
            </Link>

            </div> 
        );
    }
}

export default Clock;