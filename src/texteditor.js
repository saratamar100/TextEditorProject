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
    let {language, ...rest} = this.state;/////history?
    console.log(rest);
    const history = this.state.history.slice();
    history.push(this.state);
    this.setState({
      history: history,
    });
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
    this.puhsHistoy();
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
    const isUpperCase = !this.state.isUpperCase;
    const updatedText = isUpperCase
      ? this.state.text.toUpperCase()
      : this.state.text.toLowerCase();
    this.setState({
      isUpperCase: isUpperCase,
      text: updatedText,
    });
    this.puhsHistoy();
  };

  handleDeleteLastChar = () => {
    const updatedText = this.state.text.slice(0, -1);
    this.setState({
      text: updatedText,
    });
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
    }
  };

  render() {
    return (
      <div className="TextEditor">
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
            deleteLastChar={this.handleDeleteLastChar}
            clearAllText={this.handleClearAllText}
            undoAction={this.handleUndoAction}
          />
        </div>
      </div>
    );
  }
}

export default TextEditor;
