import React, { Component } from "react";
import DeleteButton from "./deletebutton";
import LanguageSelector from "./languageselector";
class Keyboard extends Component {
  handleClick = (char) => {
    this.props.updateText(char);
  };

  render() {
    let lines = [
      ["`", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1", "-", "="],
      ["ק", "ר", "א", "ט", "ו", "י", "פ", "ס", "ד", "ג", "כ", "ל", "ך", "ף"],
      ["ז", "ח", "ט", "י", "ן", "מ", "צ", "ש", "ב", "ה", "נ", "מ", "ם"],
      ["כ", "ל", "ע", "פ", "ך", "ף", "ץ", ",", ".", "/", "?", "!"],
    ];
    if (this.props.language === "English") {
      lines = [
        ["`", "0", "9", "8", "7", "6", "5", "4", "3", "2", "1", "-", "="],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "?", "!"],
      ];
    }

    return (
      <>
        <div>
          <DeleteButton deleteLastChar={this.props.deleteLastChar} />
          {lines[0].map((c) => (
            <button
              className="buttonLetter"
              onClick={() => this.handleClick(c)}
            >
              {c}
            </button>
          ))}
        </div>
        {lines.slice(1).map((line) => (
          <div>
            {line.map((c) => (
              <button
                className="buttonLetter"
                onClick={() => this.handleClick(c)}
              >
                {c}
              </button>
            ))}
          </div>
        ))}
        <div>
          <button
            className="buttonLetter space"
            onClick={() => this.handleClick(" ")}
          >
            Space
          </button>
          <LanguageSelector changeLanguage={this.props.changeLanguage} />
        </div>
      </>
    );
  }
}

export default Keyboard;
