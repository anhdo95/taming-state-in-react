import React, { Component } from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers/index";
import TodoApp from "./components/TodoApp";
import "./App.css";

const logger = createLogger();

const store = createStore(rootReducer, undefined, applyMiddleware(logger));

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
