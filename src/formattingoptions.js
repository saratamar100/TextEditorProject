import React,{Component} from "react";
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
    return (
      <div>
        <button className="buttonOther" onClick={() => this.handleChangeFontSize('small')}>Small</button>
        <button className="buttonOther" onClick={() => this.handleChangeFontSize('medium')}>Medium</button>
        {/* Other buttons for different font sizes */}
        <button className="buttonOther"onClick={() => this.handleChangeFontWeight()}>Bold</button>
        <button className="buttonOther" onClick={() => this.handleChangeFontStyle()}>Italic</button>
        {/* Other buttons for different font styles */}
        <button className="buttonOther" onClick={() => this.handleChangeColor('red')}>Red</button>
        <button className="buttonOther" onClick={() => this.handleChangeColor('blue')}>Blue</button>
        {/* Other buttons for different colors */}
        <button className="buttonOther" onClick={() => this.handleChangeCase()}>Change Case</button>
        <button className="buttonOther" onClick={() => this.handleClearAllText()}>Clear All Text</button>
        <button className="buttonOther" onClick={() => this.handleUndoAction()}>Undo Action</button>
      </div>
    );
  }
}
export default FormattingOptions;
