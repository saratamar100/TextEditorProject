import React,{Component} from "react";
class FormattingOptions extends Component {
  handleChangeFontSize = (size) => {
    this.props.changeFontSize(size);
  };
  handleChangeFontWeight = (weight) => {
    this.props.changeFontWeight(weight);
  };

  handleChangeFontStyle = (style) => {
    this.props.changeFontStyle(style);
  };

  handleChangeColor = (color) => {
    this.props.changeColor(color);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleChangeFontSize('small')}>Small</button>
        <button onClick={() => this.handleChangeFontSize('medium')}>Medium</button>
        {/* Other buttons for different font sizes */}
        <button onClick={() => this.handleChangeFontWeight('bold')}>Bold</button>
        <button onClick={() => this.handleChangeFontStyle('italic')}>Italic</button>
        {/* Other buttons for different font styles */}
        <button onClick={() => this.handleChangeColor('red')}>Red</button>
        <button onClick={() => this.handleChangeColor('blue')}>Blue</button>
        {/* Other buttons for different colors */}
      </div>
    );
  }
}
export default FormattingOptions;
