import { schema, normalize } from "normalizr";
import { TODO_ADD, TODO_TOGGLE, ASSIGNED_TO_CHANGE } from "../constant";

const initialState = [
  {
    id: "0",
    name: "create redux",
    completed: true,
    assignedTo: {
      id: "99",
      name: "Dan Abramov"
    }
  },
  {
    id: "1",
    name: "create mobx",
    completed: true,
    assignedTo: {
      id: "77",
      name: "Michel Weststrate"
    }
  }
];

const assignedToSchema = new schema.Entity("assignedTo");

const todoScheme = new schema.Entity("todo", {
  assignedTo: assignedToSchema
});

const normalizedData = normalize(initialState, [todoScheme]);

console.log('normalizedData', normalizedData)

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD:
      return applyAddTodo(state, action);
    case TODO_TOGGLE:
      return applyToggleTodo(state, action);
    case ASSIGNED_TO_CHANGE:
      return applyChangeAssignedTo(state, action);
    default:
      return state;
  }
};

function applyAddTodo(state, action) {
  const todo = { ...action.payload.todo, completed: false };
  return state.concat(todo);
}

function applyToggleTodo(state, action) {
  return state.map(todo =>
    todo.id === action.payload.todo.id
      ? { ...todo, completed: !todo.completed }
      : todo
  );
}

function applyChangeAssignedTo(state, action) {
  return state.map(todo => {
    if (todo.id === action.payload.todoId) {
      const assignedTo = { ...todo.assignedTo, name: action.payload.name };
      return { ...todo, assignedTo };
    } else {
      return todo;
    }
  });
}
