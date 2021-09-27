import React, { Component } from "react";

export default class ExampleCL extends Component {
  constructor(props) {
    this.state = {
      windowWidth: window.innerWidth,
    };
  }

  componentDidMount() {
    console.log("The App component loaded");
  }

  componentDidUpdate(prevProps) {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="Hook">
        <center>
          <h1>The Effect Hook</h1>
          {/* <h2>The Window width is:{windowWidth}</h2> */}
        </center>
      </div>
    );
  }
}
