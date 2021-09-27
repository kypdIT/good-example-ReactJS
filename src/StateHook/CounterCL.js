import React, { Component } from "react";

export default class CounterCL extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  //   incremnt = () => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   };
  //   decremnt = () => {
  //     this.setState({
  //       count: this.state.count - 1,
  //     });
  //   };

  //Vi khi bam button cos the no van con su dung state cu nen se sai ket qua,
  //vi vay can dung chinh xac luon cais state truoc de khoi phai doi
  //vi du: 1 -> 2 -> 3 -> 4... neu ko dung cach nay co the 1 -> 2 -> 2 -> 3 -> 3 -> 4
  //co nghia la so duocw cong chua kip luu vaof state truoc
  incremnt = () => {
    this.setState((previousState) => ({
      count: previousState.count + 1,
    }));
  };
  decremnt = () => {
    this.setState((previousState) => ({
      count: previousState.count - 1,
    }));
  };
  render() {
    return (
      <div>
        <h1>The Count is: {this.state.count}</h1>
        <h2>--------------------------</h2>
        <button onClick={this.incremnt}> + </button>
        <button onClick={this.decremnt}> - </button>
      </div>
    );
  }
}
