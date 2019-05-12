import React from "react";
import { connect } from "react-redux";
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
    todo: state.todo.entities[props.todoId]
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
