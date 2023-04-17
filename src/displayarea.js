import React, { Component } from "react";
class DisplayArea extends Component {
  render() {
    return (
      <p className="display_area"
        style={{
          color: this.props.color,
          fontStyle: this.props.fontStyle,
          fontSize: this.props.fontSize,
          fontWeight: this.props.fontWeight
        }}
      >
        {this.props.text}
      </p>
    );
  }
}
export default DisplayArea;
