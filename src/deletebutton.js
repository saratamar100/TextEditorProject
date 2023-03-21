import React, { Component } from "react";
class DeleteButton extends Component {
  render() {
    return (
      <button onClick={this.props.handleDeleteLastChar}>
        Delete Last Character
      </button>
    );
  }
}

export default DeleteButton;
