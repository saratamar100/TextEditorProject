import React,{Component} from "react";
class LanguageSelector extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguage(language);
  };

  render() {
    return (
      <div className="language-selector">
        <button className="buttonLetter lan" onClick={() => this.handleChangeLanguage('Hebrew')}>עברית</button>
        <button className="buttonLetter lan" onClick={() => this.handleChangeLanguage('English')}>English</button>
      </div>
    );
  }
}

export default LanguageSelector;