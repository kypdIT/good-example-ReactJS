import React, { Component } from "react";

export default class conPropCL extends Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    const { name, description } = this.props;
    return (
      <div>
        <p>{name}</p>
        <p>
          <i>{description}</i>
        </p>
      </div>
    );
  }
}
