import React from "react";
import Filter from "./Filter";
import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";
import Notifications from "./Notifications";

export default () => {
  return (
    <>
      <Filter />
      <TodoCreate />
      <TodoList />
      <Notifications />
    </>
  );
};
