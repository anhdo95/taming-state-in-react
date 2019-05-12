import React, { Component } from "react";
// import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import { addTodo, doSetFilter } from "../actions";

class TodoApp extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.addTodo({ id: 100, name: "new todo" });
    this.props.doSetFilter("COMPLETED");
  }

  render() {
    return <TodoList />;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: newTodo => dispatch(addTodo(newTodo)),
    doSetFilter: filter => dispatch(doSetFilter(filter))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(TodoApp);
