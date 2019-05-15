import { TODO_ADD, NOTIFICATION_HIDE } from "../constant";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADD: {
      return applySetNotifyAboutAddTodo(state, action);
    }

    case NOTIFICATION_HIDE: {
      return applyRemoveNotification(state, action);
    }
    default:
      return state;
  }
};

function applySetNotifyAboutAddTodo(state, action) {
  const { name, id } = action.payload.todo;

  return { ...state, [id]: `Todo created: ${name}` };
}

function applyRemoveNotification(state, action) {
  const notification = { ...state };

  delete notification[action.payload.id];

  return notification;
}
