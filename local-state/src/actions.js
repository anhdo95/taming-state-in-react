import {
  TODO_ADD,
  TODO_TOGGLE,
  FILTER_SET,
  ASSIGNED_TO_CHANGE
} from "./constant";

export const addTodo = todo => {
  return {
    type: TODO_ADD,
    payload: {
      todo
    }
  };
};

export const toggleTodo = todo => {
  return {
    type: TODO_TOGGLE,
    payload: {
      todo
    }
  };
};

export const doSetFilter = filter => {
  return {
    type: FILTER_SET,
    filter
  };
};

export const assignedToChange = () => {
  return {
    type: ASSIGNED_TO_CHANGE,
    payload: {
      todoId: 0,
      name: "Dan Abramov and Andrew Clark"
    }
  };
};
