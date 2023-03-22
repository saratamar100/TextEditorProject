import React, { Component } from "react";
class DeleteButton extends Component {
  render() {
    return (
      <button className="deleteButton" onClick={this.props.handleDeleteLastChar}>
        &#8592;
      </button>
    );
  }
}

export default DeleteButton;
