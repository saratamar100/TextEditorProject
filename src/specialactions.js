import React,{Component} from "react";
class SpecialActions extends Component {

  handleClearAllText = () => {
    this.props.clearAllText();
  };

  handleUndoAction = () => {
    this.props.undoAction();
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleClearAllText()}>Clear All Text</button>
        <button onClick={() => this.handleUndoAction()}>Undo Action</button>
        {/* Other buttons for different special actions */}
      </div>
    );
  }
}

export default SpecialActions;