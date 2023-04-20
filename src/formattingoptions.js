import React, { Component } from "react";
class FormattingOptions extends Component {
  handleChangeFontSize = (size) => {
    this.props.changeFontSize(size);
  };
  handleChangeFontWeight = () => {
    this.props.changeFontWeight();
  };

  handleChangeFontStyle = () => {
    this.props.changeFontStyle();
  };

  handleChangeColor = (color) => {
    this.props.changeColor(color);
  };

  handleChangeCase = () => {
    this.props.changeCase();
  };
  handleClearAllText = () => {
    this.props.clearAllText();
  };

  handleUndoAction = () => {
    this.props.undoAction();
  };

  render() {
    const { fontSize, fontStyle, fontWeight, color, isUpperCase } = this.props;
    const style = { backgroundColor: "DarkCyan" };
    return (
      <div>
        <button
          style={fontSize === "small" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeFontSize("small")}
        >
          Small
        </button>
        <button
          style={fontSize === "medium" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeFontSize("medium")}
        >
          Medium
        </button>
        <button
          style={fontSize === "large" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeFontSize("large")}
        >
          Large
        </button>

        <button
          style={fontWeight === "bold" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeFontWeight()}
        >
          Bold
        </button>
        <button
          style={fontStyle === "italic" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeFontStyle()}
        >
          Italic
        </button>

        <button
          style={color === "red" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeColor("red")}
        >
          Red
        </button>
        <button
          style={color === "blue" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeColor("blue")}
        >
          Blue
        </button>
        <button
          style={color === "black" ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeColor("black")}
        >
          Black
        </button>

        <button
          style={isUpperCase ? style : {}}
          className="buttonOther"
          onClick={() => this.handleChangeCase()}
        >
          CapsLock
        </button>
        <button
          className="buttonOther"
          onClick={() => this.handleClearAllText()}
        >
          Clear All Text
        </button>
        <button className="buttonOther" onClick={() => this.handleUndoAction()}>
          Undo Action
        </button>
      </div>
    );
  }
}
export default FormattingOptions;
