const VISIBILITY_FILTERS = {
  SHOW_COMPLETED: item => item.completed,
  SHOW_INCOMPLETED: item => !item.completed,
  SHOW_ALL: item => true
};

export const getTodosAsIds = state => {
  return state.todo.ids
    .map(id => getTodo(state, id))
    .filter(VISIBILITY_FILTERS[state.filter])
    .map(todo => todo.id);
};

export const getTodo = (state, todoId) => {
  return state.todo.entities[todoId];
};
