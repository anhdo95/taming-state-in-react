import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = ({ todosAsIds }) => {
  return (
    <div>
      {todosAsIds.map(todoId => (
        <TodoItem key={todoId} todoId={todoId} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    todosAsIds: state.todo.ids
  };
};

export default connect(
  mapStateToProps
)(TodoList);
