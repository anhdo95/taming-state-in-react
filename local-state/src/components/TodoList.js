import React from "react";
import { connect } from "react-redux";
import TodoItem from "./TodoItem";
import { getTodosAsIds } from '../selectors/todo'

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
    todosAsIds: getTodosAsIds(state)
  };
};

export default connect(
  mapStateToProps
)(TodoList);
