import React from "react";
import { connect } from "react-redux";
import { getTodo } from '../selectors/todo'
import { toggleTodo } from "../actions";

const TodoItem = ({ todo, onToggleTodo }) => {
  const { name, id, completed } = todo;

  return (
    <div>
      {name}
      <button onClick={() => onToggleTodo(id)}>
        {completed ? "Incomplete" : "Complete"}
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    todo: getTodo(state, props.todoId)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTodo: id => dispatch(toggleTodo({ id }))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoItem);
