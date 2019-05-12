import { schema, normalize } from "normalizr";
import { TODO_ADD, TODO_TOGGLE, ASSIGNED_TO_CHANGE } from "../constant";

const todos = [
  { id: "1", name: "Redux Standalone with advanced Actions" },
  { id: "2", name: "Redux Standalone with advanced Reducers" },
  { id: "3", name: "Bootstrap App with Redux" },
  { id: "4", name: "Naive Todo with React and Redux" },
  { id: "5", name: "Sophisticated Todo with React and Redux" },
  { id: "6", name: "Connecting State Everywhere" },
  { id: "7", name: "Todo with advanced Redux" },
  { id: "8", name: "Todo but more Features" },
  { id: "9", name: "Todo with Notifications" },
  { id: "10", name: "Hacker News with Redux" }
];

const todoSchema = new schema.Entity("todo");
const normalizedTodos = normalize(todos, [todoSchema]);
const initialTodoState = {
  entities: normalizedTodos.entities.todo,
  ids: normalizedTodos.result
};

console.log("initialTodoState :", initialTodoState);

export default (state = initialTodoState, action) => {
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

  const entities = { ...state.entities, [todo.id]: todo };
  const ids = state.ids.concat(todo.id);

  return { ...state, entities, ids };
}

function applyToggleTodo(state, action) {
  const id = action.payload.todo.id;
  const todo = state.entities[id];
  const toggledTodo = { ...todo, completed: !todo.completed };

  const entities = { ...state.entities, [id]: toggledTodo };

  return { ...state, entities };
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
