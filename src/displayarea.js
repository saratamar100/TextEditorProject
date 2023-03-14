import React,{Component} from "react";
class DisplayArea extends Component {
  render() {
    return (
      <div>
        {this.props.text}
      </div>
    );
  }
}
export default DisplayArea;
