import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux"; 
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";
import App from "./components/TodoApp.jsx";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);