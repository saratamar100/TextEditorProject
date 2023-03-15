import React, { Component } from "react";
class DisplayArea extends Component {
  render() {
    console.log(this.props);
    return (
      <div
        style={{
          color: this.props.color,
          fontStyle: this.props.fontStyle,
          fontSize: this.props.fontSize,
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
export default DisplayArea;
