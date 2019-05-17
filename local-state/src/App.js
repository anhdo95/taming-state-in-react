import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
import createReduxSagaMiddleware from 'redux-saga';
import { watchAddTodoWithNotification } from "./saga";

import rootReducer from "./reducers/index";
import TodoApp from "./components/TodoApp";
import "./App.css";

const logger = createLogger();
const saga = createReduxSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(watchAddTodoWithNotification)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    );
  }
}

export default App;
