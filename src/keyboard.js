import React, { Component } from "react";
class Keyboard extends Component {
  handleClick = (char) => {
    this.props.updateText(char);
  };

  render() {
    let buttons;
    const heb = ["א", "ב"];
    const en = ["a", "b"];
    if (this.props.language === 'English') {
      buttons = en.map((l) => (
        <button onClick={() => this.handleClick(l)}>{l}</button>
      ));
    } else {
      buttons = heb.map((l) => (
        <button onClick={() => this.handleClick(l)}>{l}</button>
      ));
    }
    return (
      <div>
        {buttons}
      </div>
    );
  }
}

export default Keyboard;
