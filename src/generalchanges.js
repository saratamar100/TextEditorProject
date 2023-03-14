import React,{Component} from "react";
class GeneralChanges extends Component {
  handleChangeCase = () => {
    this.props.changeCase();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleChangeCase()}>Change Case</button>
        {/* Other buttons for different general changes */}
      </div>
    );
  }
}

export default GeneralChanges;