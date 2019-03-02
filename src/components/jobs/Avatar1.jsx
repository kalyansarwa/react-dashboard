import React, { Component } from "react";
class Avatar extends Component {
  render() {
    let inner = null;

    console.log("PositionTitle---" + this.props.PositionTitle);

    {
      inner = (
        <svg height="60" width="260">
          <rect fill="#a0d36a" x="0" y="0" height="60" width="260" />
          <text
            fill="#ffffff"
            font-size="12"
            text-anchor="middle"
            x="60"
            y="16"
          >
            {this.props.PositionTitle}
          </text>
        </svg>
      );
    }
    console.log("PositionTitle---" + this.props.PositionTitle);
    return <div>{inner}</div>;
  }
}
export default Avatar;
