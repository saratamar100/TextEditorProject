import React, { Component } from "react";
import "./TextEditor.css";
import LanguageSelector from "./languageselector";
import DisplayArea from "./displayarea";
import FormattingOptions from "./formattingoptions";
import GeneralChanges from "./generalchanges";
import Keyboard from "./keyboard";
import SpecialActions from "./specialactions";

class TextEditor extends Component {
  state = {
    text: "",
    language: "English",
    fontSize: "medium",
    fontStyle: "normal",
    color: "black",
    isUpperCase: false,
    history: [],
  };

  puhsHistoy = () => {
    this.setState((oldState) => {
      let { language, history, ...rest } = oldState;
      history = this.state.history.slice();
      history.push(rest);
      return { history };
    });
    console.log(this.state.history);
  };

  handleUpdateText = (char) => {
    //const updatedText = this.state.text + char;
    this.setState((oldState) => ({ text: oldState.text + char }));
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
    this.puhsHistoy();
  };

  handleChangeFontStyle = (style) => {
    this.setState({
      fontStyle: style,
    });
    this.puhsHistoy();
  };

  handleChangeColor = (color) => {
    this.setState({
      color: color,
    });
    this.puhsHistoy();
  };

  handleChangeCase = () => {
    this.setState((oldState) => ({
      text: oldState.isUpperCase
        ? oldState.text.toLowerCase()
        : oldState.text.toUpperCase(),
      isUpperCase: !oldState.isUpperCase,
    }));
    this.puhsHistoy();
  };

  handleDeleteLastChar = () => {
    this.setState((oldState) => ({ text: oldState.text.slice(0, -1) }));
    this.puhsHistoy();
  };

  handleClearAllText = () => {
    this.setState({
      text: "",
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
        <div className="KeyboardContainer">
          <Keyboard
            updateText={this.handleUpdateText}
            language={this.state.language}
          />
        </div>
        <div className="LanguageSelectorContainer">
          <LanguageSelector changeLanguage={this.handleChangeLanguage} />
        </div>
        <div className="DisplayAreaContainer">
          <DisplayArea
            text={this.state.text}
            color={this.state.color}
            fontStyle={this.state.fontStyle}
            fontSize={this.state.fontSize}
          />
        </div>
        <div className="FormattingOptionsContainer">
          <FormattingOptions
            changeFontSize={this.handleChangeFontSize}
            changeFontStyle={this.handleChangeFontStyle}
            changeColor={this.handleChangeColor}
          />
        </div>
        <div className="GeneralChangesContainer">
          <GeneralChanges changeCase={this.handleChangeCase} />
        </div>
        <div className="SpecialActionsContainer">
          <SpecialActions
            clearAllText={this.handleClearAllText}
            undoAction={this.handleUndoAction}
          />
        </div>
        <div className="KeyboardContainer">
          <Keyboard
            updateText={this.handleUpdateText}
            language={this.state.language}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
