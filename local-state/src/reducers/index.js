import { combineReducers } from "redux";
import todo from './todo';
import filter from './filter';
import notification from './notification';

export default combineReducers({
  todo,
  filter,
  notification,
});
