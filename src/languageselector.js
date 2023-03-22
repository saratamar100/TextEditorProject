import React,{Component} from "react";
class LanguageSelector extends Component {
  handleChangeLanguage = (language) => {
    this.props.changeLanguage(language);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleChangeLanguage('Hebrew')}>עברית</button>
        <button onClick={() => this.handleChangeLanguage('English')}>English</button>
        {/* Other buttons for different languages */}
      </div>
    );
  }
}

export default LanguageSelector;