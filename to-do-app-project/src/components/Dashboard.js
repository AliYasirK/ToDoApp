import React, { Component } from "react";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);

  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div class="background">
        <div className="Dashboard">
          <h2 style={dash_style.heading}>
            It is {this.state.date.toLocaleTimeString()}
          </h2>
          <h3 style={dash_style.headingTwos}>Good evening</h3>
          <h4 style={dash_style.headingTwo}>Daily weather here.</h4>
          <button style={dash_style.button}>
            Click here, to view the daily weather
          </button>
        </div>
      </div>
    );
  }
}
const dash_style = {
  heading: {
    fontSize: "40px",
    color: "white",
  },
  headingTwos: {
    fontFamily: "yo",
    textAlign: "center",
    color: "white",
    fontSize: "30px",
  },
  headingTwo: {
    fontFamily: "yo",
    textAlign: "center",
    color: "white",
    fontSize: "20px",
  },

  button: {
    textAlign: "center",
    height: "40px",
    fontFamily: "yo",
  },
};

export default Dashboard;
