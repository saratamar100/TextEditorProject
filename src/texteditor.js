import React, { Component } from 'react';
import './TextEditor.css';
import LanguageSelector from './languageselector';
import DisplayArea from './displayarea';
import FormattingOptions from './formattingoptions';
import GeneralChanges from './generalchanges';
import Keyboard from './keyboard';
import SpecialActions from './specialactions';

class TextEditor extends Component {
  state = {
    text: '',
    language: 'English',
    fontSize: 'medium',
    fontStyle: 'normal',
    color: 'black',
    isUpperCase: false,
    history: [],
  };

  handleUpdateText = (char) => {
    const updatedText = this.state.text + char;
    const history = this.state.history.slice();
    history.push(this.state.text);
    this.setState({
      text: updatedText,
      history: history,
    });
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

  handleChangeFontStyle = (style) => {
    this.setState({
      fontStyle: style,
    });
  };

  handleChangeColor = (color) => {
    this.setState({
      color: color,
    });
  };

  handleChangeCase = () => {
    const isUpperCase = !this.state.isUpperCase;
    const updatedText = isUpperCase ? this.state.text.toUpperCase() : this.state.text.toLowerCase();
    this.setState({
      isUpperCase: isUpperCase,
      text: updatedText,
    });
  };

  handleDeleteLastChar = () => {
    const updatedText = this.state.text.slice(0, -1);
    this.setState({
      text: updatedText,
    });
  };

  handleClearAllText = () => {
    this.setState({
      text: '',
      history: [],
    });
  };

  handleUndoAction = () => {
    const history = this.state.history.slice();
    if (history.length > 0) {
      const lastState = history.pop();
      this.setState({
        text: lastState,
        history: history,
      });
    }
  };

  render() {
    return (
      <div className="TextEditor">
        <div className="KeyboardContainer">
          <Keyboard updateText={this.handleUpdateText} />
        </div>
        <div className="LanguageSelectorContainer">
          <LanguageSelector changeLanguage={this.handleChangeLanguage} />
        </div>
        <div className="DisplayAreaContainer">
          <DisplayArea text={this.state.text} />
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
