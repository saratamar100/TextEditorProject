import React, { Component } from "react";
import "./TextEditor.css";
import LanguageSelector from "./languageselector";
import FormattingOptions from "./formattingoptions";
import Keyboard from "./keyboard";
import DisplayArea2 from "./displayarea2";

class TextEditor extends Component {
  state = {
    text: "",
    language: "English",
    fontSize: "medium",
    fontStyle: "normal",
    fontWeight: "noraml",
    color: "black",
    isUpperCase: false,
    history: [],
    colors: [],
    fontStyles: [],
    fontSizes: [],
    fontWeights: [],
  };

  puhsHistoy = () => {
    this.setState((oldState) => {
      let {
        language,
        history,
        fontSize,
        fontStyle,
        fontWeight,
        color,
        isUpperCase,
        ...rest
      } = oldState;
      history = this.state.history.slice();
      history.push(rest);
      return { history };
    });
  };

  handleUpdateText = (char) => {
    this.setState((oldState) => ({
      text:
        oldState.text + (this.state.isUpperCase ? char.toUpperCase() : char),
      colors: [...oldState.colors, oldState.color],
      fontStyles: [...oldState.fontStyles, oldState.fontStyle],
      fontSizes: [...oldState.fontSizes, oldState.fontSize],
      fontWeights: [...oldState.fontWeights, oldState.fontWeight],
    }));
    this.puhsHistoy();
  };

  handleChangeLanguage = (language) => {
    this.setState({
      language: language,
    });
  };

  handleChangeFontSize = (size) => {
    this.setState({
      fontSize: size,
    });
  };

  handleChangeFontStyle = () => {
    this.setState((oldState) => ({
      fontStyle: oldState.fontStyle === "italic" ? "normal" : "italic",
    }));
  };
  handleChangeColor = (color) => {
    this.setState({
      color: color,
    });
  };

  handleChangeCase = () => {
    this.setState((oldState) => ({
      isUpperCase: !oldState.isUpperCase,
    }));
  };

  handleChangeWeight = () => {
    this.setState((oldState) => ({
      fontWeight: oldState.fontWeight === "bold" ? "normal" : "bold",
    }));
  };

  handleDeleteLastChar = () => {
    this.setState((oldState) => ({
      text: oldState.text.slice(0, -1),
      colors: oldState.colors.slice(0, -1),
      fontStyles: oldState.fontStyle.slice(0, -1),
      fontSizes: oldState.fontSizes.slice(0, -1),
      fontWeights: oldState.fontWeights.slice(0, -1),
    }));
    this.puhsHistoy();
  };

  handleClearAllText = () => {
    this.setState({
      text: "",
      colors: [],
      fontStyles: [],
      fontSizes: [],
      fontWeights: [],
    });
    this.puhsHistoy();
  };

  handleUndoAction = () => {
    const history = this.state.history.slice();
    if (history.length > 0) {
      const lastState = history.pop();
      this.setState(lastState);
      this.setState({ history: history });
    } else {
      this.setState({
        text: "",
        fontSize: "medium",
        fontStyle: "normal",
        color: "black",
        isUpperCase: false,
      });
    }
  };

  render() {
    return (
      <div className="TextEditor">
        <h1 className="Header">Text Editor</h1>
        <div className="LanguageSelectorContainer">
          <LanguageSelector changeLanguage={this.handleChangeLanguage} />
        </div>
        <div className="DisplayAreaContainer">
          {/* <DisplayArea
            text={this.state.text}
            color={this.state.color}
            fontStyle={this.state.fontStyle}
            fontSize={this.state.fontSize}
            fontWeight={this.state.fontWeight}
          /> */}
          <DisplayArea2
            text={this.state.text}
            colors={this.state.colors}
            fontStyles={this.state.fontStyles}
            fontSizes={this.state.fontSizes}
            fontWeights={this.state.fontWeights}
          />
        </div>

        <div className="FormattingOptionsContainer">
          <FormattingOptions
            changeFontSize={this.handleChangeFontSize}
            changeFontStyle={this.handleChangeFontStyle}
            changeFontWeight={this.handleChangeWeight}
            changeColor={this.handleChangeColor}
            changeCase={this.handleChangeCase}
            clearAllText={this.handleClearAllText}
            undoAction={this.handleUndoAction}
            fontSize={this.state.fontSize}
            fontStyle={this.state.fontStyle}
            fontWeight={this.state.fontWeight}
            color={this.state.color}
            isUpperCase={this.state.isUpperCase}
          />
        </div>
        <div className="KeyboardContainer">
          <Keyboard
            updateText={this.handleUpdateText}
            language={this.state.language}
            deleteLastChar={this.handleDeleteLastChar}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
