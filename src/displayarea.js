import React, { Component } from "react";
class DisplayArea extends Component {
  render() {
    return (
      <div
        style={{
          color: this.props.color,
          fontStyle: this.props.fontStyle,
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight,
        }}
      >
        {this.props.text}
      </div>
    );
  }
}
export default DisplayArea;
