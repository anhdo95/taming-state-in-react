import { delay, put, takeEvery } from "redux-saga/effects";
import {
  addTodo,
  doHideNotification
} from "./actions";
import { TODO_ADD_WITH_NOTIFICATION } from "./constant";

function* handleAddTodoWithNotification(action) {
  const { todo } = action;

  yield put(addTodo(todo));
  yield delay(3000);
  yield put(doHideNotification(todo.id));
}

export function* watchAddTodoWithNotification() {
  yield takeEvery(
    TODO_ADD_WITH_NOTIFICATION,
    handleAddTodoWithNotification
  );
}