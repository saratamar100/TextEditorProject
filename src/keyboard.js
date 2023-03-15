import React, { Component } from "react";
class Keyboard extends Component {
  handleClick = (char) => {
    this.props.updateText(char);
  };

  render() {
    let lines = [
      ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
      ["ק", "ר", "א", "ט", "ו", "י", "פ", "ס", "ד", "ג", "כ", "ל", "ך", "ף"],
      ["ז", "ח", "ט", "י", "ן", "מ", "צ", "ש", "ב", "ה", "נ", "מ", "ם"],
      ["כ", "ל", "ע", "פ", "ך", "ף", "ץ", ",", ".", "/"],
    ];
    if (this.props.language === "English") {
      lines = [
        ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "="],
        ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\"],
        ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
        ["z", "x", "c", "v", "b", "n", "m", ",", ".", "/"],
      ];
    }

    return (
      <>
        {lines.map((line) => (
          <div>
            {line.map((c) => (
              <button onClick={() => this.handleClick(c)}>{c}</button>
            ))}
          </div>
        ))}
      </>
    );
    /*
    let buttons;
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
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

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
    );*/
  }
}

export default Keyboard;
