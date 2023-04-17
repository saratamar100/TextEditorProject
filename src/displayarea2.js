import React, { Component } from "react";

class DisplayArea2 extends Component {
  render() {
    const { text } = this.props;
    const styles = [];

    // Create an array of styled span elements for each character in the text
    for (let i = 0; i < text.length; i++) {
      const charStyle = {
        color: this.props.colors[i % this.props.colors.length],
        fontStyle: this.props.fontStyles[i % this.props.fontStyles.length],
        fontSize: this.props.fontSizes[i % this.props.fontSizes.length],
        fontWeight: this.props.fontWeights[i % this.props.fontWeights.length],
      };
      styles.push(
        <span key={i} style={charStyle}>
          {text.charAt(i)}
        </span>
      );
    }

    return <p className="display_area">{styles}</p>;
  }
}

export default DisplayArea2;
