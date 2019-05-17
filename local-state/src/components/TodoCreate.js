import React, { Component } from "react";
import { connect } from "react-redux";
import uuid from "uuid/v4";
import {
  doAddTodoWithNotification,
} from "../actions";

class TodoCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  onChangeName = event => {
    this.setState({ value: event.target.value });
  };

  onCreateTodo = event => {
    this.props.onAddTodo({ id: uuid(), name: this.state.value });
    this.setState({ value: "" });

    event.preventDefault();
  };

  render() {
    return (
      <form onSubmit={this.onCreateTodo}>
        <input
          type="text"
          placeholder="Add Todo..."
          value={this.state.value}
          onChange={this.onChangeName}
        />
        <button type="button" onClick={this.onCreateTodo}>
          Add
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodo: newTodo => dispatch(doAddTodoWithNotification(newTodo))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoCreate);
