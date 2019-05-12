export const getTodosAsIds = state => {
  return state.todo.ids;
};

export const getTodo = (state, todoId) => {
  return state.todo.entities[todoId];
};
