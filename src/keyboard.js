import React, { Component } from "react";
class Keyboard extends Component {
  handleClick = (char) => {
    this.props.updateText(char);
  };

  render() {
    let buttons;
    // Letters
    const letters = {
      eng: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      heb: [
        "א",
        "ב",
        "ג",
        "ד",
        "ה",
        "ו",
        "ז",
        "ח",
        "ט",
        "י",
        "כ",
        "ך",
        "ל",
        "מ",
        "ם",
        "נ",
        "ן",
        "ס",
        "ע",
        "פ",
        "ף",
        "צ",
        "ץ",
        "ק",
        "ר",
        "ש",
        "ת",
      ],
    };
    // Numbers
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // Symbols
    const symbols = [
      "`",
      "~",
      "!",
      "@",
      "#",
      "$",
      "%",
      "^",
      "&",
      "*",
      "(",
      ")",
      "-",
      "_",
      "=",
      "+",
      "[",
      "{",
      "]",
      "}",
      "\\",
      "|",
      ";",
      ":",
      "'",
      '"',
      ",",
      "<",
      ".",
      ">",
      "/",
      "?",
    ];

    if (this.props.language === "English") {
      buttons = letters.eng.map((c) => (
        <button onClick={() => this.handleClick(c)}>{c}</button>
      ));
    } else {
      buttons = letters.heb.map((c) => (
        <button onClick={() => this.handleClick(c)}>{c}</button>
      ));
    }
    return (
      <>
        <div>{buttons}</div>
        <div>
          {numbers.map((c) => (
            <button onClick={() => this.handleClick(c)}>{c}</button>
          ))}
        </div>
        <div>
          {symbols.map((c) => (
            <button onClick={() => this.handleClick(c)}>{c}</button>
          ))}
        </div>
      </>
    );
  }
}

export default Keyboard;
