import React,{Component} from "react";
class Keyboard extends Component {
  handleClick = (char) => {
    this.props.updateText(char);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClick('a')}>a</button>
        <button onClick={() => this.handleClick('b')}>b</button>
        {/* Other buttons for different characters */}
      </div>
    );
  }
}

export default Keyboard;
