import React from "react";
import Filter from "./Filter";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

export default () => {
  return (
    <>
      <Filter />
      <TodoCreate />
      <TodoList />
    </>
  );
};
